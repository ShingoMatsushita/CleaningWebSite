# CleaningWebSite

## Notion API連携のセットアップ

フォームの入力内容をNotionデータベースに保存する機能を実装しています。

### 1. Notion Integrationの作成

1. [Notion Integrations](https://www.notion.so/my-integrations) にアクセス
2. 「+ New integration」をクリック
3. 以下の情報を入力：
   - **Name**: Asahi Cleaning Form
   - **Associated workspace**: 使用するワークスペースを選択
4. 「Submit」をクリック
5. **Internal Integration Token** をコピー（`secret_` で始まる文字列）

### 2. Notionデータベースの作成

1. Notionで新しいデータベースを作成
2. 以下のプロパティを追加：

| プロパティ名 | タイプ | 必須 |
|------------|--------|------|
| Name | Title | ✓ |
| Email | Email | ✓ |
| Phone | Phone Number | - |
| Service | Select | ✓ |
| Message | Rich Text | - |
| Submitted At | Date | - |
| Status | Select | - |

**Service の選択肢:**
- Airbnb清掃
- 高級住宅清掃
- オフィス清掃
- ディープクリーニング
- 定期清掃プラン
- その他

**Status の選択肢:**
- New
- In Progress
- Completed

3. データベースをIntegrationに接続：
   - データベースページの右上の「...」メニューをクリック
   - 「Connections」→ 作成したIntegrationを選択

4. データベースIDを取得：
   - データベースのURLから取得
   - 例: `https://www.notion.so/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=...`
   - `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx` の部分がデータベースID

### 3. 環境変数の設定

#### Vercelでデプロイする場合

1. Vercelプロジェクトの設定画面に移動
2. 「Settings」→「Environment Variables」を開く
3. 以下の環境変数を追加：

```
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### ローカル開発環境の場合

プロジェクトルートに `.env.local` ファイルを作成：

```env
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. デプロイ

Vercelにデプロイすると、`/api/submit-form` エンドポイントが自動的に利用可能になります。

### トラブルシューティング

- **401 Unauthorized**: Notion APIキーが正しく設定されているか確認
- **404 Not Found**: データベースIDが正しいか、Integrationがデータベースに接続されているか確認
- **400 Bad Request**: データベースのプロパティ名が上記の表と一致しているか確認

### 参考リンク

- [Notion API Documentation](https://developers.notion.com/reference)
- [Vercel Functions Documentation](https://vercel.com/docs/functions)
