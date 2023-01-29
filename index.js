// サーバーのポート番号を指定
const PORT = 8000;

// expressをインポート
const express = require("express");

const app = express();

app.listen(PORT, console.log("サーバーが起動しました"));
