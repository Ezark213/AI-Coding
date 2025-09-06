# Serena MCP Configuration

## 概要
Serena（AI開発アシスタント）のMCP（Master Control Program）設定ファイルです。
プロジェクト固有の開発支援機能を提供します。

## 設定ファイル（.mcp.json）

```json
{
  "mcpServers": {
    "serena": {
      "command": "npx",
      "args": ["@serena/mcp", "--project", "your-project-name"],
      "env": {
        "PROJECT_NAME": "your-project-name",
        "PROJECT_TYPE": "web",
        "AI_MODEL": "claude-3.5-sonnet",
        "DEBUG": "false"
      }
    }
  }
}
```

## プロジェクト別設定

### Web開発プロジェクト
```json
{
  "mcpServers": {
    "serena": {
      "command": "npx",
      "args": ["@serena/mcp", "--project", "web-app"],
      "env": {
        "PROJECT_NAME": "web-app",
        "PROJECT_TYPE": "web",
        "FRAMEWORK": "react",
        "BUILD_TOOL": "vite",
        "AI_MODEL": "claude-3.5-sonnet"
      }
    }
  }
}
```

### Node.js APIプロジェクト
```json
{
  "mcpServers": {
    "serena": {
      "command": "npx",
      "args": ["@serena/mcp", "--project", "api-server"],
      "env": {
        "PROJECT_NAME": "api-server",
        "PROJECT_TYPE": "api",
        "FRAMEWORK": "express",
        "DATABASE": "mongodb",
        "AI_MODEL": "claude-3.5-sonnet"
      }
    }
  }
}
```

### Python プロジェクト
```json
{
  "mcpServers": {
    "serena": {
      "command": "python",
      "args": ["-m", "serena_mcp", "--project", "ml-project"],
      "env": {
        "PROJECT_NAME": "ml-project",
        "PROJECT_TYPE": "python",
        "FRAMEWORK": "fastapi",
        "ML_FRAMEWORK": "pytorch",
        "AI_MODEL": "claude-3.5-sonnet"
      }
    }
  }
}
```

## Serena MCP の主な機能

### 1. コード生成支援
- **自動コード生成**: 仕様からの実装コード自動生成
- **テストコード生成**: 単体テスト・統合テストの自動生成
- **ドキュメント生成**: API仕様書・README自動生成

### 2. コード解析・改善
- **コードレビュー**: AIによる自動コードレビュー
- **リファクタリング提案**: コード改善案の提案
- **パフォーマンス分析**: ボトルネック検出と最適化提案

### 3. プロジェクト管理支援
- **タスク分解**: 大きな機能の小タスクへの分解
- **進捗追跡**: 実装進捗の自動トラッキング
- **品質メトリクス**: コード品質指標の測定

## 使用方法

### 1. Serena MCP のインストール
```bash
# Node.js プロジェクトの場合
npm install -g @serena/mcp

# Python プロジェクトの場合
pip install serena-mcp
```

### 2. プロジェクト固有の設定
```bash
# プロジェクトルートで初期化
npx serena init --project your-project-name

# 設定ファイルの生成
npx serena configure
```

### 3. Claude Code での統合
プロジェクトの`.mcp.json`に設定を追加

## 実装例

### コード生成の使用例
```javascript
// Serena MCP を使用したコード生成
const serena = require('@serena/mcp');

// API エンドポイント生成
const apiCode = await serena.generateAPI({
  endpoint: '/users',
  method: 'GET',
  response: 'User[]',
  database: 'users'
});

// テストコード生成
const testCode = await serena.generateTest({
  target: './src/api/users.js',
  type: 'unit',
  coverage: 'complete'
});
```

### コードレビューの使用例
```javascript
// 自動コードレビュー
const review = await serena.reviewCode({
  files: ['./src/**/*.js'],
  standards: 'airbnb',
  security: true,
  performance: true
});

console.log(review.suggestions);
```

## カスタマイズ設定

### serena.config.js
```javascript
module.exports = {
  // AIモデル設定
  aiModel: 'claude-3.5-sonnet',
  
  // コード生成設定
  codeGeneration: {
    style: 'functional',
    testing: 'jest',
    documentation: true,
    typescript: true
  },
  
  // レビュー設定
  codeReview: {
    standards: ['airbnb', 'security'],
    autoFix: true,
    severity: 'medium'
  },
  
  // プロジェクト設定
  project: {
    type: 'web',
    framework: 'react',
    database: 'postgresql',
    deployment: 'aws'
  }
};
```

## ワークフロー統合

### GitHub Actions との連携
```yaml
# .github/workflows/serena-review.yml
name: Serena Code Review

on:
  pull_request:
    branches: [ main ]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Serena MCP
        run: |
          npm install -g @serena/mcp
          
      - name: Run Serena Review
        run: |
          npx serena review --files="src/**/*.js" --output=review.json
          
      - name: Comment PR
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const review = JSON.parse(fs.readFileSync('review.json'));
            
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `## Serena AI Code Review\n\n${review.summary}`
            });
```

### VS Code 統合
```json
// .vscode/settings.json
{
  "serena.enabled": true,
  "serena.autoReview": true,
  "serena.suggestions": "inline",
  "serena.aiModel": "claude-3.5-sonnet"
}
```

## トラブルシューティング

### 一般的な問題
1. **認証エラー**: API キーの確認
2. **設定エラー**: プロジェクト設定の確認  
3. **パフォーマンス**: AIモデルの変更

### デバッグモード
```bash
# デバッグモードでの実行
DEBUG=true npx serena generate --verbose
```

### ログ設定
```javascript
// serena.config.js
module.exports = {
  logging: {
    level: 'debug',
    file: './logs/serena.log',
    console: true
  }
};
```

## パフォーマンス最適化

### キャッシュ設定
```javascript
module.exports = {
  cache: {
    enabled: true,
    ttl: 3600, // 1時間
    storage: 'redis', // または 'memory'
    redis: {
      host: 'localhost',
      port: 6379
    }
  }
};
```

### 並列処理設定
```javascript
module.exports = {
  parallel: {
    enabled: true,
    workers: 4,
    timeout: 30000
  }
};
```

## セキュリティ設定

### API キー管理
```bash
# 環境変数での設定
export SERENA_API_KEY="your-api-key"
export CLAUDE_API_KEY="your-claude-key"

# .env ファイルでの管理
echo "SERENA_API_KEY=your-api-key" >> .env
```

### アクセス制御
```javascript
module.exports = {
  security: {
    allowedHosts: ['localhost', 'your-domain.com'],
    rateLimit: {
      requests: 100,
      period: 3600 // 1時間
    },
    encryption: true
  }
};
```

## 参考資料
- [Serena MCP Documentation](https://serena.ai/docs/mcp)
- [MCP Protocol Specification](https://spec.modelcontextprotocol.io/)
- [Claude API Documentation](https://docs.anthropic.com/claude/reference)