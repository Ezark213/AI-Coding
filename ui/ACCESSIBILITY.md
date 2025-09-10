# アクセシビリティガイド

## コントラスト要件
- 通常テキスト: 4.5:1 以上 (AA準拠)
- 大きなテキスト: 3:1 以上
- 非テキスト要素: 3:1 以上

## キーボード操作
- すべてのUI要素にフォーカス可能
- Tab順序が論理的
- Escキーで閉じる動作
- Enter/Spaceでアクション実行

## ARIAラベル
```tsx
// ボタン
<button aria-label="ファイルを保存">
  <SaveIcon />
</button>

// フォーム
<input 
  aria-describedby="email-error"
  aria-invalid={hasError}
/>
<div id="email-error" role="alert">
  {errorMessage}
</div>

// ダイアログ
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">確認</h2>
</div>

// 状態変化の通知
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

## スクリーンリーダー対応
- 見出し構造 (h1-h6) の適切な使用
- リストマークアップ (ul, ol, li)
- フォームラベルとinputの関連付け
- 状態変化の適切な通知

## カラーアクセシビリティ
- 色のみに依存した情報伝達の回避
- 色覚異常対応 (red/green の代替手段)
- ハイコントラストモード対応

## フォーカス管理
```tsx
// フォーカストラップ（モーダル内）
const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  });
};
```

## テキスト代替
```tsx
// 画像
<img src="chart.png" alt="2024年売上グラフ：前年比20%増" />

// アイコンボタン
<button aria-label="お気に入りに追加">
  <HeartIcon aria-hidden="true" />
</button>

// 装飾的要素
<div aria-hidden="true">
  <DecorativeIcon />
</div>
```

## 動きと時間
- アニメーション制御 (prefers-reduced-motion)
- 自動再生の制御
- タイムアウトの警告と延長

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 入力支援
```tsx
// オートコンプリート
<input 
  type="email"
  autoComplete="email"
  aria-label="メールアドレス"
/>

// エラー予防
<input 
  type="password"
  aria-describedby="password-help"
  minLength="8"
/>
<div id="password-help">
  8文字以上で設定してください
</div>
```

## ランドマークとナビゲーション
```tsx
// ページ構造
<header role="banner">
  <nav role="navigation" aria-label="メインナビゲーション">
    <ul>
      <li><a href="/">ホーム</a></li>
      <li><a href="/about">概要</a></li>
    </ul>
  </nav>
</header>

<main role="main">
  <section aria-labelledby="content-heading">
    <h1 id="content-heading">ページタイトル</h1>
  </section>
</main>

<aside role="complementary" aria-label="関連情報">
  <h2>関連記事</h2>
</aside>

<footer role="contentinfo">
  <p>&copy; 2025 Company Name</p>
</footer>
```

## テスト項目
- [ ] キーボードのみで全機能利用可能
- [ ] スクリーンリーダーで内容理解可能  
- [ ] ズーム200%で表示崩れなし
- [ ] ハイコントラストモードで視認可能
- [ ] 色覚異常シミュレーションで確認
- [ ] 音声入力での操作可能
- [ ] 自動テストツール（axe等）でチェック