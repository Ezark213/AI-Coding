# Modern PowerPoint Generator Template

モダンで見やすいパワーポイントを生成するためのプロンプトテンプレートです。

## 使用方法

以下のプロンプトをClaudeに渡して、Pythonスクリプトを生成させてください。

---

## プロンプト

```
以下の仕様でモダンなデザインのPowerPointファイル（.pptx）を生成するPythonスクリプトを作成してください。

### デザイン仕様

#### カラーパレット
- PRIMARY: #3B82F6 (ブルー) - メインカラー、見出し、アクセント
- SECONDARY: #10B981 (グリーン) - 解決策、ポジティブな要素
- ACCENT: #F59E0B (アンバー) - ハイライト、効果強調
- TEXT_DARK: #111827 - 本文テキスト
- TEXT_GRAY: #6B7280 - 補足テキスト
- BG_LIGHT: #F9FAFB - 背景のアクセント
- WHITE: #FFFFFF - カード背景
- BORDER_LIGHT: #E5E7EB - カードの枠線

#### レイアウト原則
1. **白背景ベース**: 背景は白を基調とし、装飾的な淡い円形シェイプを角に配置
2. **カードUI**: 情報は影付きの角丸カードでグループ化
3. **色分け**: 課題は赤系（#FCA5A5）、解決策は緑系（#A7F3D0）の枠線
4. **アイコン**: 丸いカラーアイコンで視認性向上
5. **ヘッダーバー**: 各スライド上部に細いブルーのライン（高さ0.06インチ）

#### タイポグラフィ
- フォント: Yu Gothic UI
- タイトル: 24-36pt、Bold
- 見出し: 14-16pt、Bold
- 本文: 11-13pt
- 補足: 9-10pt

#### コンポーネント

1. **タイトルスライド**
   - 装飾的な淡い円形シェイプ（左上と右下）
   - 中央にタイトル（44pt、Bold）
   - サブタイトル（20pt、グレー）
   - アクセントライン（ブルー、中央配置）

2. **コンテンツスライド**
   - 上部に細いブルーのヘッダーバー
   - タイトル（28pt、Bold）
   - 2カラムレイアウト（課題 vs 解決策）
   - カードコンポーネントで情報をグループ化

3. **PHASEタグ**
   - 角丸の小さなバッジ（ブルー背景、白文字）
   - 左上に配置

4. **効率化効果ボックス**
   - アンバー色の背景（#FEF3C7）
   - アンバー色の枠線
   - 丸いアイコン + タイトル + 効果テキスト

5. **カード**
   - 白背景
   - 影効果（オフセットした薄いグレーの矩形）
   - 角丸（adjustments[0] = 0.05）
   - 枠線は内容に応じた色

6. **フローチャート**
   - 角丸の矩形を横に並べる
   - AI関連のステップはブルー背景
   - 矢印（→）で接続

7. **まとめスライド**
   - 3つのメトリクスカード（アイコン + タイトル + 説明）
   - 下部にキーポイントをリスト表示
   - 淡いグレー背景のボックス

### 必要なライブラリ
- python-pptx

### スライドサイズ
- 16:9 (13.333 x 7.5 インチ)

### 生成するスライドの内容
[ここにスライドの内容を記載]
```

---

## サンプルコード（ヘルパー関数）

```python
# -*- coding: utf-8 -*-
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Create presentation (16:9)
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Modern color palette
PRIMARY = RGBColor(59, 130, 246)      # Blue #3B82F6
SECONDARY = RGBColor(16, 185, 129)    # Green #10B981
ACCENT = RGBColor(245, 158, 11)       # Amber #F59E0B
TEXT_DARK = RGBColor(17, 24, 39)      # Almost black #111827
TEXT_GRAY = RGBColor(107, 114, 128)   # Gray #6B7280
WHITE = RGBColor(255, 255, 255)
BG_LIGHT = RGBColor(249, 250, 251)    # Very light gray #F9FAFB
BORDER_LIGHT = RGBColor(229, 231, 235) # Light border

def add_gradient_header(slide):
    """Add modern gradient-style header bar"""
    bar = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(0.06))
    bar.fill.solid()
    bar.fill.fore_color.rgb = PRIMARY
    bar.line.fill.background()

def add_phase_tag(slide, num):
    """Add modern phase tag"""
    tag = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), Inches(0.35), Inches(1.1), Inches(0.35))
    tag.fill.solid()
    tag.fill.fore_color.rgb = PRIMARY
    tag.line.fill.background()
    tag.adjustments[0] = 0.3
    tf = tag.text_frame
    tf.paragraphs[0].text = f"PHASE {num}"
    tf.paragraphs[0].font.size = Pt(12)
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.color.rgb = WHITE
    tf.paragraphs[0].alignment = PP_ALIGN.CENTER

def set_text(shape, text, size=12, bold=False, color=TEXT_DARK, align=PP_ALIGN.LEFT):
    """Set text with formatting"""
    tf = shape.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(size)
    p.font.bold = bold
    p.font.color.rgb = color
    p.alignment = align
    p.font.name = "Yu Gothic UI"

def add_bullets(text_frame, items, size=11, color=TEXT_DARK):
    """Add bullet points to text frame"""
    for i, item in enumerate(items):
        if i == 0:
            p = text_frame.paragraphs[0]
        else:
            p = text_frame.add_paragraph()
        p.text = f"• {item}"
        p.font.size = Pt(size)
        p.font.color.rgb = color
        p.font.name = "Yu Gothic UI"
        p.space_after = Pt(6)

def add_card(slide, x, y, w, h, border_color=BORDER_LIGHT):
    """Add modern card with shadow effect"""
    # Shadow
    shadow = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x + 0.02), Inches(y + 0.02), Inches(w), Inches(h))
    shadow.fill.solid()
    shadow.fill.fore_color.rgb = RGBColor(226, 232, 240)
    shadow.line.fill.background()
    shadow.adjustments[0] = 0.05
    # Main card
    card = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    card.fill.solid()
    card.fill.fore_color.rgb = WHITE
    card.line.color.rgb = border_color
    card.line.width = Pt(1)
    card.adjustments[0] = 0.05
    return card

def add_efficiency_box(slide, x, y, w, h, title, text):
    """Add efficiency effect highlight box"""
    eff_bg = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(x), Inches(y), Inches(w), Inches(h))
    eff_bg.fill.solid()
    eff_bg.fill.fore_color.rgb = RGBColor(254, 243, 199)
    eff_bg.line.color.rgb = ACCENT
    eff_bg.line.width = Pt(2)

    eff_icon = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(x + 0.2), Inches(y + 0.2), Inches(0.5), Inches(0.5))
    eff_icon.fill.solid()
    eff_icon.fill.fore_color.rgb = ACCENT
    eff_icon.line.fill.background()

    eff_title = slide.shapes.add_textbox(Inches(x + 0.8), Inches(y + 0.2), Inches(2), Inches(0.4))
    set_text(eff_title, title, 13, True, RGBColor(180, 83, 9))

    eff_text = slide.shapes.add_textbox(Inches(x + 0.2), Inches(y + 0.65), Inches(w - 0.4), Inches(0.4))
    set_text(eff_text, text, 14, True, RGBColor(146, 64, 14))
```

---

## 使用例

採用効率化パッケージのプレゼンテーションを作成する場合：

```
上記のデザイン仕様で、以下のスライドを含むPowerPointを生成してください：

1. タイトルスライド: 「AIによる採用活動の効率化パッケージ」
2. エグゼクティブサマリー
3. 採用プロセス全体像
4. 競合比較
5. PHASE 1: 求人票作成の自動化
6. PHASE 2: 書類選考の自動化
7. PHASE 3: 面接プロセスの自動化
8. PHASE 4: オファー・条件交渉の最適化
9. PHASE 5: 追加提案
10. まとめスライド
```
