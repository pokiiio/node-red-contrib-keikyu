# node-red-contrib-keikyu
Node-RED node for KEIKYU.

京浜急行の運行情報を取得するためのNode-REDノードです。

## Install 
ご利用になられる環境に応じて、インストールを行ってください。

```
cd ~/.node-red
npm install node-red-contrib-keikyu
```

[ノードライブラリ](https://flows.nodered.org/)からもインストール可能です。

## Usage
ノードが発火すると、ノード内部で[京急の運行情報ページ](https://unkou.keikyu.co.jp/)を取得し、運行情報のパースを行います。パースされた文字列が出力され、 `msg.payload`に格納され次のノードに渡されます。何らかの理由で情報が取得できないときは、`msg.payload`に`null`が格納されます。
