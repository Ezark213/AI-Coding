# Contributing to Modern UI Rules

## 概要
このプロジェクトは、AIコーディング時のモダンUI品質向上を目的としています。

## 開発フロー

### 1. ブランチ戦略
- `main`: プロダクション用
- `develop`: 開発統合用  
- `feature/*`: 機能追加用
- `hotfix/*`: 緊急修正用

### 2. UI変更時の要件
```bash
# 1. 開発前チェック
npm run ui:check

# 2. 開発
# UI変更を実装

# 3. 品質確認
npm run ui:test
npm run a11y:test
npm run theme:test

# 4. プルリクエスト作成
```

### 3. レビュー観点
- UI規則準拠 (`ui/CHECKLIST.md`)
- アクセシビリティ確認
- パフォーマンス影響評価
- 両テーマでの動作確認

### 4. ルール更新プロセス
1. `ui/MODERN_UI_RULES.md` の更新提案
2. サンプル実装 (`ui/EXAMPLES/`)
3. MCP設定反映 (`.mcp/ui_copilot.mcp.json`)
4. チェックリスト更新

## 技術スタック別ガイド

### Tauri + React
```bash
npm install @radix-ui/react-button @radix-ui/react-dialog
npm install tailwindcss
```

### WPF
```xml
<PackageReference Include="MahApps.Metro" Version="2.4.9" />
<PackageReference Include="MaterialDesignThemes" Version="4.6.1" />
```

## AI開発時の注意
- 必ず Design Tokens を使用
- デフォルトシステムUI直接利用禁止
- アクセシビリティ属性必須
- テーマ切り替え対応必須

## 問題報告
UI関連の問題は [GitHub Issues](./issues/new/choose) から報告してください。