// サーバーのポート番号を指定
const PORT = 8000;

// expressをインポート
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();

const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";
const data = [];

axios(URL).then((response) => {
  const htmlParser = response.data;

  const $ = cheerio.load(htmlParser);
  $(".searchresultitem", htmlParser).each(function () {
    const title = $(this).find(".title").text();
    const price = $(this).find(".price--OX_YW").text();
    data.push({ title, price });
    console.log(data);
  });
}).catch((error) => console.log(error));

app.listen(PORT, console.log("サーバーが起動しました"));
