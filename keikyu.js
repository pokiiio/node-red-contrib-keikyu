module.exports = function (RED) {
    function KeikyuNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var request = require('request-promise');

        node.on('input', function (msg) {
            request('https://unkou.keikyu.co.jp/')
                .then(function (response) {
                    var info = response;

                    info = info.split('<div class=unko-panel>')[1];
                    info = info.split('</div>')[0];
                    info = info.trim();

                    msg.payload = info;
                    node.send(msg);
                })
                .catch(function (error) {
                    node.send(msg);
                });
        });
    }
    RED.nodes.registerType("keikyu", KeikyuNode);
}