# PowerPoint Slide Generator Prompt - ARMA & ASSOCIATES

## Overview

ARMA & ASSOCIATES（大野公認会計士・税理士事務所/株式会社アルマ）向けのプロジェクト資料・プレゼンテーションスライド原稿を生成するためのプロンプトテンプレートです。

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

#### 右下エリア（2層構造）

**背景四角（下層）**
| 項目 | 値 |
|------|-----|
| 幅 | **2.05cm** |
| 高さ | **2.09cm** |
| 位置（横） | 47.34cm |
| 位置（縦） | 26.48cm |
| 色 | #0086AB |

**スライド番号ボックス（上層）**
| 項目 | 値 |
|------|-----|
| 幅 | **2.05cm** |
| 高さ | **1.52cm** |
| 位置（横） | 47.34cm |
| 位置（縦） | 26.73cm |
| 背景色 | #0086AB |
| 文字色 | 白 |

#### Copyright表記（右下、スライド番号の左隣）
| 項目 | 値 |
|------|-----|
| 幅 | **17.14cm** |
| 高さ | **1.52cm** |
| 位置（横） | 29.67cm |
| 位置（縦） | 26.73cm |
| フォントサイズ | 9pt |
| フォント | Spica Neue P |
| 色 | グレー (#808080) |

### 表紙スライド要素

#### タイトル
| 項目 | 値 |
|------|-----|
| 位置（横） | 7.3cm |
| 位置（縦） | 10.36cm |
| 幅 | 36.2cm |
| 高さ | 2.99cm |
| フォントサイズ | **48pt** |
| フォント | **Spica Neue P Light** |
| 色 | #0086AB |
| スタイル | 太字、下線 |

#### 会社名
| 項目 | 値 |
|------|-----|
| 位置（横） | 16.83cm |
| 位置（縦） | 19.07cm |
| 幅 | 17.14cm |
| 高さ | 2.65cm |
| フォントサイズ | **28pt** |
| フォント | **Spica Neue P** |
| 色 | #5F5F5F |

### 本編スライドタイトル
| 項目 | 値 |
|------|-----|
| 位置（横） | 2.58cm |
| 位置（縦） | 1.31cm |
| 幅 | 46.35cm |
| 高さ | 2.99cm |
| フォントサイズ | **48pt** |
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

# ========== 右下背景四角 ==========
BG_SQUARE_WIDTH = Cm(2.05)
BG_SQUARE_HEIGHT = Cm(2.09)
BG_SQUARE_LEFT = Cm(47.34)
BG_SQUARE_TOP = Cm(26.48)

# ========== 右下スライド番号ボックス ==========
SLIDE_NUM_WIDTH = Cm(2.05)
SLIDE_NUM_HEIGHT = Cm(1.52)
SLIDE_NUM_LEFT = Cm(47.34)
SLIDE_NUM_TOP = Cm(26.73)

# ========== Copyright ==========
COPYRIGHT_WIDTH = Cm(17.14)
COPYRIGHT_HEIGHT = Cm(1.52)
COPYRIGHT_LEFT = Cm(29.67)
COPYRIGHT_TOP = Cm(26.73)

# ========== タイトル ==========
TITLE_FONT_SIZE = Pt(48)
COMPANY_FONT_SIZE = Pt(28)

# ========== 表紙タイトル位置 ==========
COVER_TITLE_LEFT = Cm(7.3)
COVER_TITLE_TOP = Cm(10.36)
COVER_TITLE_WIDTH = Cm(36.2)
COVER_TITLE_HEIGHT = Cm(2.99)

# ========== 会社名位置 ==========
COMPANY_LEFT = Cm(16.83)
COMPANY_TOP = Cm(19.07)
COMPANY_WIDTH = Cm(17.14)
COMPANY_HEIGHT = Cm(2.65)

# ========== 本編タイトル位置 ==========
CONTENT_TITLE_LEFT = Cm(2.58)
CONTENT_TITLE_TOP = Cm(1.31)
CONTENT_TITLE_WIDTH = Cm(46.35)
CONTENT_TITLE_HEIGHT = Cm(2.99)
```

---

## Tips

### スライドマスターの設定方法

1. PowerPoint「表示」→「スライドマスター」
2. 左上にティール四角（2.05×2.09cm、位置: -0.04cm, 1.64cm）を配置
3. 右下に背景四角（2.05×2.09cm）とスライド番号ボックス（2.05×1.52cm）を配置
4. 下部にCopyright表記（17.14×1.52cm、位置: 29.67cm, 26.73cm）を配置
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
| **1.7.0** | **2026-01-28** | **図解テンプレート追加（体制図・ガントチャート・比較表）、M365提案書フルテンプレート追加** |

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

# 右下の四角サイズ（幅2.05cm、高さ2.09cm）
NUM_BOX_WIDTH = Cm(2.05)
NUM_BOX_HEIGHT = Cm(2.09)

# 左上の四角（全スライド共通）
LEFT_BOX_X = Cm(-0.04)
LEFT_BOX_Y = Cm(1.64)
LEFT_BOX_W = Cm(2.05)
LEFT_BOX_H = Cm(2.09)


def create_presentation():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    return prs


def add_common_elements(slide, slide_num):
    """全スライド共通の要素を追加"""
    # 左上のティール四角（全スライド共通サイズ）
    left_box = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        LEFT_BOX_X, LEFT_BOX_Y,
        LEFT_BOX_W, LEFT_BOX_H
    )
    left_box.fill.solid()
    left_box.fill.fore_color.rgb = PRIMARY_COLOR
    left_box.line.fill.background()

    # コピーライト（右下、スライド番号の左側・右寄せ）
    copyright_box = slide.shapes.add_textbox(
        Cm(27), Cm(26.3), Cm(18), Cm(1)
    )
    tf = copyright_box.text_frame
    p = tf.paragraphs[0]
    p.text = "Copyright© Arma & Asocciates, Ltd All Rights Reserved"
    p.font.size = Pt(10)
    p.font.color.rgb = FOOTER_COLOR
    p.alignment = PP_ALIGN.RIGHT

    # 右下のスライド番号ボックス
    num_box = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        SLIDE_WIDTH - NUM_BOX_WIDTH - Cm(0.5),
        SLIDE_HEIGHT - NUM_BOX_HEIGHT - Cm(0.5),
        NUM_BOX_WIDTH,
        NUM_BOX_HEIGHT
    )
    num_box.fill.solid()
    num_box.fill.fore_color.rgb = PRIMARY_COLOR
    num_box.line.fill.background()

    tf = num_box.text_frame
    tf.clear()
    tf.anchor = MSO_ANCHOR.MIDDLE
    p = tf.paragraphs[0]
    p.text = str(slide_num)
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = WHITE
    p.alignment = PP_ALIGN.CENTER


def add_cover_slide(prs, title, subtitle):
    """表紙スライド（モダンデザイン）"""
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    add_common_elements(slide, 1)

    # タイトル（中央、ティール色）
    title_box = slide.shapes.add_textbox(
        Cm(5), Cm(9), Cm(40), Cm(3)
    )
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = title
    p.font.size = Pt(44)
    p.font.bold = True
    p.font.color.rgb = PRIMARY_COLOR
    p.alignment = PP_ALIGN.CENTER

    # タイトル下の水色アクセントライン
    line = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE,
        Cm(10), Cm(12.5), Cm(30), Cm(0.12)
    )
    line.fill.solid()
    line.fill.fore_color.rgb = LIGHT_BLUE
    line.line.fill.background()

    # サブタイトル
    sub_box = slide.shapes.add_textbox(
        Cm(5), Cm(13.5), Cm(40), Cm(2)
    )
    tf = sub_box.text_frame
    p = tf.paragraphs[0]
    p.text = subtitle
    p.font.size = Pt(18)
    p.font.color.rgb = TEXT_COLOR
    p.alignment = PP_ALIGN.CENTER

    # 会社名（中央下）
    company_box = slide.shapes.add_textbox(
        Cm(5), Cm(18), Cm(40), Cm(4)
    )
    tf = company_box.text_frame
    p = tf.paragraphs[0]
    p.text = "大野公認会計士・税理士事務所"
    p.font.size = Pt(18)
    p.font.color.rgb = TEXT_COLOR
    p.alignment = PP_ALIGN.CENTER

    p2 = tf.add_paragraph()
    p2.text = "（株）アルマ"
    p2.font.size = Pt(18)
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
    """目次スライド（モダンカードデザイン）"""
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    add_common_elements(slide, 2)

    # タイトル
    title_box = slide.shapes.add_textbox(
        Cm(3), Cm(2), Cm(44), Cm(2.5)
    )
    tf = title_box.text_frame
    p = tf.paragraphs[0]
    p.text = "本日お話しすること"
    p.font.size = Pt(32)
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
