# CTA & フッター グラデーション統合ガイド

## 概要
CTAセクションからフッターまで美しいグラデーションが繋がるデザインに変更しました。

## HTML構造の変更が必要

### 変更前
```html
<!-- CTA -->
<section class="cta" id="contact">
    <div class="cta-content">
        <h2>今すぐ無料お見積り</h2>
        <!-- ... -->
    </div>
</section>

<!-- フッター -->
<footer>
    <div class="footer-content">
        <!-- ... -->
    </div>
</footer>
```

### 変更後（必須）
```html
<!-- CTA & Footer を統合ラッパーで囲む -->
<div class="cta-footer-wrapper">
    <!-- CTA -->
    <section class="cta" id="contact">
        <div class="cta-content">
            <h2>今すぐ無料お見積り</h2>
            <p>お気軽にお問い合わせください</p>
            <div class="cta-buttons">
                <a href="tel:0434683205" class="cta-btn">
                    <span>📞</span>
                    <span>今すぐ電話する</span>
                </a>
                <a href="mailto:shenwusongxia48@gmail.com" class="cta-btn">
                    <span>✉️</span>
                    <span>メールで問い合わせ</span>
                </a>
            </div>
        </div>
    </section>

    <!-- フッター -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>Asahi Cleaning Sydney</h3>
                <p>日本の心で極上の清潔を。</p>
            </div>
            <!-- その他のフッターコンテンツ -->
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Asahi Cleaning.</p>
        </div>
    </footer>
</div>
```

## 重要なポイント

### 1. ラッパーdivで囲む
`<div class="cta-footer-wrapper">` で CTA と Footer の両方を囲む必要があります。

### 2. グラデーションの流れ
- **上部（CTA）**: 明るい青 (#0066cc → #4da6ff)
- **中間**: 徐々に暗く (#2d5f8d → #1e3a5f)
- **下部（Footer）**: ダークブルー (#16213e → #1a1a2e)

### 3. 視覚効果
- 7段階のグラデーション
- 3つの放射状ハイライト
- シマーアニメーション（10秒ループ）
- 統一された影

## 更新が必要なファイル

### メインページ
- `/ja/index.html`
- `/en/index.html`

### サブページ（CTAとフッターがある全ページ）
- `/ja/services/*.html`
- `/ja/about/*.html`
- `/ja/service-areas/*.html`
- その他全てのページ

## 更新手順

1. **CTA セクションを見つける**
   ```html
   <section class="cta" id="contact">
   ```

2. **その直前に開始タグを追加**
   ```html
   <div class="cta-footer-wrapper">
   <section class="cta" id="contact">
   ```

3. **Footer の終了タグの直後に閉じタグを追加**
   ```html
   </footer>
   </div> <!-- .cta-footer-wrapper -->
   ```

## デザインの特徴

### グラデーション
```css
linear-gradient(
    180deg,
    #0066cc 0%,    /* 明るい青 */
    #0080cc 15%,
    #4da6ff 30%,
    #2d5f8d 50%,   /* 中間色 */
    #1e3a5f 65%,
    #16213e 80%,
    #1a1a2e 100%   /* ダークブルー */
)
```

### エフェクト
- **放射状グラデーション**: 3箇所に光の玉
- **シマーアニメーション**: 斜めに流れる光
- **多層シャドウ**: 上下の深みのある影
- **区切り線**: CTA と Footer の間に半透明ライン

### レスポンシブ
- **デスクトップ**: border-radius: 40px
- **タブレット**: border-radius: 30px
- **モバイル**: border-radius: 20px

## 確認方法

1. ブラウザでページを開く
2. CTAセクションからフッターまでスクロール
3. 明るい青から暗い青へのスムーズなグラデーションを確認
4. 光のエフェクトとアニメーションを確認

## トラブルシューティング

### グラデーションが表示されない
→ ラッパーdivで正しく囲まれているか確認

### 区切りが見える
→ CTA と Footer の間に余計な margin や padding がないか確認

### 影が二重になる
→ CTA と Footer 自体に box-shadow が残っていないか確認

## 完成イメージ

```
┌─────────────────────┐
│                     │
│    CTA Section      │ ← 明るい青
│                     │
├─────────────────────┤ ← シームレスな繋がり
│                     │
│   Footer Section    │ ← ダークブルー
│                     │
└─────────────────────┘
```

美しいグラデーションで高級感を演出します！
