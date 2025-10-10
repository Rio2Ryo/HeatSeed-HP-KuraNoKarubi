# 蔵のカルビ - 公式ホームページ

焼肉店「蔵のカルビ」の公式ホームページです。

## 技術スタック

- **React 18** - UIライブラリ
- **Vite** - 高速ビルドツール
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **Framer Motion** - アニメーションライブラリ
- **React Hook Form** - フォーム管理

## セットアップ

### 依存パッケージのインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) が自動で開きます。

### 本番ビルド

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### ビルドのプレビュー

```bash
npm run preview
```

## プロジェクト構成

```
src/
├── components/         # Reactコンポーネント
│   ├── Header.jsx     # ヘッダー（ナビゲーション）
│   ├── Hero.jsx       # メインビジュアル
│   ├── Features.jsx   # 特徴セクション
│   ├── Menu.jsx       # メニューセクション
│   ├── About.jsx      # 会社概要セクション
│   ├── Access.jsx     # アクセスセクション
│   ├── Contact.jsx    # お問い合わせフォーム
│   └── Footer.jsx     # フッター
├── App.jsx            # メインアプリケーション
├── main.jsx           # エントリーポイント
└── index.css          # グローバルスタイル
```

## 主な機能

- スムーススクロール
- レスポンシブデザイン（モバイル対応）
- スクロール時のフェードインアニメーション
- ホバーエフェクト
- お問い合わせフォームのバリデーション
- Googleマップ埋め込み

## カスタマイズ方法

### カラーテーマの変更

`tailwind.config.js` の `theme.extend.colors` で色を変更できます。

### コンテンツの編集

各コンポーネントファイル内のテキストや画像URLを編集してください。

### 画像の追加

`public/` ディレクトリに画像を配置し、コンポーネントから参照してください。
