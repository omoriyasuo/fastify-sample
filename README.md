# fastify-sample

## 環境

```
$ node -v
14.17.2

$ npm -v
6.14.13
```

## サーバー起動

```
$ npm run dev
```

## ディレクトリ構成

```
src/
  - server.ts
    - EntryPoint
  - config/
    - 環境変数
  - controllers/
    - リクエストを受ける場所
  - interfaces/
  - lib/
    - サードパーティライブラリ
  - loaders/
    - 起動時プロセスなどをまとめておく場所
    - server.tsで読み込む
  - models/
    - DBのモデル
    - Validationとか
  - routes/
  - services/
    - ビジネスロジックはここに入れる
```
