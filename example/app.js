(function () {
    'use strict';
    var module = require('net.imthinker.ti.textnormalizer');

    var win = Ti.UI.createWindow({
        title: 'Normalizer Sample',
        backgroundColor: '#FFFFFF',
        layout: 'vertical'
    });

    var text = 'ガオガイガー';
    var base = Ti.UI.createLabel({
        text: 'BASE : ' + text,
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: '#000000',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: { fontSize: '24sp' }
    });
    var nfc = Ti.UI.createLabel({
        text: 'NFC   : ' + module.normalize(text, module.NFC),
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: '#000000',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: { fontSize: '24sp' }
    });
    var nfd = Ti.UI.createLabel({
        text: 'NFD   : ' + module.normalize(text, module.NFD),
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: '#000000',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: { fontSize: '24sp' }
    });
    var nfkc = Ti.UI.createLabel({
        text: 'NFKC : ' + module.normalize(text, module.NFKC),
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: '#000000',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: { fontSize: '24sp' }
    });
    var nfkd = Ti.UI.createLabel({
        text: 'NFKD : ' + module.normalize(text, module.NFKD),
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        color: '#000000',
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        font: { fontSize: '24sp' }
    });

    win.add(base);
    win.add(nfc);
    win.add(nfd);
    win.add(nfkc);
    win.add(nfkd);

    console.log('===== NFC =====');
    console.log(module.isNormalized(module.normalize(text, module.NFC), module.NFC));
    console.log(module.isNormalized(module.normalize(text, module.NFC), module.NFD));
    console.log(module.isNormalized(module.normalize(text, module.NFC), module.NFKC));
    console.log(module.isNormalized(module.normalize(text, module.NFC), module.NFKD));
    console.log('===== NFD =====');
    console.log(module.isNormalized(module.normalize(text, module.NFD), module.NFC));
    console.log(module.isNormalized(module.normalize(text, module.NFD), module.NFD));
    console.log(module.isNormalized(module.normalize(text, module.NFD), module.NFKC));
    console.log(module.isNormalized(module.normalize(text, module.NFD), module.NFKD));
    console.log('===== NFKC =====');
    console.log(module.isNormalized(module.normalize(text, module.NFKC), module.NFC));
    console.log(module.isNormalized(module.normalize(text, module.NFKC), module.NFD));
    console.log(module.isNormalized(module.normalize(text, module.NFKC), module.NFKC));
    console.log(module.isNormalized(module.normalize(text, module.NFKC), module.NFKD));
    console.log('===== NFKD =====');
    console.log(module.isNormalized(module.normalize(text, module.NFKD), module.NFC));
    console.log(module.isNormalized(module.normalize(text, module.NFKD), module.NFD));
    console.log(module.isNormalized(module.normalize(text, module.NFKD), module.NFKC));
    console.log(module.isNormalized(module.normalize(text, module.NFKD), module.NFKD));

    win.open();
}());
