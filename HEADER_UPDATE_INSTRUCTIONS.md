# ヘッダー更新手順 / Header Update Instructions

## 概要
すべてのページで統一されたヘッダーを使用するために、共有ヘッダーシステムを導入しました。

## 更新済みページ
- ✅ `/ja/index.html`
- ✅ `/en/index.html`
- ✅ `/ja/services/airbnb-cleaning.html`

## 他のページの更新方法

各HTMLファイルを以下の手順で更新してください：

### 1. ヘッダー部分を置き換え

**変更前：**
```html
<header id="header">
    <nav>
        <!-- 長いナビゲーションコード -->
    </nav>
</header>
```

**変更後：**
```html
<!-- ヘッダー（自動生成） -->
<header id="header"></header>
```

### 2. スクリプトを追加

`</body>` タグの直前に、以下のスクリプトを追加：

```html
<script src="../../header-nav.js"></script>
<script src="../../script.js"></script>
</body>
</html>
```

**注意：** `../../` の部分は、ファイルの階層に応じて調整してください：
- ルートディレクトリ: `header-nav.js`
- 1階層下（ja/, en/）: `../header-nav.js`
- 2階層下（ja/services/, ja/about/）: `../../header-nav.js`
- 3階層下: `../../../header-nav.js`

### 3. CSSの確認

`style.css` へのパスも確認してください：
```html
<link rel="stylesheet" href="../../style.css">
```

## システムの仕組み

1. **header-nav.js** が自動的に：
   - 現在のページのパス（ja/ または en/）から言語を判定
   - 適切なヘッダーHTMLを生成
   - ドロップダウンメニューを初期化
   - モバイルメニューを初期化

2. **script.js** が以下を初期化：
   - スクロールエフェクト
   - アニメーション
   - その他のページ機能

## 利点

✅ **一元管理**: ヘッダーを1箇所（header-nav.js）で管理
✅ **自動更新**: header-nav.jsを更新すると、全ページに反映
✅ **多言語対応**: 自動的に日本語/英語を判定
✅ **パス自動調整**: ページの階層に応じてリンクを自動調整

## 更新が必要なページ一覧

### 日本語ページ（ja/）
- [ ] `/ja/contact/index.html`
- [ ] `/ja/tools/index.html`
- [ ] `/ja/service-areas/index.html`
- [ ] `/ja/service-areas/bondi-beach.html`
- [ ] `/ja/service-areas/palm-beach.html`
- [ ] `/ja/service-areas/manly.html`
- [ ] `/ja/service-areas/mosman.html`
- [ ] `/ja/about/cleaning-process.html`
- [ ] `/ja/about/features.html`
- [ ] `/ja/about/FAQ.html`
- [ ] `/ja/blog/index.html`
- [ ] `/ja/services/regular-cleaning-plan.html`
- [ ] `/ja/services/japanese-style-styling.html`
- [ ] `/ja/services/deep-cleaning.html`
- [ ] `/ja/services/luxury-residential-cleaning.html`
- [ ] `/ja/services/office-cleaning.html`

### 英語ページ（en/）
- 必要に応じて同様に更新

## トラブルシューティング

### ヘッダーが表示されない
- `header-nav.js` のパスが正しいか確認
- ブラウザのコンソールでエラーをチェック

### リンクが正しく動作しない
- 階層に応じた相対パス（`../`, `../../`）を確認

### ドロップダウンメニューが動作しない
- `script.js` が `header-nav.js` の後に読み込まれているか確認
- `style.css` が正しく読み込まれているか確認

## サポート

問題が発生した場合は、更新済みのページ（`ja/index.html`, `ja/services/airbnb-cleaning.html`）を参考にしてください。
