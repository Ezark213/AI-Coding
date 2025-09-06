# Playwright MCP Configuration

## 概要
Playwright MCP（Master Control Program）を使用してブラウザ自動化テストを効率化する設定ファイルです。

## 設定ファイル（.mcp.json）

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"],
      "env": {
        "NODE_ENV": "development"
      }
    }
  }
}
```

## 主な機能
- **ブラウザ自動化**: Chromium、Firefox、Safari対応
- **テスト実行**: E2Eテストの自動実行
- **スクリーンショット取得**: 自動スクリーンショット機能
- **レポート生成**: テスト結果の詳細レポート

## 使用方法

### 1. 初期設定
```bash
# Playwright MCPのインストール
npm install -g @playwright/mcp

# ブラウザのインストール
npx playwright install
```

### 2. 設定ファイルの配置
プロジェクトルートに`.mcp.json`を配置

### 3. MCP サーバーの起動
```bash
# MCP サーバー起動
npx playwright-mcp

# または直接実行
npx @playwright/mcp@latest
```

## 実際のテストコード例

```javascript
// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://example.com');
  
  // タイトル確認
  await expect(page).toHaveTitle(/Example/);
  
  // スクリーンショット取得
  await page.screenshot({ path: 'example.png' });
});
```

## 設定のカスタマイズ

### playwright.config.js
```javascript
module.exports = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ]
};
```

## トラブルシューティング

### よくあるエラー
1. **ブラウザが見つからない**
   ```bash
   npx playwright install
   ```

2. **ポート競合**
   - `playwright.config.js`のbaseURLを変更

3. **タイムアウトエラー**
   - タイムアウト値を調整

## 参考資料
- [Playwright公式ドキュメント](https://playwright.dev/)
- [MCP Specification](https://spec.modelcontextprotocol.io/)
- [Playwright MCP GitHub](https://github.com/playwright/playwright)