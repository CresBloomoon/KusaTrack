FROM node:18-alpine

WORKDIR /app

# 開発用の依存関係をインストール
RUN npm install -g create-react-app

# プロジェクトの初期化
RUN create-react-app . --template typescript

# 必要なパッケージをインストール
RUN npm install \
    firebase \
    react-calendar-heatmap \
    @types/react-calendar-heatmap \
    date-fns

# 開発サーバーを起動
CMD ["npm", "start"] 