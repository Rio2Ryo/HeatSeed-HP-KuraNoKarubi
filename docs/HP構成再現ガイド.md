# HP構成再現ガイド

このドキュメントは、現在のHP構成を他の店舗（例：ドーナツ店）でも再現するための詳細な手順書です。店舗固有の情報ではなく、**HPの構造と技術的な実装方法**に焦点を当てています。

---

## 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [技術スタック](#技術スタック)
3. [セットアップ手順](#セットアップ手順)
4. [プロジェクト構造](#プロジェクト構造)
5. [各コンポーネント詳細](#各コンポーネント詳細)
6. [スタイリングシステム](#スタイリングシステム)
7. [動画実装ガイド](#動画実装ガイド)
8. [カスタマイズポイント](#カスタマイズポイント)

---

## プロジェクト概要

### 特徴
- **React + Vite** を使用したSPA（Single Page Application）
- **Tailwind CSS** によるレスポンシブデザイン
- **Framer Motion** によるアニメーション
- **レスポンシブ動画**対応（PC/スマホで異なる動画を表示）
- **固定ヘッダー**によるスムーズスクロールナビゲーション

### セクション構成
1. Header（固定ヘッダー）
2. Hero（メインビジュアル・動画背景）
3. Features（特徴）
4. Menu（メニュー）
5. About（こだわり・ストーリー）
6. Rooms（お部屋・空間）
7. Reviews（お客様の声）
8. Access（アクセス・地図）
9. Footer（フッター・予約・SNS）

---

## 技術スタック

### コアライブラリ
- **React**: `^18.3.1` - UI構築
- **React DOM**: `^18.3.1` - DOM操作
- **Vite**: `^6.0.5` - ビルドツール・開発サーバー

### UI/アニメーション
- **Framer Motion**: `^11.11.17` - アニメーション
- **Tailwind CSS**: `^3.4.17` - スタイリング

### 開発ツール
- **ESLint**: `^9.17.0` - コード品質チェック
- **PostCSS**: `^8.4.49` - CSS処理
- **Autoprefixer**: `^10.4.20` - ベンダープレフィックス自動付与

### フォント
- **Google Fonts**: Noto Serif JP（日本語セリフ体）

---

## セットアップ手順

### 1. プロジェクト初期化

```bash
# ViteでReactプロジェクトを作成
npm create vite@latest [プロジェクト名] -- --template react

# プロジェクトディレクトリに移動
cd [プロジェクト名]

# 依存関係をインストール
npm install
```

### 2. 必要なパッケージのインストール

```bash
# コア依存関係
npm install react react-dom framer-motion

# 開発依存関係
npm install -D tailwindcss postcss autoprefixer @vitejs/plugin-react

# ESLint関連
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh globals
```

### 3. Tailwind CSSの初期化

```bash
# Tailwind設定ファイルを生成
npx tailwindcss init -p
```

これにより以下が生成されます：
- `tailwind.config.js`
- `postcss.config.js`

### 4. プロジェクト構造の作成

```
[プロジェクト名]/
├── public/
│   └── media/          # 画像・動画ファイル
├── src/
│   ├── components/     # Reactコンポーネント
│   ├── App.jsx         # メインアプリコンポーネント
│   ├── main.jsx        # エントリーポイント
│   └── index.css       # グローバルスタイル
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## プロジェクト構造

### ディレクトリ構造

```
[プロジェクト名]/
├── public/
│   └── media/
│       ├── [動画ファイル]
│       │   ├── top-page-yoko.mp4    # PC用横動画
│       │   └── top-page-tate.mp4     # スマホ用縦動画
│       └── [画像ファイル]
│           ├── [商品画像].jpg
│           ├── [店舗写真].jpg
│           └── ...
│
├── src/
│   ├── components/
│   │   ├── Header.jsx      # 固定ヘッダー
│   │   ├── Hero.jsx        # メインビジュアル
│   │   ├── Features.jsx    # 特徴セクション
│   │   ├── Menu.jsx        # メニューセクション
│   │   ├── About.jsx       # こだわりセクション
│   │   ├── Rooms.jsx       # お部屋セクション
│   │   ├── Reviews.jsx     # お客様の声セクション
│   │   ├── Access.jsx       # アクセスセクション
│   │   └── Footer.jsx      # フッター
│   │
│   ├── App.jsx             # メインコンポーネント
│   ├── main.jsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
│
├── index.html              # HTMLテンプレート
├── package.json            # 依存関係
├── vite.config.js          # Vite設定
├── tailwind.config.js      # Tailwind設定
└── postcss.config.js       # PostCSS設定
```

---

## 各コンポーネント詳細

### 1. App.jsx（メインコンポーネント）

**役割**: 全セクションを統合するルートコンポーネント

**構造**:
```jsx
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
// ... 他のコンポーネント

function App() {
  return (
    <div className="App overflow-x-hidden w-full">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <About />
      <Rooms />
      <Reviews />
      <Access />
      <Footer />
    </div>
  )
}
```

**ポイント**:
- `overflow-x-hidden` で横スクロールを防止
- コンポーネントの順序がページの流れを決定

---

### 2. Header.jsx（固定ヘッダー）

**役割**: ページ上部に固定されるナビゲーションヘッダー

**主要機能**:
- スクロール時の背景色変更（透明→白）
- スムーズスクロールで各セクションへ移動
- レスポンシブ対応（PC: 横並びナビ、スマホ: ハンバーガーメニュー）

**ブレークポイント**: `md` (768px)

**実装ポイント**:
```jsx
// スクロール検知
const [isScrolled, setIsScrolled] = useState(false)
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

// セクションへのスクロール
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
```

**カスタマイズポイント**:
- ナビゲーション項目の配列 `navItems`
- ロゴテキスト
- 背景色の変更条件（`window.scrollY > 50`）

---

### 3. Hero.jsx（メインビジュアル）

**役割**: ページトップの印象的なビジュアルセクション

**主要機能**:
- **レスポンシブ動画背景**: PC/スマホで異なる動画を表示
- 動画の上にテキストとグラデーションオーバーレイ
- Framer Motionによるフェードインアニメーション

**レスポンシブ動画の実装**:
```jsx
const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768) // md breakpoint
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
  return () => window.removeEventListener('resize', checkMobile)
}, [])

const videoSource = isMobile 
  ? '/media/top-page-tate.mp4'  // 縦動画
  : '/media/top-page-yoko.mp4'  // 横動画
```

**動画要素の設定**:
```jsx
<video
  key={videoSource}  // 動画切り替え時に再マウント
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"  // メタデータのみ先読み
  className="absolute inset-0 w-full h-full object-cover opacity-80"
>
  <source src={videoSource} type="video/mp4" />
</video>
```

**カスタマイズポイント**:
- メインタイトルテキスト
- サブタイトルテキスト
- 動画ファイル名
- グラデーションオーバーレイの色

---

### 4. Features.jsx（特徴セクション）

**役割**: 店舗の特徴を3つのカードで紹介

**構造**:
- タイトルセクション（中央揃え）
- 3列グリッドレイアウト（PC）/ 1列（スマホ）
- 各カードにFramer Motionアニメーション

**データ構造**:
```jsx
const features = [
  {
    title: '特徴1のタイトル',
    description: '特徴1の説明文...',
  },
  {
    title: '特徴2のタイトル',
    description: '特徴2の説明文...',
  },
  {
    title: '特徴3のタイトル',
    description: '特徴3の説明文...',
  },
]
```

**カスタマイズポイント**:
- セクションタイトル
- 特徴の数（3つ以外も可）
- 背景色（`bg-black`など）

---

### 5. Menu.jsx（メニューセクション）

**役割**: 商品・メニューを紹介

**構造**:
- タイトルセクション
- 各メニュー項目を交互に左右配置（PC）
- 画像 + 説明 + 価格

**データ構造**:
```jsx
const menuItems = [
  {
    name: 'メニュー名',
    description: 'メニューの説明文...',
    price: '¥1,000 ～（税込）',
    image: '/media/[画像ファイル].jpg',
  },
  // ...
]
```

**レイアウト**:
```jsx
// 交互に左右配置
{menuItems.map((item, index) => (
  <MenuItem
    key={index}
    {...item}
    isReversed={index % 2 !== 0}  // 偶数番目は左、奇数番目は右
    index={index}
  />
))}
```

**カスタマイズポイント**:
- メニュー項目の数
- 画像ファイル
- 価格表示形式
- 背景色（`bg-luxury-darkGray`など）

---

### 6. About.jsx（こだわりセクション）

**役割**: 店舗のストーリーやこだわりを紹介

**構造**:
- タイトルセクション
- メインコンテンツ（画像 + 説明文）
- 複数のこだわりカード（交互に左右配置）

**データ構造**:
```jsx
// こだわりカード
const kodawariItems = [
  {
    title: 'こだわり1のタイトル',
    description: 'こだわり1の説明文...',
    image: '/media/[画像ファイル].jpg',
  },
  // ...
]
```

**カスタマイズポイント**:
- 店舗名
- 説明文
- 背景色（`backgroundColor: '#f6efe8'`など）
- こだわり項目の数

---

### 7. Rooms.jsx（お部屋セクション）

**役割**: 空間・お部屋の特徴を紹介

**構造**:
- タイトルセクション
- 各お部屋を交互に左右配置
- 画像 + 説明

**データ構造**:
```jsx
const rooms = [
  {
    name: 'お部屋名',
    capacity: '定員: 4名様',
    description: 'お部屋の説明文...',
    image: '/media/[画像ファイル].jpg',
  },
  // ...
]
```

**カスタマイズポイント**:
- お部屋の数
- 定員情報
- 背景色（`bg-gray-50`など）

---

### 8. Reviews.jsx（お客様の声セクション）

**役割**: Googleマップレビューなどを表示

**構造**:
- タイトルセクション
- 3列グリッドレイアウト（PC）/ 1列（スマホ）
- レビューカード（名前、評価、コメント）

**データ構造**:
```jsx
const reviews = [
  {
    name: 'お客様A',
    rating: 5,  // 1-5の星評価
    comment: 'レビュー本文...',
    avatar: null,  // Googleマップのアバター画像URL（オプション）
    iconLabel: 'A',  // アイコンに表示する文字
  },
  // ...
]
```

**アイコン表示**:
```jsx
// アバター画像がある場合
{avatar && !imageError ? (
  <img src={avatar} alt={name} />
) : (
  // デフォルトアイコン（iconLabelを表示）
  <div className="...">
    {iconLabel || name.charAt(0)}
  </div>
)}
```

**カスタマイズポイント**:
- レビュー数
- 星評価の色（`text-yellow-400`）
- 背景色（`bg-white`など）

---

### 9. Access.jsx（アクセスセクション）

**役割**: 店舗情報とアクセス情報を表示

**構造**:
- タイトルセクション
- 左側: Google Maps埋め込み
- 右側: 店舗情報（住所、電話、営業時間など）

**Google Maps埋め込み**:
```jsx
<iframe
  src="[Google Maps埋め込みURL]"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

**店舗情報の構造**:
```jsx
<div>
  <h4>住所</h4>
  <p>〒123-4567</p>
  <p>都道府県 市区町村 番地</p>
  
  <h4>電話番号・FAX</h4>
  <p>TEL: 000-0000-0000</p>
  <p>FAX: 000-0000-0000</p>
  
  <h4>営業時間</h4>
  <p>月～日 ディナー 17:00～24:00</p>
  
  <h4>定休日</h4>
  <p>第1月曜日～木曜日</p>
  
  <h4>アクセス</h4>
  <p>路線名 駅名 徒歩○分</p>
  
  <h4>駐車場</h4>
  <p>有（○台）</p>
</div>
```

**カスタマイズポイント**:
- Google Maps埋め込みURL
- 店舗情報の項目
- 背景色（`bg-white`など）

---

### 10. Footer.jsx（フッター）

**役割**: 予約ボタン、店舗情報、SNSリンクを表示

**構造**:
- 予約ボタンセクション（電話、食べログ、ぐるなびなど）
- 3列グリッド（ロゴ、店舗情報、営業時間）
- Instagramリンク（目立つボタンとして配置）
- コピーライト

**予約ボタン**:
```jsx
<a
  href="tel:000-0000-0000"
  className="... ゴールドグラデーションボタン"
>
  電話で予約
</a>
```

**Instagramリンク**:
```jsx
<a
  href="https://www.instagram.com/[アカウント名]/"
  target="_blank"
  rel="noopener noreferrer"
  className="... ゴールドグラデーションボタン"
>
  <svg>...</svg>  {/* Instagramアイコン */}
  Instagramでフォロー
</a>
```

**カスタマイズポイント**:
- 予約ボタンの種類とリンク
- InstagramアカウントURL
- 店舗情報
- 背景色（`bg-luxury-black`など）

---

## スタイリングシステム

### Tailwind CSS設定（tailwind.config.js）

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Serif JP', 'serif'],
      },
      colors: {
        // カスタムカラーを定義
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        luxury: {
          black: '#0A0A0A',
          darkGray: '#1A1A1A',
          gray: '#2A2A2A',
        },
      },
    },
  },
  plugins: [],
}
```

### グローバルスタイル（index.css）

#### 基本リセット
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
  width: 100%;
}

body {
  font-family: 'Noto Serif JP', serif;
  overflow-x: hidden;
  width: 100%;
  position: relative;
}
```

#### ユーティリティクラス
```css
@layer utilities {
  /* セクション共通パディング */
  .section-padding {
    @apply py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-12 lg:px-24;
  }

  /* コンテナ共通設定 */
  .container-custom {
    @apply max-w-7xl mx-auto w-full;
  }

  /* 金色グラデーションテキスト */
  .text-gradient-gold {
    background: linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* より強い金色グラデーション */
  .text-gradient-gold-rich {
    background: linear-gradient(135deg, #FFF4D6 0%, #FFD700 20%, #D4AF37 60%, #8B6914 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

### ブレークポイント

Tailwind CSSの標準ブレークポイント:
- `sm`: 640px
- `md`: 768px（ヘッダーと動画の切り替えポイント）
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 動画実装ガイド

### 動画ファイルの準備

1. **PC用横動画**: `top-page-yoko.mp4`
   - 推奨解像度: 1920x1080
   - 推奨ファイルサイズ: 2-5MB
   - アスペクト比: 16:9

2. **スマホ用縦動画**: `top-page-tate.mp4`
   - 推奨解像度: 1080x1920
   - 推奨ファイルサイズ: 2-5MB
   - アスペクト比: 9:16

### 動画最適化ツール

#### HandBrake（推奨）
1. 動画ファイルを開く
2. プリセット: "Web - Fast 1080p30" を選択
3. ビットレート: 1500-2000 kbps
4. フレームレート: 30fps
5. エンコード実行

#### FFmpeg（コマンドライン）
```bash
# PC用横動画
ffmpeg -i input.mp4 -vf scale=1920:1080 -b:v 2M -r 30 top-page-yoko.mp4

# スマホ用縦動画
ffmpeg -i input.mp4 -vf scale=1080:1920 -b:v 2M -r 30 top-page-tate.mp4
```

### 動画の配置

```
public/
└── media/
    ├── top-page-yoko.mp4
    └── top-page-tate.mp4
```

### 実装コード

詳細は [Hero.jsx](#3-herojsxメインビジュアル) セクションを参照

---

## カスタマイズポイント

### 1. カラースキーム

**現在のカラー**:
- ゴールド系: `#FFD700`, `#D4AF37`, `#B8860B`
- ダーク系: `#0A0A0A`, `#1A1A1A`

**ドーナツ店など別業種での変更例**:
```javascript
// tailwind.config.js
colors: {
  primary: {
    light: '#FF6B9D',  // ピンク
    DEFAULT: '#FF1493',
    dark: '#C71585',
  },
}
```

### 2. フォント

**現在**: Noto Serif JP（セリフ体）

**変更方法**:
```html
<!-- index.html -->
<link href="https://fonts.googleapis.com/css2?family=[フォント名]&display=swap" rel="stylesheet">
```

```css
/* index.css */
body {
  font-family: '[フォント名]', sans-serif;
}
```

### 3. セクションの順序

`App.jsx`でコンポーネントの順序を変更:
```jsx
function App() {
  return (
    <div className="App overflow-x-hidden w-full">
      <Header />
      <Hero />
      <Menu />      {/* 先に表示 */}
      <Features />  {/* 後に表示 */}
      {/* ... */}
    </div>
  )
}
```

### 4. セクションの追加・削除

**追加**:
1. `src/components/NewSection.jsx`を作成
2. `App.jsx`にインポート・追加

**削除**:
1. `App.jsx`から該当コンポーネントを削除
2. 必要に応じてファイルも削除

### 5. アニメーション設定

**Framer Motionの基本パターン**:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  {/* コンテンツ */}
</motion.div>
```

**カスタマイズ**:
- `duration`: アニメーション時間
- `delay`: 遅延時間
- `y`: 縦方向の移動距離
- `x`: 横方向の移動距離

---

## デプロイ準備

### ビルドコマンド

```bash
npm run build
```

### 出力先

`dist/` ディレクトリに静的ファイルが生成されます

### デプロイ先

- **Netlify**: `dist`フォルダをアップロード
- **Vercel**: GitHubリポジトリを接続
- **その他**: `dist`フォルダの内容をサーバーにアップロード

---

## トラブルシューティング

### 動画が表示されない
- ファイルパスが正しいか確認（`/media/`で始まる）
- ファイルサイズが大きすぎないか確認
- ブラウザのコンソールでエラーを確認

### アニメーションが動作しない
- Framer Motionが正しくインストールされているか確認
- `viewport={{ once: true }}`が設定されているか確認

### レスポンシブが効かない
- Tailwind CSSのクラスが正しく適用されているか確認
- ブラウザの開発者ツールでブレークポイントを確認

---

## まとめ

このドキュメントで、HPの基本構造と実装方法を理解できました。新しい店舗（ドーナツ店など）で再現する際は：

1. **セットアップ**: プロジェクト初期化とパッケージインストール
2. **構造作成**: コンポーネントファイルとディレクトリ構造
3. **カスタマイズ**: 店舗固有の情報（テキスト、画像、色）に置き換え
4. **テスト**: レスポンシブデザインとアニメーションの確認
5. **デプロイ**: ビルドして本番環境に公開

各セクションは独立しているため、必要なものだけを選択して使用することも可能です。

---

**作成日**: 2025年1月
**バージョン**: 1.0.0




