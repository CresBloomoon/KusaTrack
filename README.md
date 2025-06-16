# KusaTrack

筋トレ習慣を可視化するシンプルなアプリケーションです。GitHubの草のようなヒートマップで、あなたの筋トレ習慣を視覚的に楽しむことができます。

## 機能

- 1クリックで筋トレの記録
- 365日分のヒートマップ表示
- シンプルで直感的なUI
- Firebase Firestoreによるデータ永続化

## 技術スタック

- React
- TypeScript
- Firebase Firestore
- react-calendar-heatmap
- Docker

## セットアップ

### 1. Firebaseプロジェクトの設定

1. [Firebase Console](https://console.firebase.google.com/)にアクセス
2. 「プロジェクトを追加」をクリック
3. プロジェクト名を入力（例：`KusaTrack`）して「続行」
4. Googleアナリティクスの設定は任意で「続行」
5. プロジェクトの作成が完了したら「続行」をクリック

#### Webアプリケーションの追加

1. プロジェクトのダッシュボードで「</>」（Web）アイコンをクリック
2. アプリのニックネームを入力（例：`KusaTrack Web`）
3. 「アプリを登録」をクリック
4. 表示される設定情報（firebaseConfig）をコピー

#### Firestoreの設定

1. 左メニューの「Firestore Database」をクリック
2. 「データベースの作成」をクリック
3. 「本番環境で開始」を選択
4. リージョンを選択（例：`asia-northeast1`）
5. 「次へ」をクリック

### 2. 環境変数の設定

1. プロジェクトのルートディレクトリに`.env`ファイルを作成
2. 以下の形式でFirebaseの設定情報を入力：

```bash
REACT_APP_FIREBASE_API_KEY=あなたのAPIキー
REACT_APP_FIREBASE_AUTH_DOMAIN=あなたのプロジェクトID.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=あなたのプロジェクトID
REACT_APP_FIREBASE_STORAGE_BUCKET=あなたのプロジェクトID.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=あなたのSender ID
REACT_APP_FIREBASE_APP_ID=あなたのApp ID
```

### 3. アプリケーションの起動

1. Dockerコンテナのビルドと起動
```bash
docker-compose up --build
```

2. ブラウザでアクセス
```
http://localhost:3000
```

## プロジェクト構造

```
KusaTrack/
├── src/
│   ├── domain/          # ドメインモデルとインターフェース
│   ├── infrastructure/  # Firebase関連の実装
│   ├── application/     # ユースケース
│   └── presentation/    # Reactコンポーネント
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## 注意事項

- `.env`ファイルはGitにコミットしないでください
- Firebaseの設定情報は機密情報として扱い、適切に管理してください
- 本番環境では適切なセキュリティルールを設定してください

## ライセンス

MIT 