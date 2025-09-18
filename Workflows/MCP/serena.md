# Serena MCP Configuration

## 概要
Serena（AI開発アシスタント）のMCP（Master Control Program）設定ファイルです。
プロジェクト固有の開発支援機能を提供します。

## 正しい設定ファイル（.mcp.json）

```json
{
  "mcpServers": {
    "serena": {
      "command": "uv",
      "args": [
        "tool", "run",
        "--from", "git+https://github.com/oraios/serena.git",
        "serena", "start-mcp-server",
        "--project", "[Project-specific path]",
        "--context", "ide-assistant", 
        "--log-level", "INFO"
      ]
    }
  }
}
```

## インストール要件

1. **uvパッケージマネージャーのインストール**:
   ```bash
   pip install uv
   ```

2. **Serenaリポジトリの確認**:
   - GitHub: https://github.com/oraios/serena
   - セマンティックコード検索・編集機能を提供

## 設定手順

1. `.mcp.json`ファイルに上記設定を追加
2. `[Project-specific path]`を実際のプロジェクトパスに置換
3. Claude Codeを再起動してMCPサーバーを有効化

## 機能

- セマンティックコード検索
- 高度なコード編集機能
- 複数プログラミング言語サポート
- IDE統合支援
- コードベース直接操作

## プロジェクト別設定例

### Windows環境の例
```json
{
  "mcpServers": {
    "serena": {
      "command": "uv",
      "args": [
        "tool", "run",
        "--from", "git+https://github.com/oraios/serena.git",
        "serena", "start-mcp-server",
        "--project", "C:\\Users\\username\\your-project",
        "--context", "ide-assistant",
        "--log-level", "INFO"
      ]
    }
  }
}
```

### Linux/macOS環境の例
```json
{
  "mcpServers": {
    "serena": {
      "command": "uv",
      "args": [
        "tool", "run",
        "--from", "git+https://github.com/oraios/serena.git",
        "serena", "start-mcp-server",
        "--project", "/home/username/your-project",
        "--context", "ide-assistant",
        "--log-level", "INFO"
      ]
    }
  }
}
```

## トラブルシューティング

### uvが見つからない場合
```bash
# Python環境の確認
python --version
pip --version

# uvの再インストール
pip install --upgrade uv
```

### Serenaの動作確認
```bash
# Serenaコマンドのテスト
uv tool run --from git+https://github.com/oraios/serena.git serena --help
```

## 注意事項

- `uvx`コマンドは`uv tool run`のショートカットです
- プロジェクトパスは絶対パスで指定することを推奨します
- 初回実行時はSerenaのダウンロードに時間がかかる場合があります
