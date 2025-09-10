# バグ修正実例集

## JavaScript/Node.js バグ

### undefined エラー
```bash
claude-code "
バグ修正してください：

問題：ユーザー情報取得でundefinedエラー
再現：1.ログイン 2.プロフィール表示 3.クラッシュ
期待：ユーザー情報が正常に表示される

アプリ情報：
Express.js + MongoDB
ユーザー認証はJWT

エラーログ：
TypeError: Cannot read property 'name' of undefined
at getUserProfile (src/controllers/user.js:45)
"
```

### 非同期処理バグ
```bash
claude-code "
バグ修正してください：

問題：データベース保存前にレスポンスが返る
再現：1.フォーム送信 2.成功メッセージ表示 3.データが保存されてない
期待：保存完了後に成功メッセージ

アプリ情報：
Node.js + PostgreSQL + async/await
データ保存処理が非同期
"
```

## React バグ

### 状態更新バグ
```bash
claude-code "
バグ修正してください：

問題：カウンター値が更新されない
再現：1.+ボタンクリック 2.画面は変わらず 3.console.logでは増加
期待：画面上のカウンターが増加表示

アプリ情報：
React 18 + useState
setCount(count + 1) を使用中
"
```

### 無限レンダリング
```bash
claude-code "
バグ修正してください：

問題：useEffectが無限実行される
再現：1.コンポーネント表示 2.APIが連続コール 3.ブラウザが固まる
期待：初回のみAPI実行

アプリ情報：
React hooks使用
useEffect内でAPI呼び出し
依存配列にオブジェクトを指定
"
```

## Python バグ

### インデントエラー
```bash
claude-code "
バグ修正してください：

問題：IndentationError
再現：1.python app.py実行 2.エラー発生
期待：正常にアプリ起動

エラーログ：
IndentationError: expected an indented block
at line 23 in calculate_tax function
"
```

### 型エラー
```bash
claude-code "
バグ修正してください：

問題：文字列と数値の計算エラー
再現：1.価格入力 2.計算実行 3.TypeError
期待：正常に税額計算される

エラーログ：
TypeError: can't multiply sequence by non-int of type 'float'
at calculate_tax line 15
"
```

## CSS/レイアウト バグ

### レスポンシブ崩れ
```bash
claude-code "
バグ修正してください：

問題：スマホでレイアウトが崩れる
再現：1.スマホでサイト表示 2.テキストがはみ出る
期待：スマホでも正常表示

アプリ情報：
Bootstrap 5使用
カスタムCSS追加済み
PCでは正常表示
"
```

## データベース関連

### クエリエラー
```bash
claude-code "
バグ修正してください：

問題：SQLクエリでSyntax Error
再現：1.検索実行 2.エラー発生 3.結果が表示されない
期待：検索結果が正常表示

エラーログ：
mysql.connector.errors.ProgrammingError: 
SQL syntax error near 'WHERE name LIKE %search%'
"
```

## パフォーマンス問題

### 重い処理
```bash
claude-code "
バグ修正してください：

問題：大量データで画面が固まる
再現：1.10万件データ表示 2.ブラウザ応答なし
期待：スムーズなスクロール

アプリ情報：
React + 大量リスト表示
現在：全データをDOM生成
"
```

## 設定・環境バグ

### 環境変数エラー
```bash
claude-code "
バグ修正してください：

問題：DATABASE_URLが読み込まれない
再現：1.npm start実行 2.DB接続エラー
期待：正常にDB接続

アプリ情報：
.envファイルに設定済み
dotenv使用
他の環境変数は動作
"
```