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

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/KusaTrack.git
cd KusaTrack
```

2. 環境変数の設定
```bash
cp .env.example .env
```
`.env`ファイルにFirebaseの設定情報を入力してください。

3. Dockerコンテナの起動
```bash
docker-compose up --build
```

4. ブラウザでアクセス
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

## ライセンス

MIT 