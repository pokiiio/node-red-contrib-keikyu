module.exports = function (RED) {
    function KeikyuNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var request = require('request-promise');

        node.on('input', function (msg) {
            request('https://unkou.keikyu.co.jp/')
                .then(function (response) {
                    var info = response;

                    info = info.split('<a href="https://unkou.keikyu.co.jp/" target=_blank>')[1];
                    info = info.split('</a>')[0];
                    info = info.split('<br/>').join('');
                    info = info.split('\n').join('');

                    msg.payload = info;
                    node.send(msg);
                })
                .catch(function (error) {
                    msg.payload = null;
                    node.send(msg);
                });
        });
    }
    RED.nodes.registerType("keikyu", KeikyuNode);
}