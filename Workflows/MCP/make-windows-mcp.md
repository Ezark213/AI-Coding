# Windows MCP Build Server Configuration

## 概要
Windows環境でのMCP（Master Control Program）ビルドサーバー設定ファイルです。

## 設定ファイル（.mcp.json）

```json
{
  "mcpServers": {
    "windows-build": {
      "command": "node",
      "args": ["./server/src/server.js"],
      "env": {
        "SERVER_PORT": "3001",
        "BUILD_PATH": "./build",
        "OUTPUT_PATH": "./dist",
        "DEV_COMMAND": "npm run dev",
        "BUILD_COMMAND": "npm run build",
        "NODE_ENV": "production"
      }
    }
  }
}
```

## サーバー構成

### ディレクトリ構造
```
project/
├── .mcp.json
├── server/
│   └── src/
│       └── server.js
├── build/
├── dist/
└── package.json
```

### server.js の実装例

```javascript
const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { exec } = require('child_process');
const path = require('path');

class WindowsBuildServer {
  constructor() {
    this.server = new Server(
      {
        name: 'windows-build-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // ビルドツールの設定
    this.server.setRequestHandler('tools/list', async () => ({
      tools: [
        {
          name: 'build_project',
          description: 'プロジェクトをビルドします',
          inputSchema: {
            type: 'object',
            properties: {
              target: { type: 'string', description: 'ビルド対象（dev/prod）' }
            }
          }
        },
        {
          name: 'clean_build',
          description: 'ビルドファイルをクリーンアップします'
        },
        {
          name: 'run_tests',
          description: 'テストを実行します'
        }
      ]
    }));

    // ビルドツールの実行
    this.server.setRequestHandler('tools/call', async (request) => {
      const { name, arguments: args } = request.params;
      
      switch (name) {
        case 'build_project':
          return await this.buildProject(args?.target || 'dev');
        case 'clean_build':
          return await this.cleanBuild();
        case 'run_tests':
          return await this.runTests();
        default:
          throw new Error(`Unknown tool: ${name}`);
      }
    });
  }

  async buildProject(target) {
    const command = target === 'prod' 
      ? process.env.BUILD_COMMAND 
      : process.env.DEV_COMMAND;
    
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`Build failed: ${error.message}`));
        } else {
          resolve({
            content: [{
              type: 'text',
              text: `Build completed successfully:\n${stdout}`
            }]
          });
        }
      });
    });
  }

  async cleanBuild() {
    const buildPath = process.env.BUILD_PATH || './build';
    const distPath = process.env.OUTPUT_PATH || './dist';
    
    return new Promise((resolve, reject) => {
      exec(`rmdir /s /q "${buildPath}" "${distPath}"`, (error) => {
        if (error && !error.message.includes('cannot find')) {
          reject(new Error(`Clean failed: ${error.message}`));
        } else {
          resolve({
            content: [{
              type: 'text',
              text: 'Build directories cleaned successfully'
            }]
          });
        }
      });
    });
  }

  async runTests() {
    return new Promise((resolve, reject) => {
      exec('npm test', (error, stdout, stderr) => {
        if (error) {
          reject(new Error(`Tests failed: ${error.message}`));
        } else {
          resolve({
            content: [{
              type: 'text',
              text: `Tests completed:\n${stdout}`
            }]
          });
        }
      });
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.log('Windows Build MCP Server running on stdio');
  }
}

const server = new WindowsBuildServer();
server.run().catch(console.error);
```

## package.json 設定

```json
{
  "name": "windows-build-mcp",
  "version": "1.0.0",
  "main": "server/src/server.js",
  "scripts": {
    "start": "node server/src/server.js",
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production",
    "test": "jest",
    "clean": "rimraf build dist"
  },
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.0.0",
    "webpack": "^5.0.0",
    "webpack-cli": "^4.0.0"
  },
  "devDependencies": {
    "webpack-dev-server": "^4.0.0",
    "jest": "^29.0.0",
    "rimraf": "^3.0.0"
  }
}
```

## セットアップ手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. MCP サーバーの起動
```bash
# 開発モード
npm start

# または直接実行
node server/src/server.js
```

### 3. Claude Code での使用
Claude Code の設定でMCPサーバーを追加：
```json
{
  "mcpServers": {
    "windows-build": {
      "command": "node",
      "args": ["./server/src/server.js"],
      "cwd": "/path/to/your/project"
    }
  }
}
```

## 使用例

### プロジェクトのビルド
```bash
# 開発ビルド
build_project dev

# 本番ビルド
build_project prod
```

### ビルドクリーンアップ
```bash
clean_build
```

### テスト実行
```bash
run_tests
```

## Windows 固有の設定

### バッチファイル（build.bat）
```batch
@echo off
echo Starting Windows Build Process...

set NODE_ENV=production
set BUILD_PATH=.\build
set OUTPUT_PATH=.\dist

echo Cleaning previous builds...
if exist "%BUILD_PATH%" rmdir /s /q "%BUILD_PATH%"
if exist "%OUTPUT_PATH%" rmdir /s /q "%OUTPUT_PATH%"

echo Running build...
npm run build

if %ERRORLEVEL% equ 0 (
    echo Build completed successfully!
) else (
    echo Build failed!
    exit /b 1
)
```

## トラブルシューティング

### 一般的な問題
1. **ポート競合**: SERVER_PORTを変更
2. **パス問題**: 絶対パスを使用
3. **権限エラー**: 管理者として実行

### デバッグ方法
```javascript
// server.js にログ追加
console.log('Environment:', process.env);
console.log('Working directory:', process.cwd());
```

## パフォーマンス最適化

### 並列ビルド設定
```javascript
// webpack.config.js
module.exports = {
  // 並列処理の設定
  parallelism: require('os').cpus().length,
  
  // キャッシュの活用
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  }
};
```

## 参考資料
- [MCP SDK Documentation](https://modelcontextprotocol.io/)
- [Node.js Child Process](https://nodejs.org/api/child_process.html)
- [Webpack Configuration](https://webpack.js.org/configuration/)