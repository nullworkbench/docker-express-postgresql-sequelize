# ベースイメージ
FROM node:14.15.4

# 作業ディレクトリ
WORKDIR /usr/src/app

# packages.jsonを個別にコピーする理由は後述
COPY /app/package*.json ./
RUN npm install

# その他のファイル群もコンテナへコピー
COPY /app ./

EXPOSE 5000

# サーバースタート
CMD ["npm", "start"]