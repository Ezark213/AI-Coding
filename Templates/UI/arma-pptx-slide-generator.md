# PowerPoint Slide Generator Prompt - ARMA & ASSOCIATES

---

# ⚠️ CRITICAL REQUIREMENTS（絶対遵守事項）

**このセクションは最優先で確認してください。ここに記載された仕様を無視すると、完全に異なるデザインが生成されます。**

---

## 1. スライドサイズ（必須）

| 項目 | 値 | 単位換算 |
|------|-----|----------|
| **幅** | **50.8cm** | = 20in = 1440pt |
| **高さ** | **28.57cm** | = 11.25in = 810pt |

```python
# Python実装時は必ずこの値を使用
from pptx.util import Cm
prs.slide_width = Cm(50.8)
prs.slide_height = Cm(28.57)
```

⚠️ **よくある間違い**: 標準の16:9（13.333in × 7.5in = 33.87cm × 19.05cm）を使用してしまう → 全ての位置がずれる

---

## 2. 共通レイアウト要素（全スライド必須）

### 視覚的配置図

```
┌─────────────────────────────────────────────────────────────────────────┐
│ ■ (左上)                                                                │
│ 2.05×2.09cm                                                             │
│ pos: -0.04cm, 1.64cm                                                    │
│                                                                         │
│                                                                         │
│                           【コンテンツエリア】                            │
│                                                                         │
│                                                                         │
│                                                                         │
│                                                                         │
├─────────────────────────────────────────────────────────────────────────┤
│                            Copyright...（右寄せ）              ■ 1 ■    │
│                            pos: 27.0cm, 26.3cm                 (右下)   │
│                            18.0×1.0cm                      48.25, 25.98cm│
│                                                            2.05×2.09cm  │
└─────────────────────────────────────────────────────────────────────────┘
```

### 詳細仕様表

| 要素 | 位置 (left, top) | サイズ (W×H) | 色 | フォント |
|------|------------------|--------------|-----|----------|
| **左上ティール四角** | **-0.04cm, 1.64cm** | **2.05cm × 2.09cm** | #0086AB | - |
| **コピーライト** | **27.0cm, 26.3cm** | **18.0cm × 1.0cm** | #808080 | 12pt, 右寄せ |
| **右下ティール四角** | **48.25cm, 25.98cm** | **2.05cm × 2.09cm** | #0086AB | - |
| **スライド番号（四角内）** | 48.25cm, 25.98cm | 2.05cm × 2.09cm | 白文字 | 18pt, 中央 |

### ⚠️ よくある間違い

| 間違い | 正解 |
|--------|------|
| 左上四角を「縦長バー」にする | **小さな正方形（2.05×2.09cm）** |
| コピーライトを**左下**に配置 | **右下**（27.0cm, 26.3cm） |
| スライド番号をテキストのみで配置 | **ティール四角の中に白文字** |
| inchで指定する | **cm単位で指定**（このプロンプトはcm基準） |

---

## 3. 表紙スライドのデザイン（Slide 1）

### ❌ 間違った実装例（よくある間違い）

```
┌───────────────────────────────────────────────┐
│█████████████████████████████████████████████████│ ← ティール全面背景（間違い）
│█████████████████████████████████████████████████│
│██████     タイトル（白文字）     ████████████████│ ← 白文字（間違い）
│█████████████████████████████████████████████████│
│█████████████████████████████████████████████████│
└───────────────────────────────────────────────┘
```

### ✅ 正しい実装

```
┌─────────────────────────────────────────────────────────────────────────┐
│ ■ (左上四角)                                                            │
│                                                                         │
│                                                                         │
│                      タイトル（ティール文字 #0086AB）                      │
│                      ═══════════════════════════════                    │ ← 水色ライン #00B0F0
│                      〜 サブタイトル（グレー文字）〜                       │
│                                                                         │
│                      大野公認会計士・税理士事務所                          │
│                      （株）アルマ                                        │
│                           [ロゴ]                                        │
├─────────────────────────────────────────────────────────────────────────┤
│                            Copyright...（右寄せ）              ■ 1 ■    │
└─────────────────────────────────────────────────────────────────────────┘
  ↑ 白背景（#FFFFFF）
```

### 表紙スライド詳細仕様

| 要素 | 位置 (left, top) | サイズ | フォント | 色 | 備考 |
|------|------------------|--------|----------|-----|------|
| **背景** | - | 全面 | - | **白 #FFFFFF** | ⚠️ ティール背景ではない |
| **タイトル** | 5.0cm, 8.0cm | 40.0cm × 4.0cm | **48pt**, Spica Neue P Light | **#0086AB** | 太字、下線、中央 |
| **水色ライン** | 10.0cm, 12.5cm | 幅30cm × **高さ0.15cm** | - | **#00B0F0** | 細いアクセント線 |
| サブタイトル | 5.0cm, 14.0cm | 40.0cm × 2.0cm | 24pt | #5F5F5F | 中央揃え |
| 会社名 | 5.0cm, 18.0cm | 40.0cm × 4.0cm | **28pt**, Spica Neue P | #5F5F5F | 2行、中央揃え |
| 左上四角 | -0.04cm, 1.64cm | 2.05cm × 2.09cm | - | #0086AB | 他スライドと同じ |
| 右下四角+番号 | 48.25cm, 25.98cm | 2.05cm × 2.09cm | 18pt | #0086AB/白 | 他スライドと同じ |
| コピーライト | 27.0cm, 26.3cm | 18.0cm × 1.0cm | 12pt | #808080 | 他スライドと同じ |

---

## 4. 実装前チェックリスト

スライド生成前に**必ず**確認してください：

- [ ] スライドサイズは **50.8cm × 28.57cm** に設定したか？（標準16:9ではない）
- [ ] 左上四角は **小さな正方形（2.05×2.09cm）** か？（縦長バーではない）
- [ ] 左上四角の位置は **(-0.04cm, 1.64cm)** か？
- [ ] コピーライトは **右下（27.0cm, 26.3cm）** に右寄せで配置したか？ サイズ **18.0×1.0cm**
- [ ] 右下四角は **(48.25cm, 25.98cm)** に配置したか？ サイズ **2.05×2.09cm**
- [ ] スライド番号は **ティール四角の中に白文字** で配置したか？
- [ ] 表紙の背景は **白** か？（ティール全面ではない）
- [ ] 表紙のタイトル位置は **(5.0cm, 8.0cm)** / サイズ **40.0×4.0cm** か？
- [ ] 表紙のタイトルは **ティール文字** か？（白文字ではない）
- [ ] 表紙にタイトル下の **水色アクセントライン（#00B0F0）** が **(10.0cm, 12.5cm)** にあるか？
- [ ] 表紙の会社名は **(5.0cm, 18.0cm)** / サイズ **40.0×4.0cm** で中央揃えか？
- [ ] 本編スライドのタイトル位置は **(3.0cm, 2.0cm)** / サイズ **44.0×2.5cm** か？
- [ ] 単位は **cm** を使用しているか？（inchではない）

---

## 5. 単位について

このプロンプトでは **cm（センチメートル）** を基準単位として使用します。

| 単位 | 変換 |
|------|------|
| 1 inch | = 2.54 cm |
| 1 cm | = 28.35 pt |
| 1 inch | = 72 pt |

Python `python-pptx` では `Cm()` 関数を使用：
```python
from pptx.util import Cm, Pt

# 例: 左上四角
left = Cm(-0.04)
top = Cm(1.64)
width = Cm(2.05)
height = Cm(2.09)
```

---

## 6. 参照ファイルについて

このテンプレートは `M365_Detailed.pptx` を正式な参照ファイルとしています。
デザインに迷った場合は、必ず参照ファイルを確認してください。

---

# Overview

ARMA & ASSOCIATES（大野公認会計士・税理士事務所/株式会社アルマ）向けのプロジェクト資料・プレゼンテーションスライド原稿を生成するためのプロンプトテンプレートです。

**対応する提案書の種類：**
- IT導入提案（Microsoft 365、RPA、AI、クラウドなど）
- 業務改善提案（DX推進、業務効率化など）
- コンサルティング提案（経営支援、会計・税務など）
- 補助金・助成金提案
- その他のビジネス提案全般

---

## Business Proposal Template（汎用ビジネス提案書テンプレート）

v1.9.0で追加された、あらゆるビジネス提案に使える汎用テンプレートです。

### スライド構成（推奨20枚構成）

| No. | スライド種別 | 内容 | 視覚要素 |
|-----|-------------|------|---------|
| 1 | 表紙 | 提案タイトル、サブタイトル、会社名 | タイトル＋アクセントライン |
| 2 | エグゼクティブサマリー | 課題・解決策・費用・効果・なぜ当社（5項目） | ラベル付きリスト |
| 3 | アジェンダ | 本日の内容（7項目程度） | 番号付きリスト |
| 4 | 現状課題（概要） | 主要な課題を概観（4項目推奨） | 2×2カード |
| 5-8 | 課題詳細×4 | 各課題を1枚ずつ深掘り（数値・根拠付き） | KPIボックス |
| 9 | 解決策（概要） | 提案するソリューションの全体像 | 機能カード |
| 10 | 解決策（詳細/費用） | 具体的な内容、ライセンス費用など | 価格表 |
| 11 | 導入効果①（KPI） | 期待できる効果を数値で示す | KPIボックス×3-4 |
| 12 | 導入効果②（Before/After） | 導入前後の変化を対比 | Before/After表 |
| 13 | 競合比較①（一覧） | 競合他社との比較表 | 比較表 |
| 14 | 競合比較②（詳細） | なぜ当社を選ぶべきかの論点 | 論破ポイント |
| 15 | 費用詳細 | 見積り内訳と作業内容 | 費用内訳表 |
| 16 | スケジュール | 導入までのタイムライン | ガントチャート |
| 17 | プロジェクト体制 | 役割分担と責任範囲 | 体制図 |
| 18 | なぜ今か | 導入タイミングの重要性（3理由） | アイコン付きリスト |
| 19 | 次のステップ | 具体的なアクション（3ステップ）＋CTA | プロセスフロー |
| 20 | お問い合わせ | 連絡先、謝辞 | 連絡先情報 |

---

### フォントサイズガイドライン（大きく見やすく）

| 要素 | 推奨サイズ | 最小サイズ |
|------|-----------|-----------|
| スライドタイトル | 36pt | 32pt |
| サブタイトル | 24pt | 22pt |
| 本文テキスト | 22pt | 20pt |
| 表のセル | 20pt | 18pt |
| 注釈・出典 | 18pt | 14pt |
| KPI数値 | 40-44pt | 36pt |

---

### エグゼクティブサマリーの構成

経営層向け提案の冒頭に必ず入れる「3分で要点がわかる」スライド。

```
┌──────────┬──────────────────────────────────────────────┐
│  課題    │ [顧客が抱える主要な課題を1文で]              │ ← 赤ラベル
├──────────┼──────────────────────────────────────────────┤
│  解決策  │ [提案するソリューションを1文で]              │ ← ティールラベル
├──────────┼──────────────────────────────────────────────┤
│  費用    │ [概算費用と期間]                             │ ← オレンジラベル
├──────────┼──────────────────────────────────────────────┤
│  効果    │ [期待できる効果を数値で]                     │ ← 緑ラベル
├──────────┼──────────────────────────────────────────────┤
│ なぜ当社 │ [競合優位性を1文で]                          │ ← 紫ラベル
└──────────┴──────────────────────────────────────────────┘
```

---

### 課題詳細スライドの構成

各課題を1枚で深掘りする。**必ず数値や根拠を入れる**。

```
┌─────────────────────────────────────────────────────────────┐
│ 課題①：[課題タイトル]                                      │ ← 36pt
│ [サブタイトル：インパクトのある数値や事実]                   │ ← 20pt
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ● [具体的な事実1]                         ┌─────────────┐ │
│  ● [具体的な事実2]                         │   数値     │ │
│  ● [具体的な事実3]                         │  ハイライト │ │
│  ● [具体的な事実4]                         │   ボックス │ │
│                                            └─────────────┘ │
│                                                             │
│  出典：[信頼できるソース]                                   │
└─────────────────────────────────────────────────────────────┘
```

---

### 競合比較スライドの構成

**論破ポイントを明確に**示す。

```
┌──────────────┬────────────────┬────────────────┬──────────────┐
│    項目      │    競合A       │    競合B       │  当社(強調)  │
├──────────────┼────────────────┼────────────────┼──────────────┤
│  費用        │  高い          │  中程度        │  ★最安      │
│  対応速度    │  遅い          │  普通          │  ★最速      │
│  専門性      │  IT中心        │  〇〇中心      │  ★両面対応  │
│  導入後支援  │  別途契約      │  パッケージ    │  ★込み      │
└──────────────┴────────────────┴────────────────┴──────────────┘
                                                   ↑ 薄水色背景で強調

┌─────────────────────────────────────────────────────────────┐
│ ✓ 論破ポイント1  ✓ 論破ポイント2  ✓ 論破ポイント3          │ ← 結論ボックス
└─────────────────────────────────────────────────────────────┘
```

---

### プロンプト例（汎用ビジネス提案書）

```markdown
あなたはARMA & ASSOCIATES（大野公認会計士・税理士事務所/株式会社アルマ）の
ビジネス提案書を作成するアシスタントです。

【提案情報】
- 提案タイトル：[例：〇〇システム導入のご提案]
- 顧客名：[例：株式会社〇〇様]
- 提案テーマ：[例：業務効率化、DX推進、コスト削減など]
- 概算費用：[例：200万円（3ヶ月）]
- 主な競合：[例：大手SIer、通信キャリアなど]

【顧客の課題（4つ）】
1. [課題1：例「情報が散らばっている」]
2. [課題2：例「属人化している」]
3. [課題3：例「ツールがバラバラ」]
4. [課題4：例「セキュリティが不安」]

【提案する解決策】
- [ソリューション名]
- [主要機能・サービス内容]

【期待効果（KPI）】
- [効果1：例「年間150時間の時間創出」]
- [効果2：例「管理工数30%削減」]
- [効果3：例「セキュリティリスク低減」]

【競合との差別化ポイント】
- [ポイント1：例「費用が30-40%安い」]
- [ポイント2：例「対応速度が速い」]
- [ポイント3：例「会計×ITの両面から提案」]
- [ポイント4：例「伴走支援込み」]

【なぜ今か（3つ）】
1. [理由1：例「AI時代への準備」]
2. [理由2：例「人手不足時代の備え」]
3. [理由3：例「補助金の活用」]

上記情報をもとに、20枚構成のビジネス提案書スライドを作成してください。
フォントサイズは20pt以上を維持し、視覚的な要素（表、図、KPIボックスなど）を
多用して、経営層にも伝わりやすい構成にしてください。
```

---

### Python生成コード（汎用テンプレート）

```python
# -*- coding: utf-8 -*-
"""
ARMA & ASSOCIATES - 汎用ビジネス提案書テンプレート
任意の提案テーマに対応可能な20枚構成
"""

from pptx import Presentation
from pptx.util import Cm, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
import os

# === カラーパレット ===
PRIMARY = RGBColor(0, 134, 171)      # ティール（メイン）
LIGHT_BLUE = RGBColor(0, 176, 240)   # 水色（アクセント）
ORANGE = RGBColor(237, 125, 49)      # オレンジ（強調、ガント）
GREEN = RGBColor(112, 173, 71)       # 緑（After、ポジティブ）
RED = RGBColor(192, 0, 0)            # 赤（Before、課題、警告）
PURPLE = RGBColor(112, 48, 160)      # 紫（差別化）
TEXT = RGBColor(95, 95, 95)          # ダークグレー（本文）
GRAY = RGBColor(128, 128, 128)       # グレー（注釈）
WHITE = RGBColor(255, 255, 255)
LIGHT_GRAY = RGBColor(245, 247, 250) # カード背景
BORDER = RGBColor(220, 225, 230)     # 枠線
ALT_ROW = RGBColor(240, 248, 250)    # 交互行

# === スライドサイズ ===
SLIDE_WIDTH = Cm(50.8)
SLIDE_HEIGHT = Cm(28.57)

# === 共通要素 ===
def add_common_elements(slide, slide_num):
    """左上四角、コピーライト、スライド番号を追加"""
    # 左上ティール四角
    left = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, Cm(-0.04), Cm(1.64), Cm(2.05), Cm(2.09)
    )
    left.fill.solid()
    left.fill.fore_color.rgb = PRIMARY
    left.line.fill.background()

    # コピーライト（M365_Detailed準拠: 27.0, 26.3cm / 18.0x1.0cm）
    cr = slide.shapes.add_textbox(Cm(27.0), Cm(26.3), Cm(18.0), Cm(1.0))
    cr.text_frame.paragraphs[0].text = "Copyright© Arma & Asocciates, Ltd All Rights Reserved"
    cr.text_frame.paragraphs[0].font.size = Pt(12)
    cr.text_frame.paragraphs[0].font.color.rgb = GRAY
    cr.text_frame.paragraphs[0].alignment = PP_ALIGN.RIGHT

    # スライド番号（M365_Detailed準拠: 48.25, 25.98cm）
    num = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        Cm(48.25), Cm(25.98),
        Cm(2.05), Cm(2.09)
    )
    num.fill.solid()
    num.fill.fore_color.rgb = PRIMARY
    num.line.fill.background()
    num.text_frame.anchor = MSO_ANCHOR.MIDDLE
    num.text_frame.paragraphs[0].text = str(slide_num)
    num.text_frame.paragraphs[0].font.size = Pt(18)
    num.text_frame.paragraphs[0].font.bold = True
    num.text_frame.paragraphs[0].font.color.rgb = WHITE
    num.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER


def add_slide_title(slide, title, subtitle=None):
    """スライドタイトルを追加（M365_Detailed準拠: 3.0, 2.0cm / 44.0x2.5cm）"""
    tb = slide.shapes.add_textbox(Cm(3.0), Cm(2.0), Cm(44.0), Cm(2.5))
    tb.text_frame.paragraphs[0].text = title
    tb.text_frame.paragraphs[0].font.size = Pt(36)
    tb.text_frame.paragraphs[0].font.bold = True
    tb.text_frame.paragraphs[0].font.color.rgb = PRIMARY

    if subtitle:
        sb = slide.shapes.add_textbox(Cm(3.0), Cm(4.2), Cm(44.0), Cm(1.5))
        sb.text_frame.paragraphs[0].text = subtitle
        sb.text_frame.paragraphs[0].font.size = Pt(20)
        sb.text_frame.paragraphs[0].font.color.rgb = TEXT


def add_kpi_box(slide, x, y, value, label, color):
    """KPIハイライトボックスを追加"""
    box = slide.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, x, y, Cm(12), Cm(10))
    box.fill.solid()
    box.fill.fore_color.rgb = LIGHT_GRAY
    box.line.color.rgb = color
    box.line.width = Pt(4)

    val = slide.shapes.add_textbox(x, y + Cm(1), Cm(12), Cm(4))
    val.text_frame.paragraphs[0].text = value
    val.text_frame.paragraphs[0].font.size = Pt(44)
    val.text_frame.paragraphs[0].font.bold = True
    val.text_frame.paragraphs[0].font.color.rgb = color
    val.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER

    lbl = slide.shapes.add_textbox(x, y + Cm(5.5), Cm(12), Cm(4))
    lbl.text_frame.word_wrap = True
    lbl.text_frame.paragraphs[0].text = label
    lbl.text_frame.paragraphs[0].font.size = Pt(20)
    lbl.text_frame.paragraphs[0].font.color.rgb = TEXT
    lbl.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER


def add_comparison_table(slide, headers, rows, x, y, col_widths):
    """比較表を追加"""
    # ヘッダー
    for i, (h, w) in enumerate(zip(headers, col_widths)):
        cx = x + sum(col_widths[:i])
        hd = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, y, w, Cm(2.5))
        hd.fill.solid()
        hd.fill.fore_color.rgb = PRIMARY
        hd.line.fill.background()
        hd.text_frame.anchor = MSO_ANCHOR.MIDDLE
        hd.text_frame.paragraphs[0].text = h
        hd.text_frame.paragraphs[0].font.size = Pt(18)
        hd.text_frame.paragraphs[0].font.bold = True
        hd.text_frame.paragraphs[0].font.color.rgb = WHITE
        hd.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER

    # データ行
    for ri, row in enumerate(rows):
        ry = y + Cm(2.5) + ri * Cm(2.8)
        is_highlight = (ri == len(rows) - 1)  # 最後の行（当社）を強調
        for ci, (cell, w) in enumerate(zip(row, col_widths)):
            cx = x + sum(col_widths[:ci])
            cl = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, ry, w, Cm(2.6))
            cl.fill.solid()
            if is_highlight:
                cl.fill.fore_color.rgb = RGBColor(230, 247, 250)
            elif ri % 2 == 0:
                cl.fill.fore_color.rgb = ALT_ROW
            else:
                cl.fill.fore_color.rgb = WHITE
            cl.line.color.rgb = BORDER
            cl.text_frame.anchor = MSO_ANCHOR.MIDDLE
            cl.text_frame.paragraphs[0].text = cell
            cl.text_frame.paragraphs[0].font.size = Pt(18)
            cl.text_frame.paragraphs[0].font.color.rgb = PRIMARY if is_highlight else TEXT
            cl.text_frame.paragraphs[0].font.bold = is_highlight
            cl.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER


def add_gantt_chart(slide, tasks, x, y, col_widths):
    """ガントチャートを追加"""
    # tasks = [(タスク名, 開始月, 終了月), ...]
    headers = ["タスク", "1ヶ月目", "2ヶ月目", "3ヶ月目"]
    for i, (h, w) in enumerate(zip(headers, col_widths)):
        cx = x + sum(col_widths[:i])
        hd = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, cx, y, w, Cm(2.5))
        hd.fill.solid()
        hd.fill.fore_color.rgb = PRIMARY if i == 0 else LIGHT_BLUE
        hd.line.fill.background()
        hd.text_frame.anchor = MSO_ANCHOR.MIDDLE
        hd.text_frame.paragraphs[0].text = h
        hd.text_frame.paragraphs[0].font.size = Pt(20)
        hd.text_frame.paragraphs[0].font.bold = True
        hd.text_frame.paragraphs[0].font.color.rgb = WHITE
        hd.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER

    for ti, (task, start, end) in enumerate(tasks):
        ty = y + Cm(2.5) + ti * Cm(3)
        # タスク名
        tk = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, ty, col_widths[0], Cm(2.8))
        tk.fill.solid()
        tk.fill.fore_color.rgb = WHITE
        tk.line.color.rgb = BORDER
        tk.text_frame.anchor = MSO_ANCHOR.MIDDLE
        tk.text_frame.margin_left = Cm(0.3)
        tk.text_frame.paragraphs[0].text = task
        tk.text_frame.paragraphs[0].font.size = Pt(18)
        tk.text_frame.paragraphs[0].font.color.rgb = TEXT

        # ガントバー
        bar_x = x + col_widths[0] + start * col_widths[1]
        bar_w = (end - start) * col_widths[1]
        bar = slide.shapes.add_shape(
            MSO_SHAPE.CHEVRON, bar_x + Cm(0.3), ty + Cm(0.5),
            bar_w - Cm(0.6), Cm(1.8)
        )
        bar.fill.solid()
        bar.fill.fore_color.rgb = ORANGE
        bar.line.fill.background()


def add_org_chart(slide, boxes):
    """体制図を追加"""
    # boxes = [(x, y, w, h, text, border_color), ...]
    for x, y, w, h, text, color in boxes:
        bx = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, x, y, w, h)
        bx.fill.solid()
        bx.fill.fore_color.rgb = WHITE
        bx.line.color.rgb = color
        bx.line.width = Pt(3)
        bx.text_frame.anchor = MSO_ANCHOR.MIDDLE
        bx.text_frame.word_wrap = True
        bx.text_frame.paragraphs[0].text = text
        bx.text_frame.paragraphs[0].font.size = Pt(20)
        bx.text_frame.paragraphs[0].font.bold = True
        bx.text_frame.paragraphs[0].font.color.rgb = TEXT
        bx.text_frame.paragraphs[0].alignment = PP_ALIGN.CENTER
```

---

## Design Specification（デザイン仕様）

### カラーコード（正確な値）

| 要素 | カラー名 | HEX | RGB |
|------|----------|-----|-----|
| **メインカラー** | ティール/シアン | **#0086AB** | **(0, 134, 171)** |
| タイトル文字 | ティール (accent1) | #0086AB | (0, 134, 171) |
| 本文テキスト | ダークグレー (dk1) | **#5F5F5F** | **(95, 95, 95)** |
| フッター | グレー | #808080 | (128, 128, 128) |
| 背景 | 白 | #FFFFFF | (255, 255, 255) |

### フォント仕様

| 用途 | フォント名 |
|------|------------|
| **見出し（タイトル）** | **Spica Neue P Light** |
| **本文** | **Spica Neue P** |

### サイズ仕様（正確な値・cm単位）

#### スライドサイズ
- **50.8cm × 28.57cm**（A3横相当）

#### 左上ティール四角（スライドマスターで自動表示）
| 項目 | 値 |
|------|-----|
| 幅 | **2.05cm** |
| 高さ | **2.09cm** |
| 位置（横） | **-0.04cm**（端からはみ出し） |
| 位置（縦） | **1.64cm** |
| 色 | #0086AB |

#### 右下エリア（スライド番号四角）

**スライド番号ボックス**
| 項目 | 値 |
|------|-----|
| 幅 | **2.05cm** |
| 高さ | **2.09cm** |
| 位置（横） | **48.25cm** |
| 位置（縦） | **25.98cm** |
| 背景色 | #0086AB |
| 文字色 | 白 |
| フォントサイズ | 18pt |

#### Copyright表記（右下、スライド番号の左隣）
| 項目 | 値 |
|------|-----|
| 幅 | **18.0cm** |
| 高さ | **1.0cm** |
| 位置（横） | **27.0cm** |
| 位置（縦） | **26.3cm** |
| フォントサイズ | 12pt |
| フォント | Spica Neue P |
| 色 | グレー (#808080) |

### 表紙スライド要素

> ⚠️ **重要**: 表紙は**白背景**です。ティールを全面背景色にするのは間違いです。
> 正しくは「白背景 + ティール文字のタイトル + 水色アクセントライン」です。
> 共通要素（左上四角、右下四角+スライド番号、コピーライト）は表紙にも含まれます。

#### タイトル
| 項目 | 値 |
|------|-----|
| 位置（横） | **5.0cm** |
| 位置（縦） | **8.0cm** |
| 幅 | **40.0cm** |
| 高さ | **4.0cm** |
| フォントサイズ | **48pt** |
| フォント | **Spica Neue P Light** |
| 色 | #0086AB |
| スタイル | 太字、下線 |

#### 会社名
| 項目 | 値 |
|------|-----|
| 位置（横） | **5.0cm** |
| 位置（縦） | **18.0cm** |
| 幅 | **40.0cm** |
| 高さ | **4.0cm** |
| フォントサイズ | **28pt** |
| フォント | **Spica Neue P** |
| 色 | #5F5F5F |
| 配置 | 中央揃え |

### 本編スライドタイトル
| 項目 | 値 |
|------|-----|
| 位置（横） | **3.0cm** |
| 位置（縦） | **2.0cm** |
| 幅 | **44.0cm** |
| 高さ | **2.5cm** |
| フォントサイズ | **36pt** |
| フォント | **Spica Neue P Light** |
| 色 | #0086AB |

### スライドマスターについて

**重要**: 左上のティール色四角は**スライドマスター**で設定されています。

- PowerPointの「表示」→「スライドマスター」で確認・編集可能
- マスターに配置されているため、全スライドに自動適用される
- Pythonで生成する場合は、各スライドに手動で図形を追加するか、マスター付きテンプレート（.potx）を使用

---

## Prompt（プロンプト）

```markdown
あなたはARMA & ASSOCIATES（大野公認会計士・税理士事務所/株式会社アルマ）の
プロジェクト資料を作成するアシスタントです。
以下のフォーマットに従ってスライド原稿を作成してください。

【スライドフォーマット規定】

■ デザイン仕様
- スライドサイズ: 50.8cm × 28.57cm（A3横相当）
- メインカラー: ティール（#0086AB / RGB: 0, 134, 171）
- タイトル文字: ティール（#0086AB）
- 本文テキスト: ダークグレー（#5F5F5F）
- フォント（見出し）: Spica Neue P Light
- フォント（本文）: Spica Neue P

■ 全体構成
1. 表紙スライド
2. アジェンダ
3. 本編スライド（必要数）
4. まとめ / 次のステップ

■ 共通要素（全スライド）
- 左上: ティール色四角（2.05cm × 2.09cm、位置: -0.04cm, 1.64cm）※スライドマスターで自動
- 右下: 背景四角（2.05×2.09cm）+ スライド番号ボックス（2.05×1.52cm、白文字）
- 右下: "Copyright© Arma & Associates, Ltd All Rights Reserved"（9pt・グレー・17.14×1.52cm）

■ 表紙スライドの形式
---
【スライド1: 表紙】
[左上: ティール四角 2.05×2.09cm] ※マスターから自動

タイトル: ○○様△△プロジェクト キックオフ資料
         ※ティール色（#0086AB）、Spica Neue P Light、太字、下線付き、48pt、中央

サブタイトル: （任意）
         ※グレー、20pt、中央

会社名:  大野公認会計士・税理士事務所
         （株）アルマ
         ※中央配置、2行、Spica Neue P、28pt

[右下: スライド番号 "1"（ティール背景・白文字）]
Copyright© Arma & Associates, Ltd All Rights Reserved
---

■ アジェンダスライドの形式
---
【スライド2: アジェンダ】
[左上: ティール四角] ※マスターから自動

アジェンダ（ティール色・Spica Neue P Light・太字・イタリック・48pt）

1. 項目1
2. 項目2
3. 項目3
（Spica Neue P、22pt、ダークグレー、行間1.2）

[右下: スライド番号 "2"]
Copyright© Arma & Associates, Ltd All Rights Reserved
---

■ 本編スライドの形式
---
【スライドN: タイトル】
[左上: ティール四角] ※マスターから自動

タイトル（ティール色・Spica Neue P Light・太字・48pt）

〈本文〉
- 箇条書きは「•」または番号を使用
- 重要な概念は**太字**で強調
- Spica Neue P、18-22pt、ダークグレー

[右下: スライド番号]
Copyright© Arma & Associates, Ltd All Rights Reserved
---

■ 出力時の注意
- 1スライド1メッセージを意識
- 文字数は1スライドあたり200字以内を目安
- タイトルは必ずティール色で統一
```

---

## Project Type Templates

### RPA導入プロジェクト用

```markdown
以下のRPA導入プロジェクトのスライドを作成してください：

【プロジェクト情報】
- クライアント名：
- プロジェクト名：
- 対象業務：
- 導入ツール：（UiPath / Power Automate / その他）

【必要なスライド】
1. 表紙
2. アジェンダ
3. 用語の定義
4. 現状の課題と変更アプローチ
5. 想定プロセス（全体）
6. 前提条件の確認
7. 想定スケジュール
8. 体制図
9. 想定仕様
10. 今後の定例会議
```

### 補助金・助成金提案用

```markdown
以下の補助金提案資料のスライドを作成してください：

【提案情報】
- クライアント名：
- 提案する補助金/助成金：
- 申請予定時期：

【必要なスライド】
1. 表紙
2. アジェンダ
3. 補助金制度の概要
4. 御社が活用できる理由
5. 補助対象経費と補助額シミュレーション
6. 申請スケジュール
7. 必要書類一覧
8. 当事務所のサポート内容
9. 次のステップ
```

---

## Output Example

```
【スライド1: 表紙】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ [2.05×2.09cm ティール四角 #0086AB 位置(-0.04, 1.64)cm]

              AI採用効率化パッケージ
              ￣￣￣￣￣￣￣￣￣￣￣￣￣
              ※ティール(#0086AB)・Spica Neue P Light・下線・48pt

                   包括的提案書
                   ※グレー・20pt


               大野公認会計士・税理士事務所
                    （株）アルマ
               ※Spica Neue P・28pt・#5F5F5F

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Copyright© Arma & Associates, Ltd All Rights Reserved  ■1■
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


【スライド2: アジェンダ】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■ アジェンダ ※ティール・Spica Neue P Light・太字・イタリック・48pt

1. エグゼクティブサマリー
2. 採用プロセス全体像とAI活用ポイント
3. 主要競合サービスとの比較
4. PHASE 1: 求人票の作成自動化
5. PHASE 2: 書類選考の自動化
6. PHASE 3: 面接プロセスの自動化
7. PHASE 4: オファー・条件交渉の最適化
8. PHASE 5: 追加提案
9. まとめ
※Spica Neue P・22pt・#5F5F5F

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Copyright© Arma & Associates, Ltd All Rights Reserved  ■2■
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Python生成コード例

```python
from pptx import Presentation
from pptx.util import Cm, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# ========== 正確なカラー定義 ==========
TEAL = RGBColor(0, 134, 171)       # #0086AB (accent1)
DARK_TEXT = RGBColor(95, 95, 95)   # #5F5F5F (dk1)
GRAY = RGBColor(128, 128, 128)     # #808080
WHITE = RGBColor(255, 255, 255)

# ========== フォント定義 ==========
FONT_TITLE = 'Spica Neue P Light'  # 見出し用
FONT_BODY = 'Spica Neue P'         # 本文用

# ========== スライドサイズ ==========
SLIDE_WIDTH = Cm(50.8)
SLIDE_HEIGHT = Cm(28.57)

# ========== 左上ティール四角 ==========
TEAL_SQUARE_WIDTH = Cm(2.05)
TEAL_SQUARE_HEIGHT = Cm(2.09)
TEAL_SQUARE_LEFT = Cm(-0.04)  # 端からはみ出し
TEAL_SQUARE_TOP = Cm(1.64)

# ========== 右下スライド番号ボックス ==========
SLIDE_NUM_WIDTH = Cm(2.05)
SLIDE_NUM_HEIGHT = Cm(2.09)
SLIDE_NUM_LEFT = Cm(48.25)
SLIDE_NUM_TOP = Cm(25.98)

# ========== Copyright ==========
COPYRIGHT_WIDTH = Cm(18.0)
COPYRIGHT_HEIGHT = Cm(1.0)
COPYRIGHT_LEFT = Cm(27.0)
COPYRIGHT_TOP = Cm(26.3)

# ========== タイトル ==========
TITLE_FONT_SIZE = Pt(48)
COMPANY_FONT_SIZE = Pt(28)

# ========== 表紙タイトル位置 ==========
COVER_TITLE_LEFT = Cm(5.0)
COVER_TITLE_TOP = Cm(8.0)
COVER_TITLE_WIDTH = Cm(40.0)
COVER_TITLE_HEIGHT = Cm(4.0)

# ========== 表紙サブタイトル位置 ==========
COVER_SUBTITLE_LEFT = Cm(5.0)
COVER_SUBTITLE_TOP = Cm(14.0)
COVER_SUBTITLE_WIDTH = Cm(40.0)
COVER_SUBTITLE_HEIGHT = Cm(2.0)

# ========== 会社名位置 ==========
COMPANY_LEFT = Cm(5.0)
COMPANY_TOP = Cm(18.0)
COMPANY_WIDTH = Cm(40.0)
COMPANY_HEIGHT = Cm(4.0)

# ========== 本編タイトル位置 ==========
CONTENT_TITLE_LEFT = Cm(3.0)
CONTENT_TITLE_TOP = Cm(2.0)
CONTENT_TITLE_WIDTH = Cm(44.0)
CONTENT_TITLE_HEIGHT = Cm(2.5)
```

---

## Tips

### スライドマスターの設定方法

1. PowerPoint「表示」→「スライドマスター」
2. 左上にティール四角（2.05×2.09cm、位置: -0.04cm, 1.64cm）を配置
3. 右下に背景四角（2.05×2.09cm）とスライド番号ボックス（2.05×1.52cm）を配置
4. 下部にCopyright表記（18.0×1.0cm、位置: 27.0cm, 26.3cm）を配置
5. マスターを閉じると全スライドに自動適用

### フォント設定

- タイトル: **Spica Neue P Light**
- 本文: **Spica Neue P**
- フォールバック: メイリオ / 游ゴシック

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-01-21 | Initial release |
| 1.1.0 | 2025-01-21 | Wizleapスタイルに合わせて更新 |
| 1.2.0 | 2025-01-21 | サイズ仕様をcm単位で詳細化 |
| 1.3.0 | 2025-01-21 | 正確なカラー(#0086AB)・サイズ(2.05×2.09cm)に修正 |
| 1.4.0 | 2026-01-21 | 右下ボックス高さ修正(1.52cm)、見出し48ptに修正 |
| 1.5.0 | 2026-01-21 | 元ファイル完全準拠: スライドサイズ(50.8×28.57cm)、会社名28pt、フォント(Spica Neue P)、全位置情報、右下2層構造、本文色(#5F5F5F) |
| 1.6.0 | 2026-01-28 | モダンカードデザイン追加、左上四角を全スライド統一、コピーライト位置修正（右下右寄せ） |
| 1.7.0 | 2026-01-28 | 図解テンプレート追加（体制図・ガントチャート・比較表）、M365提案書フルテンプレート追加 |
| 1.8.0 | 2026-01-28 | 視覚要素拡充（用語定義表・KPIボックス・Before/After・プロセスフロー・アイコンリスト） |
| 1.9.0 | 2026-01-28 | 汎用ビジネス提案書テンプレート追加（20枚構成、任意のテーマに対応、フォントサイズ20pt以上、プロンプト例、Python関数） |
| 2.0.0 | 2026-01-29 | CRITICAL REQUIREMENTS セクション追加: スライドサイズ必須仕様(50.8×28.57cm)、共通レイアウト要素の視覚的配置図、表紙デザインの正誤比較、実装前チェックリスト、よくある間違いの明記 |
| **2.1.0** | **2026-01-29** | **⚠️ M365_Detailed.pptx完全準拠: 全位置情報を実ファイルから抽出して修正。Copyright(27.0,26.3/18x1cm)、右下四角(48.25,25.98cm)、表紙タイトル(5.0,8.0/40x4cm)、表紙会社名(5.0,18.0/40x4cm)、本編タイトル(3.0,2.0/44x2.5cm)** |

---

## Diagram Templates（図解テンプレート）

v1.7.0で追加された図解テンプレートです。経営層向け提案書に必要な視覚的要素を提供します。

### 追加カラー定義（図解用）

| 要素 | カラー名 | HEX | RGB | 用途 |
|------|----------|-----|-----|------|
| オレンジ | アクセント | #ED7D31 | (237, 125, 49) | ガントバー、強調 |
| 赤枠 | クライアント側 | #C00000 | (192, 0, 0) | 体制図（顧客側） |
| 青枠 | 当社側 | #0070C0 | (0, 112, 192) | 体制図（自社側） |
| テーブルヘッダー | ティール | #0086AB | (0, 134, 171) | 表のヘッダー行 |
| 交互行 | 薄水色 | #F0F8FA | (240, 248, 250) | テーブル交互行 |

---

### 1. 体制図（Organization Chart）

プロジェクト体制を視覚的に表現します。

```
                    ┌─────────────────────┐
                    │   Project Owner     │ ← 赤枠（クライアント側）
                    │   御社 ご担当者様    │
                    └──────────┬──────────┘
                               │
                    ┌──────────┴──────────┐
                    │        PM           │ ← 青枠（当社側）
                    │   アルマ（大野会計）  │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
┌─────────┴─────────┐ ┌────────┴────────┐ ┌────────┴────────┐
│  御社 IT担当者様   │ │  アルマ 担当    │ │ アルマ サポート  │
│                   │ │                 │ │                 │
│ • 社内調整        │ │ • 環境構築      │ │ • ヘルプデスク   │
│ • ユーザー窓口    │ │ • 研修実施      │ │ • 運用支援      │
└───────────────────┘ └─────────────────┘ └─────────────────┘
     赤枠                  青枠                  青枠
```

**凡例**
- 赤枠（#C00000）: 御社側
- 青枠（#0070C0）: 当社側

---

### 2. ガントチャート（Gantt Chart）

プロジェクトスケジュールを視覚的に表現します。

```
┌─────────────────┬──────────┬──────────┬──────────┐
│                 │  1ヶ月目  │  2ヶ月目  │  3ヶ月目  │
├─────────────────┼──────────┼──────────┼──────────┤
│ 現状分析        │ ▶═══════▷│          │          │
├─────────────────┼──────────┼──────────┼──────────┤
│ 環境構築        │ ▶════════════════▷  │          │
├─────────────────┼──────────┼──────────┼──────────┤
│ データ移行      │          │ ▶═══════▷│          │
├─────────────────┼──────────┼──────────┼──────────┤
│ テスト運用      │          │ ▶═══════▷│          │
├─────────────────┼──────────┼──────────┼──────────┤
│ 社員研修        │          │ ▶════════════════▷  │
├─────────────────┼──────────┼──────────┼──────────┤
│ 本番運用開始    │          │          │ ▶═══════▷│
├─────────────────┼──────────┼──────────┼──────────┤
│ 定着支援        │          │          │ ▶═══════▷│
└─────────────────┴──────────┴──────────┴──────────┘
```

**ガントバー仕様**
- 形状: シェブロン（CHEVRON）または角丸四角
- 色: オレンジ（#ED7D31）
- ヘッダー: ライトブルー背景（#00B0F0）

---

### 3. 比較表（Comparison Table）

競合他社との比較を表形式で表現します。

```
┌────────┬──────────┬──────────┬──────────┬────────────┐
│  項目  │ 大塚商会  │   KDDI   │  リコー   │ 当社(アルマ) │ ← ヘッダー（ティール背景）
├────────┼──────────┼──────────┼──────────┼────────────┤
│ 満足度 │ 5.0(1件) │ 4.0(2件) │ 3.6(2件) │ ★お客様の声 │ ← 当社列を強調（薄水色背景）
├────────┼──────────┼──────────┼──────────┼────────────┤
│ 費用   │ 300万円〜│ 250万円〜│ 280万円〜│ 200万円    │
├────────┼──────────┼──────────┼──────────┼────────────┤
│ 対応速度│ 2〜3週間 │ 1〜2週間 │ 1〜2週間 │ 即日〜3日  │
├────────┼──────────┼──────────┼──────────┼────────────┤
│ 専門性 │ IT中心   │ 通信中心 │ 複合機連携│ 会計×IT両面 │
└────────┴──────────┴──────────┴──────────┴────────────┘
```

**テーブル仕様**
- ヘッダー行: ティール背景（#0086AB）、白文字
- 交互行: 薄水色背景（#F0F8FA）
- 当社列: 常に薄水色背景、ティール文字、太字

---

### 4. 用語定義表（Definition Table）

専門用語や略語を説明するための表形式です。

```
┌──────────────────┬────────────────────────────────────────────┐
│      用語        │                    定義                     │ ← ヘッダー（ティール背景）
├──────────────────┼────────────────────────────────────────────┤
│ Microsoft 365    │ Word, Excel, Teams等を含むクラウドサービス群 │ ← 交互行（薄水色/白）
├──────────────────┼────────────────────────────────────────────┤
│ Teams            │ ビデオ会議・チャット・電話を統合したツール   │
├──────────────────┼────────────────────────────────────────────┤
│ OneDrive         │ 個人用クラウドストレージ（1人あたり1TB）     │
└──────────────────┴────────────────────────────────────────────┘
```

---

### 5. KPIボックス（KPI Highlight Box）

重要な数値を強調表示するボックスです。

```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│                 │  │                 │  │                 │
│    150時間      │  │      30%        │  │    4.2億円      │
│                 │  │                 │  │                 │
│  年間1人あたり   │  │  IT管理工数の   │  │  情報漏えい時の  │
│  時間創出効果    │  │    削減率       │  │  平均損害額      │
└─────────────────┘  └─────────────────┘  └─────────────────┘
   ティール枠           オレンジ枠            赤枠
```

**KPIボックス仕様**
- サイズ: 8cm × 5cm
- 背景: ライトグレー（#F5F7FA）
- 枠線: 色別（ティール/オレンジ/赤/緑）、3pt
- 数値: 36pt、太字、枠線と同色
- ラベル: 12pt、ダークグレー

---

### 6. Before/After比較（Before/After Comparison）

導入前後の変化を視覚的に表現します。

```
┌─────────────────────┐         ┌─────────────────────┐
│   Before（現状）    │   →→→   │  After（導入後）    │
│     赤ヘッダー       │         │    緑ヘッダー        │
├─────────────────────┤         ├─────────────────────┤
│ ✗ 資料探しに時間    │         │ ✓ 検索一発でアクセス │
│ ✗ 担当者不在で停滞  │         │ ✓ 誰でも対応可能    │
│ ✗ 会議のため移動    │         │ ✓ オンラインでOK    │
│ ✗ セキュリティ不安  │         │ ✓ 多要素認証で安心  │
└─────────────────────┘         └─────────────────────┘
   背景: 薄い赤                    背景: 薄い緑
```

**Before/After仕様**
- Beforeヘッダー: 赤（#C00000）
- Afterヘッダー: 緑（#70AD47）
- Before背景: 薄い赤（#FFF0F0）
- After背景: 薄い緑（#F0FFF0）
- 矢印: オレンジ（#ED7D31）

---

### 7. プロセスフロー（Process Flow）

ステップを順番に表現するフロー図です。

```
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│ ① 診断  │ →→ │ ② 要件  │ →→ │ ③ 構築  │ →→ │ ④ 研修  │ →→ │ ⑤ 運用  │
│         │     │   定義   │     │         │     │         │     │         │
│ 現状把握 │     │ スコープ │     │ 環境設定 │     │ 操作研修 │     │ 定着支援 │
│ 課題整理 │     │   決定   │     │ アカウント│     │ マニュアル│     │ KPI測定  │
└─────────┘     └─────────┘     └─────────┘     └─────────┘     └─────────┘
  ティール        ライトグレー    ライトグレー    ライトグレー    ライトグレー
  背景            背景            背景            背景            背景
```

**プロセスフロー仕様**
- ステップボックス: 8cm × 3cm、角丸
- 番号サークル: 1.2cm、ティール背景
- 矢印: オレンジ（#ED7D31）
- 最初のステップ: ティール背景（強調）

---

### 8. アイコン付きリスト（Icon List）

番号やアイコン付きで項目を列挙します。

```
┌──┐
│①│ タイトル1
└──┘ 説明テキスト説明テキスト

┌──┐
│②│ タイトル2
└──┘ 説明テキスト説明テキスト

┌──┐
│③│ タイトル3
└──┘ 説明テキスト説明テキスト
```

**アイコンリスト仕様**
- アイコン: 2cm × 2cm、円形、ティール背景
- タイトル: 16pt、太字、ティール
- 説明: 12pt、ダークグレー
- 行間隔: 3.5cm

---

## Modern Card Design（モダンカードデザイン）

v1.6.0で追加されたモダンなカードデザイン仕様です。白背景で視覚的に見やすいレイアウトを実現します。

### 追加カラー定義

| 要素 | カラー名 | HEX | RGB |
|------|----------|-----|-----|
| カード背景 | ライトグレー | #F5F7FA | (245, 247, 250) |
| カード枠線 | ボーダーグレー | #DCE1E6 | (220, 225, 230) |
| アクセント線 | ライトブルー | #00B0F0 | (0, 176, 240) |

### モダンカード要素

```
┌─────────────────────────────────────┐
│  ┌──┐                               │
│  │01│  カードタイトル               │ ← ティール色・太字
│  └──┘  ────────────────────────     │
│        説明テキスト                 │ ← ダークグレー
│                                     │
└─────────────────────────────────────┘
  ↑ 背景: #F5F7FA / 枠線: #DCE1E6
```

### カードサイズ仕様

| 項目 | 値 |
|------|-----|
| カード幅 | 20cm |
| カード高さ | 4.5cm |
| 番号サークル | 1.8cm × 1.8cm |
| 角丸半径 | 0.3cm |
| カード間隔（横） | 2cm |
| カード間隔（縦） | 1cm |

### 2列×3行レイアウト

アジェンダスライドでは、6項目を2列×3行のカードで配置：

```
┌────────────────────┐  ┌────────────────────┐
│  (1) 項目1         │  │  (2) 項目2         │
└────────────────────┘  └────────────────────┘
┌────────────────────┐  ┌────────────────────┐
│  (3) 項目3         │  │  (4) 項目4         │
└────────────────────┘  └────────────────────┘
┌────────────────────┐  ┌────────────────────┐
│  (5) 項目5         │  │  (6) 項目6         │
└────────────────────┘  └────────────────────┘
```

---

## Python生成コード（モダン版 v1.6.0）

```python
# -*- coding: utf-8 -*-
"""
ARMA & ASSOCIATES PowerPoint Generator - Modern Card Design v1.6.0
"""

from pptx import Presentation
from pptx.util import Cm, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
import os

# === デザイン設定 ===
PRIMARY_COLOR = RGBColor(0, 134, 171)      # ティール #0086AB
LIGHT_BLUE = RGBColor(0, 176, 240)         # 薄い水色（アクセント）
TEXT_COLOR = RGBColor(95, 95, 95)          # ダークグレー #5F5F5F
FOOTER_COLOR = RGBColor(128, 128, 128)     # グレー #808080
WHITE = RGBColor(255, 255, 255)
LIGHT_GRAY = RGBColor(245, 247, 250)       # 薄いグレー（カード背景）
CARD_BORDER = RGBColor(220, 225, 230)      # カード枠線

# スライドサイズ（A3横）
SLIDE_WIDTH = Cm(50.8)
SLIDE_HEIGHT = Cm(28.57)

# 右下の四角サイズ（M365_Detailed準拠）
NUM_BOX_WIDTH = Cm(2.05)
NUM_BOX_HEIGHT = Cm(2.09)
NUM_BOX_X = Cm(48.25)
NUM_BOX_Y = Cm(25.98)

# 左上の四角（全スライド共通）
LEFT_BOX_X = Cm(-0.04)
LEFT_BOX_Y = Cm(1.64)
LEFT_BOX_W = Cm(2.05)
LEFT_BOX_H = Cm(2.09)

# コピーライト（M365_Detailed準拠）
COPYRIGHT_X = Cm(27.0)
COPYRIGHT_Y = Cm(26.3)
COPYRIGHT_W = Cm(18.0)
COPYRIGHT_H = Cm(1.0)


def create_presentation():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    return prs


def add_common_elements(slide, slide_num):
    """全スライド共通の要素を追加（M365_Detailed準拠）"""
    # 左上のティール四角（全スライド共通サイズ）
    left_box = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        LEFT_BOX_X, LEFT_BOX_Y,
        LEFT_BOX_W, LEFT_BOX_H
    )
    left_box.fill.solid()
    left_box.fill.fore_color.rgb = PRIMARY_COLOR
    left_box.line.fill.background()

    # コピーライト（M365_Detailed準拠: 27.0, 26.3cm / 18.0x1.0cm）
    copyright_box = slide.shapes.add_textbox(
        COPYRIGHT_X, COPYRIGHT_Y, COPYRIGHT_W, COPYRIGHT_H
    )
    tf = copyright_box.text_frame
    p = tf.paragraphs[0]
    p.text = "Copyright© Arma & Asocciates, Ltd All Rights Reserved"
    p.font.size = Pt(12)
    p.font.color.rgb = FOOTER_COLOR
    p.alignment = PP_ALIGN.RIGHT

    # 右下のスライド番号ボックス（M365_Detailed準拠: 48.25, 25.98cm）
    num_box = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        NUM_BOX_X, NUM_BOX_Y,
        NUM_BOX_WIDTH, NUM_BOX_HEIGHT
    )
    num_box.fill.solid()
    num_box.fill.fore_color.rgb = PRIMARY_COLOR
    num_box.line.fill.background()

    tf = num_box.text_frame
    tf.clear()
    tf.anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.text = str(slide_num)
    p.font.size = Pt(18)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.alignment = PP_ALIGN.CENTER


def add_cover_slide(prs, title, subtitle):
    """表紙スライド（M365_Detailed準拠）"""
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    add_common_elements(slide, 1)

    # タイトル（M365_Detailed準拠: 5.0, 8.0cm / 40.0x4.0cm）
    title_box = slide.shapes.add_textbox(
        Cm(5.0), Cm(8.0), Cm(40.0), Cm(4.0)
    )
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(48)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_COLOR
    p.alignment = PP_ALIGN.CENTER

    # タイトル下の水色アクセントライン（M365_Detailed準拠: 10.0, 12.5cm）
    line = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        Cm(10.0), Cm(12.5), Cm(30.0), Cm(0.15)
    )
    line.fill.solid()
    line.fill.fore_color.rgb = LIGHT_BLUE
    line.line.fill.background()

    # サブタイトル（M365_Detailed準拠: 5.0, 14.0cm / 40.0x2.0cm）
    sub_box = slide.shapes.add_textbox(
        Cm(5.0), Cm(14.0), Cm(40.0), Cm(2.0)
    )
    tf = sub_box.text_frame
    p = tf.paragraphs[0]
    p.text = subtitle
    p.font.size = Pt(24)
    p.font.color.rgb = TEXT_COLOR
    p.alignment = PP_ALIGN.CENTER

    # 会社名（M365_Detailed準拠: 5.0, 18.0cm / 40.0x4.0cm）
    company_box = slide.shapes.add_textbox(
        Cm(5.0), Cm(18.0), Cm(40.0), Cm(4.0)
    )
    tf = company_box.text_frame
    p = tf.paragraphs[0]
    p.text = "大野公認会計士・税理士事務所"
    p.font.size = Pt(28)
    p.font.color.rgb = TEXT_COLOR
    p.alignment = PP_ALIGN.CENTER

    p2 = tf.add_paragraph()
    p2.text = "（株）アルマ"
    p2.font.size = Pt(28)
    p2.font.color.rgb = TEXT_COLOR
    p2.alignment = PP_ALIGN.CENTER

    return slide


def add_card(slide, x, y, width, height, number, title, description):
    """モダンなカード要素を追加"""
    # カード背景（角丸）
    card = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE,
        x, y, width, height
    )
    card.fill.solid()
    card.fill.fore_color.rgb = LIGHT_GRAY
    card.line.color.rgb = CARD_BORDER
    card.line.width = Pt(1)

    # 番号サークル
    circle = slide.shapes.add_shape(
        MSO_SHAPE.OVAL,
        x + Cm(0.8), y + Cm(0.6),
        Cm(1.8), Cm(1.8)
    )
    circle.fill.solid()
    circle.fill.fore_color.rgb = PRIMARY_COLOR
    circle.line.fill.background()

    tf = circle.text_frame
    tf.clear()
    tf.anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.text = str(number)
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.alignment = PP_ALIGN.CENTER

    # タイトル
    title_box = slide.shapes.add_textbox(
        x + Cm(3.2), y + Cm(0.6),
        width - Cm(4), Cm(1.5)
    )
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(18)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_COLOR

    # 説明文
    if description:
        desc_box = slide.shapes.add_textbox(
            x + Cm(3.2), y + Cm(2.2),
            width - Cm(4), Cm(2)
        )
        tf = desc_box.text_frame
        tf.word_wrap = True
        p = tf.paragraphs[0]
        p.text = description
        p.font.size = Pt(12)
        p.font.color.rgb = TEXT_COLOR


def add_agenda_slide(prs, items):
    """目次スライド（M365_Detailed準拠）"""
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    add_common_elements(slide, 2)

    # タイトル（M365_Detailed準拠: 3.0, 2.0cm / 44.0x2.5cm）
    title_box = slide.shapes.add_textbox(
        Cm(3.0), Cm(2.0), Cm(44.0), Cm(2.5)
    )
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = "本日お話しすること"
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_COLOR

    # カード配置（2列 x 3行）
    card_width = Cm(20)
    card_height = Cm(4.5)
    start_x = Cm(4)
    start_y = Cm(5.5)
    gap_x = Cm(22)
    gap_y = Cm(5.5)

    for i, (num, title, desc) in enumerate(items):
        col = i % 2
        row = i // 2
        x = start_x + (col * gap_x)
        y = start_y + (row * gap_y)
        add_card(slide, x, y, card_width, card_height, num, title, desc)

    return slide


# === 使用例 ===
if __name__ == "__main__":
    prs = create_presentation()

    # 表紙
    add_cover_slide(
        prs,
        "Microsoft 365 導入のご提案",
        "〜 会社の「働き方」をアップグレードしませんか？ 〜"
    )

    # 目次（6項目のカード）
    agenda_items = [
        ("1", "御社の「もったいない」状況", "情報散在・属人化の現状分析"),
        ("2", "M365で何ができるか", "主要機能と活用イメージ"),
        ("3", "導入メリット", "時間・コスト・リスクの改善"),
        ("4", "他社との違い", "当社サービスの強み"),
        ("5", "費用とスケジュール", "3ヶ月200万円の内訳"),
        ("6", "なぜ今か", "AI時代への準備"),
    ]
    add_agenda_slide(prs, agenda_items)

    # 保存
    output_path = os.path.join(os.path.expanduser("~"), "Downloads", "output.pptx")
    prs.save(output_path)
    print(f"Saved: {output_path}")
```

---

## License

Copyright© Arma & Associates, Ltd All Rights Reserved
