# 🤖 AI-Coding Rules & Workflows

Ezark213専用のAIコーディング規則とワークフローコレクション

## 📋 概要

このリポジトリは、Claude CodeやChatGPT等のAIを活用した効率的なプログラミング開発のための規則・テンプレート・ワークフローを管理しています。

## 📁 構成

```
AI-Coding/
├── README.md                    # このファイル
├── Rules/                       # コーディング規則
│   └── ai-coding-principles.md  # AIコーディング基本原則
├── Workflows/                   # 開発ワークフロー
│   ├── AddFunc-BugFix/         # 機能追加・バグ修正フロー
│   └── MCP/                    # Master Control Program関連
├── bug-fix/                    # バグ修正システム
│   ├── TEMPLATE.md             # バグ修正テンプレート
│   └── EXAMPLES.md             # バグ修正実例集
├── .mcp/                       # MCP設定ファイル
│   ├── ui_copilot.mcp.json     # UI関連MCP設定
│   └── bug_fix.mcp.json        # バグ修正MCP設定
├── Templates/                   # プロジェクトテンプレート
└── Examples/                   # 実装例
```

## 🎯 主なコンテンツ

### 1. AIコーディング原則 (Rules/ai-coding-principles.md)
- 10の基本原則
- 品質基準
- セキュリティガイドライン
- 実装チェックリスト

### 2. 開発ワークフロー (Workflows/)
#### AddFunc-BugFix: 体系的な問題解決フロー
1. **analyze.md** - 問題分析フェーズ
2. **plan.md** - 計画策定フェーズ
3. **check.md** - 事前チェックフェーズ
4. **eval.md** - 評価・検討フェーズ
5. **do.md** - 実装実行フェーズ
6. **fin.md** - 完了・検証フェーズ

#### MCP: Master Control Program関連
- Playwright MCP設定
- Windows MCP セットアップ
- Serena MCP 構成

### 3. シンプルバグ修正システム (bug-fix/) 🆕
#### 迅速なバグ修正のためのテンプレート
- **TEMPLATE.md** - バグ修正要求の標準テンプレート
- **EXAMPLES.md** - 実際の修正例とパターン集
- **MCP統合** - Modern UI Rules との連携対応

#### 使用方法
```bash
claude-code "
バグ修正してください：

問題：[何が起きているか1行で]
再現：[3ステップ以内で再現手順]
期待：[期待する動作1行で]

アプリ情報：
[技術スタック・フレームワーク情報]

エラーログ：
[エラーメッセージがあれば]
"
```

## 🚀 使用方法

### 新規プロジェクト開始時
1. `Rules/ai-coding-principles.md` を必ず確認
2. 適切なワークフローテンプレートを選択
3. プロジェクト固有の設定を調整

### 機能追加・バグ修正時
#### 複雑な問題の場合
1. `Workflows/AddFunc-BugFix/` の手順に従う
2. 各フェーズでチェックリストを確認
3. 品質基準を満たすまで繰り返し

#### シンプルなバグ修正の場合 🆕
1. `bug-fix/TEMPLATE.md` のテンプレートを使用
2. 問題・再現・期待・技術情報を明確に記載
3. Claude Codeで迅速に修正実行

## 💡 基本原則（抜粋）

1. **原則宣言必須**: 作業開始前に必ず原則を宣言
2. **プロ品質**: 企業レベルの実装を目指す
3. **モック禁止**: ハードコードや仮実装は避ける
4. **包括的思考**: Ultrathink - 徹底的に考え抜く
5. **継続改善**: 常に品質向上を意識

## 🔧 活用場面

- **Claude Code** での開発プロジェクト
- **ChatGPT** を使ったコード生成
- チーム開発での品質統一
- 個人プロジェクトの品質向上

## 📚 参考資料

このリポジトリは以下を参考に構築されています：
- [Rih0z/Job-Automate](https://github.com/Rih0z/Job-Automate) のAIコーディング規則

## 🤝 コントリビュート

改善提案やバグ報告はIssuesでお願いします！

## 📄 ライセンス

MIT License

---

**AIと協力して、より良いコードを書こう！** 🚀