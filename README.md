## サーバー起動, データを取得
```
npm run start
```

## URL指定
-　index.js
```
const URL = "ページのURL";
```

## 取得するデータの指定
-　index.js
```
$(".クラス名", htmlParser).each(function () {
    const title = $(this).find(".クラス名").text();
    const price = $(this).find(".クラス名").text();
    data.push({ title, price });
    console.log(data);
  });
```
