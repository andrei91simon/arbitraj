$(document).ready(function(){
    bittrex();
    binance();
    liqui();
    getNewCoins();
})

function bittrex() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://bittrex.com/api/v1.1/public/getmarketsummaries',
        type: 'GET',
        success: function(coins) {
            var first = search("ETH-1ST", coins.result);
            $('#ETH-1ST-Bittrex-bid').html(first.Bid);
            $('#ETH-1ST-Bittrex-sell').html(first.Ask);
            var ADA = search("ETH-ADA", coins.result);
            $('#ETH-ADA-Bittrex-bid').html(ADA.Bid);
            $('#ETH-ADA-Bittrex-sell').html(ADA.Ask);
            var ADT = search("ETH-ADT", coins.result);
            $('#ETH-ADT-Bittrex-bid').html(ADT.Bid);
            $('#ETH-ADT-Bittrex-sell').html(ADT.Ask);
            var ADX = search("ETH-ADX", coins.result);
            $('#ETH-ADX-Bittrex-bid').html(ADX.Bid);
            $('#ETH-ADX-Bittrex-sell').html(ADX.Ask);
            var ANT = search("ETH-ANT", coins.result);
            $('#ETH-ANT-Bittrex-bid').html(ANT.Bid);
            $('#ETH-ANT-Bittrex-sell').html(ANT.Ask);
            var BAT = search("ETH-BAT", coins.result);
            $('#ETH-BAT-Bittrex-bid').html(BAT.Bid);
            $('#ETH-BAT-Bittrex-sell').html(BAT.Ask);
            var BCC = search("ETH-BCC", coins.result);
            $('#ETH-BCC-Bittrex-bid').html(BCC.Bid);
            $('#ETH-BCC-Bittrex-sell').html(BCC.Ask);
            var BNT = search("ETH-BNT", coins.result);
            $('#ETH-BNT-Bittrex-bid').html(BNT.Bid);
            $('#ETH-BNT-Bittrex-sell').html(BNT.Ask);
            var BTG = search("ETH-BTG", coins.result);
            $('#ETH-BTG-Bittrex-bid').html(BTG.Bid);
            $('#ETH-BTG-Bittrex-sell').html(BTG.Ask);
            //var BTS = search("ETH-BTS", coins.result);
            //$('#ETH-BTS-Bittrex-bid').html(BTS.Bid);
            //$('#ETH-BTS-Bittrex-sell').html(BTS.Ask);
            var CFI = search("ETH-CFI", coins.result);
            $('#ETH-CFI-Bittrex-bid').html(CFI.Bid);
            $('#ETH-CFI-Bittrex-sell').html(CFI.Ask);
            var CRB = search("ETH-CRB", coins.result);
            $('#ETH-CRB-Bittrex-bid').html(CRB.Bid);
            $('#ETH-CRB-Bittrex-sell').html(CRB.Ask);
            var CVC = search("ETH-CVC", coins.result);
            $('#ETH-CVC-Bittrex-bid').html(CVC.Bid);
            $('#ETH-CVC-Bittrex-sell').html(CVC.Ask);
            var DASH = search("ETH-DASH", coins.result);
            $('#ETH-DASH-Bittrex-bid').html(DASH.Bid);
            $('#ETH-DASH-Bittrex-sell').html(DASH.Ask);
            var DGB = search("ETH-DGB", coins.result);
            $('#ETH-DGB-Bittrex-bid').html(DGB.Bid);
            $('#ETH-DGB-Bittrex-sell').html(DGB.Ask);
            var DGD = search("ETH-DGD", coins.result);
            $('#ETH-DGD-Bittrex-bid').html(DGD.Bid);
            $('#ETH-DGD-Bittrex-sell').html(DGD.Ask);
            var DNT = search("ETH-DNT", coins.result);
            $('#ETH-DNT-Bittrex-bid').html(DNT.Bid);
            $('#ETH-DNT-Bittrex-sell').html(DNT.Ask);
            var ENG = search("ETH-ENG", coins.result);
            $('#ETH-ENG-Bittrex-bid').html(ENG.Bid);
            $('#ETH-ENG-Bittrex-sell').html(ENG.Ask);
            var ETC = search("ETH-ETC", coins.result);
            $('#ETH-ETC-Bittrex-bid').html(ETC.Bid);
            $('#ETH-ETC-Bittrex-sell').html(ETC.Ask);
            var FCT = search("ETH-FCT", coins.result);
            $('#ETH-FCT-Bittrex-bid').html(FCT.Bid);
            $('#ETH-FCT-Bittrex-sell').html(FCT.Ask);
            var FUN = search("ETH-FUN", coins.result);
            $('#ETH-FUN-Bittrex-bid').html(FUN.Bid);
            $('#ETH-FUN-Bittrex-sell').html(FUN.Ask);
            var GNO = search("ETH-GNO", coins.result);
            $('#ETH-GNO-Bittrex-bid').html(GNO.Bid);
            $('#ETH-GNO-Bittrex-sell').html(GNO.Ask);
            var GNT = search("ETH-GNT", coins.result);
            $('#ETH-GNT-Bittrex-bid').html(GNT.Bid);
            $('#ETH-GNT-Bittrex-sell').html(GNT.Ask);
            var GUP = search("ETH-GUP", coins.result);
            $('#ETH-GUP-Bittrex-bid').html(GUP.Bid);
            $('#ETH-GUP-Bittrex-sell').html(GUP.Ask);
            var HMQ = search("ETH-HMQ", coins.result);
            $('#ETH-HMQ-Bittrex-bid').html(HMQ.Bid);
            $('#ETH-HMQ-Bittrex-sell').html(HMQ.Ask);
            var LGD = search("ETH-LGD", coins.result);
            $('#ETH-LGD-Bittrex-bid').html(LGD.Bid);
            $('#ETH-LGD-Bittrex-sell').html(LGD.Ask);
            var LTC = search("ETH-LTC", coins.result);
            $('#ETH-LTC-Bittrex-bid').html(LTC.Bid);
            $('#ETH-LTC-Bittrex-sell').html(LTC.Ask);
            var LUN = search("ETH-LUN", coins.result);
            $('#ETH-LUN-Bittrex-bid').html(LTC.Bid);
            $('#ETH-LUN-Bittrex-sell').html(LTC.Ask);
            var MANA = search("ETH-MANA", coins.result);
            $('#ETH-MANA-Bittrex-bid').html(MANA.Bid);
            $('#ETH-MANA-Bittrex-sell').html(MANA.Ask);
            var MCO = search("ETH-MCO", coins.result);
            $('#ETH-MCO-Bittrex-bid').html(MCO.Bid);
            $('#ETH-MCO-Bittrex-sell').html(MCO.Ask);
            var MTL = search("ETH-MTL", coins.result);
            $('#ETH-MTL-Bittrex-bid').html(MTL.Bid);
            $('#ETH-MTL-Bittrex-sell').html(MTL.Ask);
            var MYST = search("ETH-MYST", coins.result);
            $('#ETH-MYST-Bittrex-bid').html(MYST.Bid);
            $('#ETH-MYST-Bittrex-sell').html(MYST.Ask);
            var NEO = search("ETH-NEO", coins.result);
            $('#ETH-NEO-Bittrex-bid').html(NEO.Bid);
            $('#ETH-NEO-Bittrex-sell').html(NEO.Ask);
            var NMR = search("ETH-NMR", coins.result);
            $('#ETH-NMR-Bittrex-bid').html(NMR.Bid);
            $('#ETH-NMR-Bittrex-sell').html(NMR.Ask);
            var OMG = search("ETH-OMG", coins.result);
            $('#ETH-OMG-Bittrex-bid').html(OMG.Bid);
            $('#ETH-OMG-Bittrex-sell').html(OMG.Ask);
            var PAY = search("ETH-PAY", coins.result);
            $('#ETH-PAY-Bittrex-bid').html(PAY.Bid);
            $('#ETH-PAY-Bittrex-sell').html(PAY.Ask);
            var POWR = search("ETH-POWR", coins.result);
            $('#ETH-POWR-Bittrex-bid').html(POWR.Bid);
            $('#ETH-POWR-Bittrex-sell').html(POWR.Ask);
            var PTOY = search("ETH-PTOY", coins.result);
            $('#ETH-PTOY-Bittrex-bid').html(PTOY.Bid);
            $('#ETH-PTOY-Bittrex-sell').html(PTOY.Ask);
            var QRL = search("ETH-QRL", coins.result);
            $('#ETH-QRL-Bittrex-bid').html(QRL.Bid);
            $('#ETH-QRL-Bittrex-sell').html(QRL.Ask);
            var QTUM = search("ETH-QTUM", coins.result);
            $('#ETH-QTUM-Bittrex-bid').html(QTUM.Bid);
            $('#ETH-QTUM-Bittrex-sell').html(QTUM.Ask);
            var RCN = search("ETH-RCN", coins.result);
            $('#ETH-RCN-Bittrex-bid').html(RCN.Bid);
            $('#ETH-RCN-Bittrex-sell').html(RCN.Ask);
            var REP = search("ETH-REP", coins.result);
            $('#ETH-REP-Bittrex-bid').html(REP.Bid);
            $('#ETH-REP-Bittrex-sell').html(REP.Ask);
            var RLC = search("ETH-RLC", coins.result);
            $('#ETH-RLC-Bittrex-bid').html(RLC.Bid);
            $('#ETH-RLC-Bittrex-sell').html(RLC.Ask);
            var SALT = search("ETH-SALT", coins.result);
            $('#ETH-SALT-Bittrex-bid').html(SALT.Bid);
            $('#ETH-SALT-Bittrex-sell').html(SALT.Ask);
            var SC = search("ETH-SC", coins.result);
            $('#ETH-SC-Bittrex-bid').html(SC.Bid);
            $('#ETH-SC-Bittrex-sell').html(SC.Ask);
            var SNGLS = search("ETH-SNGLS", coins.result);
            $('#ETH-SNGLS-Bittrex-bid').html(SNGLS.Bid);
            $('#ETH-SNGLS-Bittrex-sell').html(SNGLS.Ask);
            var SNT = search("ETH-SNT", coins.result);
            $('#ETH-SNT-Bittrex-bid').html(SNT.Bid);
            $('#ETH-SNT-Bittrex-sell').html(SNT.Ask);
            var STORJ = search("ETH-STORJ", coins.result);
            $('#ETH-STORJ-Bittrex-bid').html(STORJ.Bid);
            $('#ETH-STORJ-Bittrex-sell').html(STORJ.Ask);
            var STRAT = search("ETH-STRAT", coins.result);
            $('#ETH-STRAT-Bittrex-bid').html(STRAT.Bid);
            $('#ETH-STRAT-Bittrex-sell').html(STRAT.Ask);
            //var TIME = search("ETH-TIME", coins.result);
            //$('#ETH-TIME-Bittrex-bid').html(TIME.Bid);
            //$('#ETH-TIME-Bittrex-sell').html(TIME.Ask);
            var TIX = search("ETH-TIX", coins.result);
            $('#ETH-TIX-Bittrex-bid').html(TIX.Bid);
            $('#ETH-TIX-Bittrex-sell').html(TIX.Ask);
            var TKN = search("ETH-TKN", coins.result);
            //$('#ETH-TKN-Bittrex-bid').html(TKN.Bid);
            //$('#ETH-TKN-Bittrex-sell').html(TKN.Ask);
            var TRST = search("ETH-TRST", coins.result);
            $('#ETH-TRST-Bittrex-bid').html(TRST.Bid);
            $('#ETH-TRST-Bittrex-sell').html(TRST.Ask);
            var VIB = search("ETH-VIB", coins.result);
            $('#ETH-VIB-Bittrex-bid').html(VIB.Bid);
            $('#ETH-VIB-Bittrex-sell').html(VIB.Ask);
            var WAVES = search("ETH-WAVES", coins.result);
            $('#ETH-WAVES-Bittrex-bid').html(WAVES.Bid);
            $('#ETH-WAVES-Bittrex-sell').html(WAVES.Ask);
            var WINGS = search("ETH-WINGS", coins.result);
            $('#ETH-WINGS-Bittrex-bid').html(WINGS.Bid);
            $('#ETH-WINGS-Bittrex-sell').html(WINGS.Ask);
            var XEM = search("ETH-XEM", coins.result);
            $('#ETH-XEM-Bittrex-bid').html(XEM.Bid);
            $('#ETH-XEM-Bittrex-sell').html(XEM.Ask);
            var XLM = search("ETH-XLM", coins.result);
            $('#ETH-XLM-Bittrex-bid').html(XLM.Bid);
            $('#ETH-XLM-Bittrex-sell').html(XLM.Ask);
            var XMR = search("ETH-XMR", coins.result);
            $('#ETH-XMR-Bittrex-bid').html(XMR.Bid);
            $('#ETH-XMR-Bittrex-sell').html(XMR.Ask);
            var XRP = search("ETH-XRP", coins.result);
            $('#ETH-XRP-Bittrex-bid').html(XRP.Bid);
            $('#ETH-XRP-Bittrex-sell').html(XRP.Ask);
            var ZEC = search("ETH-ZEC", coins.result);
            $('#ETH-ZEC-Bittrex-bid').html(ZEC.Bid);
            $('#ETH-ZEC-Bittrex-sell').html(ZEC.Ask);

            $('#ETH-1ST-Bittrex-bid').val(first.Bid);
            $('#ETH-1ST-Bittrex-sell').val(first.Ask);
            $('#ETH-ADA-Bittrex-bid').val(ADA.Bid);
            $('#ETH-ADA-Bittrex-sell').val(ADA.Ask);
            $('#ETH-ADT-Bittrex-bid').val(ADT.Bid);
            $('#ETH-ADT-Bittrex-sell').val(ADT.Ask);
            $('#ETH-ADX-Bittrex-bid').val(ADX.Bid);
            $('#ETH-ADX-Bittrex-sell').val(ADX.Ask);
            $('#ETH-ANT-Bittrex-bid').val(ANT.Bid);
            $('#ETH-ANT-Bittrex-sell').val(ANT.Ask);
            $('#ETH-BAT-Bittrex-bid').val(BAT.Bid);
            $('#ETH-BAT-Bittrex-sell').val(BAT.Ask);
            $('#ETH-BCC-Bittrex-bid').val(BCC.Bid);
            $('#ETH-BCC-Bittrex-sell').val(BCC.Ask);
            $('#ETH-BNT-Bittrex-bid').val(BNT.Bid);
            $('#ETH-BNT-Bittrex-sell').val(BNT.Ask);
            $('#ETH-BTG-Bittrex-bid').val(BTG.Bid);
            $('#ETH-BTG-Bittrex-sell').val(BTG.Ask);
            //$('#ETH-BTS-Bittrex-bid').val(BTS.Bid);
            //$('#ETH-BTS-Bittrex-sell').val(BTS.Ask);
            $('#ETH-CFI-Bittrex-bid').val(CFI.Bid);
            $('#ETH-CFI-Bittrex-sell').val(CFI.Ask);
            $('#ETH-CRB-Bittrex-bid').val(CRB.Bid);
            $('#ETH-CRB-Bittrex-sell').val(CRB.Ask);
            $('#ETH-CVC-Bittrex-bid').val(CVC.Bid);
            $('#ETH-CVC-Bittrex-sell').val(CVC.Ask);
            $('#ETH-DASH-Bittrex-bid').val(DASH.Bid);
            $('#ETH-DASH-Bittrex-sell').val(DASH.Ask);
            $('#ETH-DGB-Bittrex-bid').val(DGB.Bid);
            $('#ETH-DGB-Bittrex-sell').val(DGB.Ask);
            $('#ETH-DGD-Bittrex-bid').val(DGD.Bid);
            $('#ETH-DGD-Bittrex-sell').val(DGD.Ask);
            $('#ETH-DNT-Bittrex-bid').val(DNT.Bid);
            $('#DNT-Bittrex-sell').val(DNT.Ask);
            $('#ETH-ENG-Bittrex-bid').val(ENG.Bid);
            $('#ETH-ENG-Bittrex-sell').val(ENG.Ask);
            $('#ETH-ETC-Bittrex-bid').val(ETC.Bid);
            $('#ETH-ETC-Bittrex-sell').val(ETC.Ask);
            $('#ETH-FCT-Bittrex-bid').val(FCT.Bid);
            $('#ETH-FCT-Bittrex-sell').val(FCT.Ask);
            $('#ETH-FUN-Bittrex-bid').val(FUN.Bid);
            $('#ETH-FUN-Bittrex-sell').val(FUN.Ask);
            $('#ETH-GNO-Bittrex-bid').val(GNO.Bid);
            $('#ETH-GNO-Bittrex-sell').val(GNO.Ask);
            $('#ETH-GNT-Bittrex-bid').val(GNT.Bid);
            $('#ETH-GNT-Bittrex-sell').val(GNT.Ask);
            $('#ETH-GUP-Bittrex-bid').val(GUP.Bid);
            $('#ETH-GUP-Bittrex-sell').val(GUP.Ask);
            $('#ETH-HMQ-Bittrex-bid').val(HMQ.Bid);
            $('#ETH-HMQ-Bittrex-sell').val(HMQ.Ask);
            $('#ETH-LGD-Bittrex-bid').val(LGD.Bid);
            $('#ETH-LGD-Bittrex-sell').val(LGD.Ask);
            $('#ETH-LTC-Bittrex-bid').val(LTC.Bid);
            $('#ETH-LTC-Bittrex-sell').val(LTC.Ask);
            $('#ETH-LUN-Bittrex-bid').val(LTC.Bid);
            $('#ETH-LUN-Bittrex-sell').val(LTC.Ask);
            $('#ETH-MANA-Bittrex-bid').val(MANA.Bid);
            $('#ETH-MANA-Bittrex-sell').val(MANA.Ask);
            $('#ETH-MCO-Bittrex-bid').val(MCO.Bid);
            $('#ETH-MCO-Bittrex-sell').val(MCO.Ask);
            $('#ETH-MTL-Bittrex-bid').val(MTL.Bid);
            $('#ETH-MTL-Bittrex-sell').val(MTL.Ask);
            $('#ETH-MYST-Bittrex-bid').val(MYST.Bid);
            $('#ETH-MYST-Bittrex-sell').val(MYST.Ask);
            $('#ETH-NEO-Bittrex-bid').val(NEO.Bid);
            $('#ETH-NEO-Bittrex-sell').val(NEO.Ask);
            $('#ETH-NMR-Bittrex-bid').val(NMR.Bid);
            $('#ETH-NMR-Bittrex-sell').val(NMR.Ask);
            $('#ETH-OMG-Bittrex-bid').val(OMG.Bid);
            $('#ETH-OMG-Bittrex-sell').val(OMG.Ask);
            $('#ETH-PAY-Bittrex-bid').val(PAY.Bid);
            $('#ETH-PAY-Bittrex-sell').val(PAY.Ask);
            $('#ETH-POWR-Bittrex-bid').val(POWR.Bid);
            $('#ETH-POWR-Bittrex-sell').val(POWR.Ask);
            $('#ETH-PTOY-Bittrex-bid').val(PTOY.Bid);
            $('#ETH-PTOY-Bittrex-sell').val(PTOY.Ask);
            $('#ETH-QRL-Bittrex-bid').val(QRL.Bid);
            $('#ETH-QRL-Bittrex-sell').val(QRL.Ask);
            $('#ETH-QTUM-Bittrex-bid').val(QTUM.Bid);
            $('#ETH-QTUM-Bittrex-sell').val(QTUM.Ask);
            $('#ETH-RCN-Bittrex-bid').val(RCN.Bid);
            $('#ETH-RCN-Bittrex-sell').val(RCN.Ask);
            $('#ETH-REP-Bittrex-bid').val(REP.Bid);
            $('#ETH-REP-Bittrex-sell').val(REP.Ask);
            $('#ETH-RLC-Bittrex-bid').val(RLC.Bid);
            $('#ETH-RLC-Bittrex-sell').val(RLC.Ask);
            $('#ETH-SALT-Bittrex-bid').val(SALT.Bid);
            $('#ETH-SALT-Bittrex-sell').val(SALT.Ask);
            $('#ETH-SC-Bittrex-bid').val(SC.Bid);
            $('#ETH-SC-Bittrex-sell').val(SC.Ask);
            $('#ETH-SNGLS-Bittrex-bid').val(SNGLS.Bid);
            $('#ETH-SNGLS-Bittrex-sell').val(SNGLS.Ask);
            $('#ETH-SNT-Bittrex-bid').val(SNT.Bid);
            $('#ETH-SNT-Bittrex-sell').val(SNT.Ask);
            $('#ETH-STORJ-Bittrex-bid').val(STORJ.Bid);
            $('#ETH-STORJ-Bittrex-sell').val(STORJ.Ask);
            $('#ETH-STRAT-Bittrex-bid').val(STRAT.Bid);
            $('#ETH-STRAT-Bittrex-sell').val(STRAT.Ask);
            //$('#ETH-TIME-Bittrex-bid').val(TIME.Bid);
            //$('#ETH-TIME-Bittrex-sell').val(TIME.Ask);
            $('#ETH-TIX-Bittrex-bid').val(TIX.Bid);
            $('#ETH-TIX-Bittrex-sell').val(TIX.Ask);
            //$('#ETH-TKN-Bittrex-bid').val(TKN.Bid);
            //$('#ETH-TKN-Bittrex-sell').val(TKN.Ask);
            $('#ETH-TRST-Bittrex-bid').val(TRST.Bid);
            $('#ETH-TRST-Bittrex-sell').val(TRST.Ask);
            $('#ETH-VIB-Bittrex-bid').val(VIB.Bid);
            $('#ETH-VIB-Bittrex-sell').val(VIB.Ask);
            $('#ETH-WAVES-Bittrex-bid').val(WAVES.Bid);
            $('#ETH-WAVES-Bittrex-sell').val(WAVES.Ask);
            $('#ETH-WINGS-Bittrex-bid').val(WINGS.Bid);
            $('#ETH-WINGS-Bittrex-sell').val(WINGS.Ask);
            $('#ETH-XEM-Bittrex-bid').val(XEM.Bid);
            $('#ETH-XEM-Bittrex-sell').val(XEM.Ask);
            $('#ETH-XLM-Bittrex-bid').val(XLM.Bid);
            $('#ETH-XLM-Bittrex-sell').val(XLM.Ask);
            $('#ETH-XMR-Bittrex-bid').val(XMR.Bid);
            $('#ETH-XMR-Bittrex-sell').val(XMR.Ask);
            $('#ETH-XRP-Bittrex-bid').val(XRP.Bid);
            $('#ETH-XRP-Bittrex-sell').val(XRP.Ask);
            $('#ETH-ZEC-Bittrex-bid').val(ZEC.Bid);
            $('#ETH-ZEC-Bittrex-sell').val(ZEC.Ask);
        },
        error: function() {
            alert('FAILURE!');
        }
    }); 
}

function binance() {
    $.ajax({
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v3/ticker/bookTicker',
        success: function(coins) {
            //var first = searchBinance("ETH-1ST", coins);
            //$('#ETH-1ST-Binance-bid').html(first.Bid);
            //$('#ETH-1ST-Binance-sell').html(first.Ask);
            var ADA = searchBinance("ADAETH", coins);
            $('#ETH-ADA-Binance-bid').html(ADA.bidPrice);
            $('#ETH-ADA-Binance-sell').html(ADA.askPrice);
            //var ADT = searchBinance("ADTETH", coins);
            //$('#ETH-ADT-Binance-bid').html(ADT.bidPrice);
            //$('#ETH-ADT-Binance-sell').html(ADT.askPrice);
            var ADX = searchBinance("ADXETH", coins);
            $('#ETH-ADX-Binance-bid').html(ADX.bidPrice);
            $('#ETH-ADX-Binance-sell').html(ADX.askPrice);
            //var ANT = searchBinance("ANTETH", coins);
            //$('#ETH-ANT-Binance-bid').html(ANT.bidPrice);
            //$('#ETH-ANT-Binance-sell').html(ANT.askPrice);
            var BAT = searchBinance("BATETH", coins);
            $('#ETH-BAT-Binance-bid').html(BAT.bidPrice);
            $('#ETH-BAT-Binance-sell').html(BAT.askPrice);
            var BCC = searchBinance("BCCETH", coins);
            $('#ETH-BCC-Binance-bid').html(BCC.bidPrice);
            $('#ETH-BCC-Binance-sell').html(BCC.askPrice);
            var BNT = searchBinance("BNTETH", coins);
            $('#ETH-BNT-Binance-bid').html(BNT.bidPrice);
            $('#ETH-BNT-Binance-sell').html(BNT.askPrice);
            var BTG = searchBinance("BTGETH", coins);
            $('#ETH-BTG-Binance-bid').html(BTG.bidPrice);
            $('#ETH-BTG-Binance-sell').html(BTG.askPrice);
            var BTS = searchBinance("BTSETH", coins);
            $('#ETH-BTS-Binance-bid').html(BTS.bidPrice);
            $('#ETH-BTS-Binance-sell').html(BTS.askPrice);
            //var CFI = searchBinance("CFIETH", coins);
            //$('#ETH-CFI-Binance-bid').html(CFI.bidPrice);
            //$('#ETH-CFI-Binance-sell').html(CFI.askPrice);
            //var CRB = searchBinance("CRBETH", coins);
            //$('#ETH-CRB-Binance-bid').html(CRB.bidPrice);
            //$('#ETH-CRB-Binance-sell').html(CRB.askPrice);
            //var CVC = searchBinance("CVCETH", coins);
            //$('#ETH-CVC-Binance-bid').html(CVC.bidPrice);
            //$('#ETH-CVC-Binance-sell').html(CVC.askPrice);
            var DASH = searchBinance("DASHETH", coins);
            $('#ETH-DASH-Binance-bid').html(DASH.bidPrice);
            $('#ETH-DASH-Binance-sell').html(DASH.askPrice);
            //var DGB = searchBinance("DGBETH", coins);
            //$('#ETH-DGB-Binance-bid').html(DGB.bidPrice);
            //$('#ETH-DGB-Binance-sell').html(DGB.askPrice);
            var DGD = searchBinance("DGDETH", coins);
            $('#ETH-DGD-Binance-bid').html(DGD.bidPrice);
            $('#ETH-DGD-Binance-sell').html(DGD.askPrice);
            var DNT = searchBinance("DNTETH", coins);
            $('#ETH-DNT-Binance-bid').html(DNT.bidPrice);
            $('#ETH-DNT-Binance-sell').html(DNT.askPrice);
            var ENG = searchBinance("ENGETH", coins);
            $('#ETH-ENG-Binance-bid').html(ENG.bidPrice);
            $('#ETH-ENG-Binance-sell').html(ENG.askPrice);
            var ETC = searchBinance("ETCETH", coins);
            $('#ETH-ETC-Binance-bid').html(ETC.bidPrice);
            $('#ETH-ETC-Binance-sell').html(ETC.askPrice);
            //var FCT = searchBinance("FCTETH", coins);
            //$('#ETH-FCT-Binance-bid').html(FCT.bidPrice);
            //$('#ETH-FCT-Binance-sell').html(FCT.askPrice);
            var FUN = searchBinance("FUNETH", coins);
            $('#ETH-FUN-Binance-bid').html(FUN.bidPrice);
            $('#ETH-FUN-Binance-sell').html(FUN.askPrice);
            //var GNO = searchBinance("GNOETH", coins);
            //$('#ETH-GNO-Binance-bid').html(GNO.bidPrice);
            //$('#ETH-GNO-Binance-sell').html(GNO.askPrice);
            //var GNT = searchBinance("GNTETH", coins);
            //$('#ETH-GNT-Binance-bid').html(GNT.bidPrice);
            //$('#ETH-GNT-Binance-sell').html(GNT.askPrice);
            //var GUP = searchBinance("GUPETH", coins);
            //$('#ETH-GUP-Binance-bid').html(GUP.bidPrice);
            //$('#ETH-GUP-Binance-sell').html(GUP.askPrice);
            //var HMQ = searchBinance("HMQETH", coins);
            //$('#ETH-HMQ-Binance-bid').html(HMQ.bidPrice);
            //$('#ETH-HMQ-Binance-sell').html(HMQ.askPrice);
            //var LGD = searchBinance("LGDETH", coins);
            //$('#ETH-LGD-Binance-bid').html(LGD.bidPrice);
            //$('#ETH-LGD-Binance-sell').html(LGD.askPrice);
            //var LTC = searchBinance("LTCETH", coins);
            //$('#ETH-LTC-Binance-bid').html(LTC.bidPrice);
            //$('#ETH-LTC-Binance-sell').html(LTC.askPrice);
            //var LUN = searchBinance("LUNETH", coins);
            //$('#ETH-LUN-Binance-bid').html(LTC.bidPrice);
            //$('#ETH-LUN-Binance-sell').html(LTC.askPrice);
            var MANA = searchBinance("MANAETH", coins);
            $('#ETH-MANA-Binance-bid').html(MANA.bidPrice);
            $('#ETH-MANA-Binance-sell').html(MANA.askPrice);
            var MCO = searchBinance("MCOETH", coins);
            $('#ETH-MCO-Binance-bid').html(MCO.bidPrice);
            $('#ETH-MCO-Binance-sell').html(MCO.askPrice);
            var MTL = searchBinance("MTLETH", coins);
            $('#ETH-MTL-Binance-bid').html(MTL.bidPrice);
            $('#ETH-MTL-Binance-sell').html(MTL.askPrice);
            //var MYST = searchBinance("MYSTETH", coins);
            //$('#ETH-MYST-Binance-bid').html(MYST.bidPrice);
            //$('#ETH-MYST-Binance-sell').html(MYST.askPrice);
            var NEO = searchBinance("NEOETH", coins);
            $('#ETH-NEO-Binance-bid').html(NEO.bidPrice);
            $('#ETH-NEO-Binance-sell').html(NEO.askPrice);
            //var NMR = searchBinance("NMRETH", coins);
            //$('#ETH-NMR-Binance-bid').html(NMR.bidPrice);
            //$('#ETH-NMR-Binance-sell').html(NMR.askPrice);
            var OMG = searchBinance("OMGETH", coins);
            $('#ETH-OMG-Binance-bid').html(OMG.bidPrice);
            $('#ETH-OMG-Binance-sell').html(OMG.askPrice);
            //var PAY = searchBinance("PAYETH", coins);
            //$('#ETH-PAY-Binance-bid').html(PAY.bidPrice);
            //$('#ETH-PAY-Binance-sell').html(PAY.askPrice);
            var POWR = searchBinance("POWRETH", coins);
            $('#ETH-POWR-Binance-bid').html(POWR.bidPrice);
            $('#ETH-POWR-Binance-sell').html(POWR.askPrice);
            //var PTOY = searchBinance("PTOYETH", coins);
            //$('#ETH-PTOY-Binance-bid').html(PTOY.bidPrice);
            //$('#ETH-PTOY-Binance-sell').html(PTOY.askPrice);
            //var QRL = searchBinance("QRLETH", coins);
            //$('#ETH-QRL-Binance-bid').html(QRL.bidPrice);
            //$('#ETH-QRL-Binance-sell').html(QRL.askPrice);
            var QTUM = searchBinance("QTUMETH", coins);
            $('#ETH-QTUM-Binance-bid').html(QTUM.bidPrice);
            $('#ETH-QTUM-Binance-sell').html(QTUM.askPrice);
            var RCN = searchBinance("RCNETH", coins);
            $('#ETH-RCN-Binance-bid').html(RCN.bidPrice);
            $('#ETH-RCN-Binance-sell').html(RCN.askPrice);
            //var REP = searchBinance("REPETH", coins);
            //$('#ETH-REP-Binance-bid').html(REP.bidPrice);
            //$('#ETH-REP-Binance-sell').html(REP.askPrice);
            //var RLC = searchBinance("RLCETH", coins);
            //$('#ETH-RLC-Binance-bid').html(RLC.bidPrice);
            //$('#ETH-RLC-Binance-sell').html(RLC.askPrice);
            var SALT = searchBinance("SALTETH", coins);
            $('#ETH-SALT-Binance-bid').html(SALT.bidPrice);
            $('#ETH-SALT-Binance-sell').html(SALT.askPrice);
            //var SC = searchBinance("SCETH", coins);
            //$('#ETH-SC-Binance-bid').html(SC.bidPrice);
            //$('#ETH-SC-Binance-sell').html(SC.askPrice);
            var SNGLS = searchBinance("SNGLSETH", coins);
            $('#ETH-SNGLS-Binance-bid').html(SNGLS.bidPrice);
            $('#ETH-SNGLS-Binance-sell').html(SNGLS.askPrice);
            var SNT = searchBinance("SNTETH", coins);
            $('#ETH-SNT-Binance-bid').html(SNT.bidPrice);
            $('#ETH-SNT-Binance-sell').html(SNT.askPrice);
            var STORJ = searchBinance("STORJETH", coins);
            $('#ETH-STORJ-Binance-bid').html(STORJ.bidPrice);
            $('#ETH-STORJ-Binance-sell').html(STORJ.askPrice);
            var STRAT = searchBinance("STRATETH", coins);
            $('#ETH-STRAT-Binance-bid').html(STRAT.bidPrice);
            $('#ETH-STRAT-Binance-sell').html(STRAT.askPrice);
            //var TIME = searchBinance("TIMEETH", coins);
            //$('#ETH-TIME-Binance-bid').html(TIME.bidPrice);
            //$('#ETH-TIME-Binance-sell').html(TIME.askPrice);
            //var TIX = searchBinance("TIXETH", coins);
            //$('#ETH-TIX-Binance-bid').html(TIX.bidPrice);
            //$('#ETH-TIX-Binance-sell').html(TIX.askPrice);
            //var TKN = searchBinance("TKNETH", coins);
            //$('#ETH-TKN-Binance-bid').html(TKN.bidPrice);
            //$('#ETH-TKN-Binance-sell').html(TKN.askPrice);
            //var TRST = searchBinance("TRSTETH", coins);
            //$('#ETH-TRST-Binance-bid').html(TRST.bidPrice);
            //$('#ETH-TRST-Binance-sell').html(TRST.askPrice);
            var VIB = searchBinance("VIBETH", coins);
            $('#ETH-VIB-Binance-bid').html(VIB.bidPrice);
            $('#ETH-VIB-Binance-sell').html(VIB.askPrice);
            //var WAVES = searchBinance("WAVESETH", coins);
            //$('#ETH-WAVES-Binance-bid').html(WAVES.bidPrice);
            //$('#ETH-WAVES-Binance-sell').html(WAVES.askPrice);
            //var WINGS = searchBinance("WINGSETH", coins);
            //$('#ETH-WINGS-Binance-bid').html(WINGS.bidPrice);
            //$('#ETH-WINGS-Binance-sell').html(WINGS.askPrice);
            //var XEM = searchBinance("XEMETH", coins);
            //$('#ETH-XEM-Binance-bid').html(XEM.bidPrice);
            //$('#ETH-XEM-Binance-sell').html(XEM.askPrice);
            var XLM = searchBinance("XLMETH", coins);
            $('#ETH-XLM-Binance-bid').html(XLM.bidPrice);
            $('#ETH-XLM-Binance-sell').html(XLM.askPrice);
            var XMR = searchBinance("XMRETH", coins);
            $('#ETH-XMR-Binance-bid').html(XMR.bidPrice);
            $('#ETH-XMR-Binance-sell').html(XMR.askPrice);
            var XRP = searchBinance("XRPETH", coins);
            $('#ETH-XRP-Binance-bid').html(XRP.bidPrice);
            $('#ETH-XRP-Binance-sell').html(XRP.askPrice);
            var ZEC = searchBinance("ZECETH", coins);
            $('#ETH-ZEC-Binance-bid').html(ZEC.bidPrice);
            $('#ETH-ZEC-Binance-sell').html(ZEC.askPrice);

            //$('#ETH-1ST-Binance-bid').val(first.Bid);
            //$('#ETH-1ST-Binance-sell').val(first.Ask);
            $('#ETH-ADA-Binance-bid').val(ADA.bidPrice);
            $('#ETH-ADA-Binance-sell').val(ADA.askPrice);
            //$('#ETH-ADT-Binance-bid').val(ADT.bidPrice);
            //$('#ETH-ADT-Binance-sell').val(ADT.askPrice);
            $('#ETH-ADX-Binance-bid').val(ADX.bidPrice);
            $('#ETH-ADX-Binance-sell').val(ADX.askPrice);
            //$('#ETH-ANT-Binance-bid').val(ANT.bidPrice);
            //$('#ETH-ANT-Binance-sell').val(ANT.askPrice);
            $('#ETH-BAT-Binance-bid').val(BAT.bidPrice);
            $('#ETH-BAT-Binance-sell').val(BAT.askPrice);
            $('#ETH-BCC-Binance-bid').val(BCC.bidPrice);
            $('#ETH-BCC-Binance-sell').val(BCC.askPrice);
            $('#ETH-BNT-Binance-bid').val(BNT.bidPrice);
            $('#ETH-BNT-Binance-sell').val(BNT.askPrice);
            $('#ETH-BTG-Binance-bid').val(BTG.bidPrice);
            $('#ETH-BTG-Binance-sell').val(BTG.askPrice);
            $('#ETH-BTS-Binance-bid').html(BTS.bidPrice);
            $('#ETH-BTS-Binance-sell').html(BTS.askPrice);
            //$('#ETH-CFI-Binance-bid').val(CFI.bidPrice);
            //$('#ETH-CFI-Binance-sell').val(CFI.askPrice);
            //$('#ETH-CRB-Binance-bid').val(CRB.bidPrice);
            //$('#ETH-CRB-Binance-sell').val(CRB.askPrice);
            //$('#ETH-CVC-Binance-bid').val(CVC.bidPrice);
            //$('#ETH-CVC-Binance-sell').val(CVC.askPrice);
            $('#ETH-DASH-Binance-bid').val(DASH.bidPrice);
            $('#ETH-DASH-Binance-sell').val(DASH.askPrice);
            //$('#ETH-DGB-Binance-bid').val(DGB.bidPrice);
            //$('#ETH-DGB-Binance-sell').val(DGB.askPrice);
            $('#ETH-DGD-Binance-bid').val(DGD.bidPrice);
            $('#ETH-DGD-Binance-sell').val(DGD.askPrice);
            $('#ETH-DNT-Binance-bid').val(DNT.bidPrice);
            $('#DNT-Binance-sell').val(DNT.askPrice);
            $('#ETH-ENG-Binance-bid').val(ENG.bidPrice);
            $('#ETH-ENG-Binance-sell').val(ENG.askPrice);
            $('#ETH-ETC-Binance-bid').val(ETC.bidPrice);
            $('#ETH-ETC-Binance-sell').val(ETC.askPrice);
            //$('#ETH-FCT-Binance-bid').val(FCT.bidPrice);
            //$('#ETH-FCT-Binance-sell').val(FCT.askPrice);
            $('#ETH-FUN-Binance-bid').val(FUN.bidPrice);
            $('#ETH-FUN-Binance-sell').val(FUN.askPrice);
            //$('#ETH-GNO-Binance-bid').val(GNO.bidPrice);
            //$('#ETH-GNO-Binance-sell').val(GNO.askPrice);
            //$('#ETH-GNT-Binance-bid').val(GNT.bidPrice);
            //$('#ETH-GNT-Binance-sell').val(GNT.askPrice);
            //$('#ETH-GUP-Binance-bid').val(GUP.bidPrice);
            //$('#ETH-GUP-Binance-sell').val(GUP.askPrice);
            //$('#ETH-HMQ-Binance-bid').val(HMQ.bidPrice);
            //$('#ETH-HMQ-Binance-sell').val(HMQ.askPrice);
            //$('#ETH-LGD-Binance-bid').val(LGD.bidPrice);
            //$('#ETH-LGD-Binance-sell').val(LGD.askPrice);
            //$('#ETH-LTC-Binance-bid').val(LTC.bidPrice);
            //$('#ETH-LTC-Binance-sell').val(LTC.askPrice);
            //$('#ETH-LUN-Binance-bid').val(LTC.bidPrice);
            //$('#ETH-LUN-Binance-sell').val(LTC.askPrice);
            $('#ETH-MANA-Binance-bid').val(MANA.bidPrice);
            $('#ETH-MANA-Binance-sell').val(MANA.askPrice);
            $('#ETH-MCO-Binance-bid').val(MCO.bidPrice);
            $('#ETH-MCO-Binance-sell').val(MCO.askPrice);
            $('#ETH-MTL-Binance-bid').val(MTL.bidPrice);
            $('#ETH-MTL-Binance-sell').val(MTL.askPrice);
            //$('#ETH-MYST-Binance-bid').val(MYST.bidPrice);
            //$('#ETH-MYST-Binance-sell').val(MYST.askPrice);
            $('#ETH-NEO-Binance-bid').val(NEO.bidPrice);
            $('#ETH-NEO-Binance-sell').val(NEO.askPrice);
            //$('#ETH-NMR-Binance-bid').val(NMR.bidPrice);
            //$('#ETH-NMR-Binance-sell').val(NMR.askPrice);
            $('#ETH-OMG-Binance-bid').val(OMG.bidPrice);
            $('#ETH-OMG-Binance-sell').val(OMG.askPrice);
            //$('#ETH-PAY-Binance-bid').val(PAY.bidPrice);
            //$('#ETH-PAY-Binance-sell').val(PAY.askPrice);
            $('#ETH-POWR-Binance-bid').val(POWR.bidPrice);
            $('#ETH-POWR-Binance-sell').val(POWR.askPrice);
            //$('#ETH-PTOY-Binance-bid').val(PTOY.bidPrice);
            //$('#ETH-PTOY-Binance-sell').val(PTOY.askPrice);
            //$('#ETH-QRL-Binance-bid').val(QRL.bidPrice);
            //$('#ETH-QRL-Binance-sell').html(QRL.askPrice);
            $('#ETH-QTUM-Binance-bid').val(QTUM.bidPrice);
            $('#ETH-QTUM-Binance-sell').val(QTUM.askPrice);
            $('#ETH-RCN-Binance-bid').val(RCN.bidPrice);
            $('#ETH-RCN-Binance-sell').val(RCN.askPrice);
            //$('#ETH-REP-Binance-bid').val(REP.bidPrice);
            //$('#ETH-REP-Binance-sell').val(REP.askPrice);
            //$('#ETH-RLC-Binance-bid').val(RLC.bidPrice);
            //$('#ETH-RLC-Binance-sell').val(RLC.askPrice);
            $('#ETH-SALT-Binance-bid').val(SALT.bidPrice);
            $('#ETH-SALT-Binance-sell').val(SALT.askPrice);
            //$('#ETH-SC-Binance-bid').val(SC.bidPrice);
            //$('#ETH-SC-Binance-sell').val(SC.askPrice);
            $('#ETH-SNGLS-Binance-bid').val(SNGLS.bidPrice);
            $('#ETH-SNGLS-Binance-sell').val(SNGLS.askPrice);
            $('#ETH-SNT-Binance-bid').val(SNT.bidPrice);
            $('#ETH-SNT-Binance-sell').val(SNT.askPrice);
            $('#ETH-STORJ-Binance-bid').val(STORJ.bidPrice);
            $('#ETH-STORJ-Binance-sell').val(STORJ.askPrice);
            $('#ETH-STRAT-Binance-bid').val(STRAT.bidPrice);
            $('#ETH-STRAT-Binance-sell').val(STRAT.askPrice);
            //$('#ETH-TIME-Binance-bid').val(TIME.bidPrice);
            //$('#ETH-TIME-Binance-sell').val(TIME.askPrice);
            //$('#ETH-TIX-Binance-bid').val(TIX.bidPrice);
            //$('#ETH-TIX-Binance-sell').val(TIX.askPrice);
            //$('#ETH-TKN-Binance-bid').val(TKN.bidPrice);
            //$('#ETH-TKN-Binance-sell').val(TKN.askPrice);
            //$('#ETH-TRST-Binance-bid').val(TRST.bidPrice);
            //$('#ETH-TRST-Binance-sell').val(TRST.askPrice);
            $('#ETH-VIB-Binance-bid').val(VIB.bidPrice);
            $('#ETH-VIB-Binance-sell').val(VIB.askPrice);
            //$('#ETH-WAVES-Binance-bid').val(WAVES.bidPrice);
            //$('#ETH-WAVES-Binance-sell').val(WAVES.askPrice);
            //$('#ETH-WINGS-Binance-bid').val(WINGS.bidPrice);
            //$('#ETH-WINGS-Binance-sell').val(WINGS.askPrice);
            //$('#ETH-XEM-Binance-bid').val(XEM.bidPrice);
            //$('#ETH-XEM-Binance-sell').val(XEM.askPrice);
            $('#ETH-XLM-Binance-bid').val(XLM.bidPrice);
            $('#ETH-XLM-Binance-sell').val(XLM.askPrice);
            $('#ETH-XMR-Binance-bid').val(XMR.bidPrice);
            $('#ETH-XMR-Binance-sell').val(XMR.askPrice);
            $('#ETH-XRP-Binance-bid').val(XRP.bidPrice);
            $('#ETH-XRP-Binance-sell').val(XRP.askPrice);
            $('#ETH-ZEC-Binance-bid').val(ZEC.bidPrice);
            $('#ETH-ZEC-Binance-sell').val(ZEC.askPrice);
        },
        error: function() {
            alert('FAILURE!');
        }
    }); 
}

function liqui() {
    $.ajax({
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://api.liqui.io/api/3/ticker/adx_eth-ant_eth-bat_eth-bcc_eth-bnt_eth-cfi_eth-cvc_eth-dash_eth-dnt_eth-eng_eth-gno_eth-gnt_eth-gup_eth-ltc_eth-mana_eth-mco_eth-myst_eth-omg_eth-pay_eth-ptoy_eth-qrl_eth-rep_eth-rlc_eth-salt_eth-sngls_eth-snt_eth-storj_eth-time_eth-tkn_eth-trst_eth-waves_eth-wings_eth',
        success: function(coins) {
            //$('#ETH-1ST-Liqui-bid').html(coins.adx_eth.buy);
            //$('#ETH-1ST-Liqui-sell').html(coins.adx_eth.sell);
            //$('#ETH-ADA-Liqui-bid').html(coins.adx_eth.buy);
            //$('#ETH-ADA-Liqui-sell').html(coins.adx_eth.sell);
            //$('#ETH-ADT-Liqui-bid').html(coins.adx_eth.buy);
            //$('#ETH-ADT-Liqui-sell').html(coins.adx_eth.sell);
            $('#ETH-ADX-Liqui-bid').html(coins.adx_eth.buy);
            $('#ETH-ADX-Liqui-sell').html(coins.adx_eth.sell);
            $('#ETH-ANT-Liqui-bid').html(coins.ant_eth.buy);
            $('#ETH-ANT-Liqui-sell').html(coins.ant_eth.sell);
            $('#ETH-BAT-Liqui-bid').html(coins.bat_eth.buy);
            $('#ETH-BAT-Liqui-sell').html(coins.bat_eth.sell);
            $('#ETH-BCC-Liqui-bid').html(coins.bcc_eth.buy);
            $('#ETH-BCC-Liqui-sell').html(coins.bcc_eth.sell);
            $('#ETH-BNT-Liqui-bid').html(coins.bnt_eth.buy);
            $('#ETH-BNT-Liqui-sell').html(coins.bnt_eth.sell);
            //$('#ETH-BTG-Liqui-bid').html(coins.btg_eth.buy);
            //$('#ETH-BTG-Liqui-sell').html(coins.btg_eth.sell);
            //$('#ETH-BTS-Liqui-bid').html(coins.bts_eth.buy);
            //$('#ETH-BTS-Liqui-sell').html(coins.bts_eth.sell);
            $('#ETH-CFI-Liqui-bid').html(coins.cfi_eth.buy);
            $('#ETH-CFI-Liqui-sell').html(coins.cfi_eth.sell);
            //$('#ETH-CRB-Liqui-bid').html(coins.crb_eth.buy);
            //$('#ETH-CRB-Liqui-sell').html(coins.crb_eth.sell);
            $('#ETH-CVC-Liqui-bid').html(coins.cvc_eth.buy);
            $('#ETH-CVC-Liqui-sell').html(coins.cvc_eth.sell);
            $('#ETH-DASH-Liqui-bid').html(coins.dash_eth.buy);
            $('#ETH-DASH-Liqui-sell').html(coins.dash_eth.sell);
            //$('#ETH-DGB-Liqui-bid').html(coins.dgb_eth.buy);
            //$('#ETH-DGB-Liqui-sell').html(coins.dgb_eth.sell);
            //$('#ETH-DGD-Liqui-bid').html(coins.dgd_eth.buy);
            //$('#ETH-DGD-Liqui-sell').html(coins.dgd_eth.sell);
            $('#ETH-DNT-Liqui-bid').html(coins.dnt_eth.buy);
            $('#ETH-DNT-Liqui-sell').html(coins.dnt_eth.sell);
            $('#ETH-ENG-Liqui-bid').html(coins.eng_eth.buy);
            $('#ETH-ENG-Liqui-sell').html(coins.eng_eth.sell);
            //$('#ETH-ETC-Liqui-bid').html(coins.etc_eth.buy);
            //$('#ETH-ETC-Liqui-sell').html(coins.etc_eth.sell);
            //$('#ETH-FCT-Liqui-bid').html(coins.fct_eth.buy);
            //$('#ETH-FCT-Liqui-sell').html(coins.fct_eth.sell);
            //$('#ETH-FUN-Liqui-bid').html(coins.fun_eth.buy);
            //$('#ETH-FUN-Liqui-sell').html(coins.fun_eth.sell);
            $('#ETH-GNO-Liqui-bid').html(coins.gno_eth.buy);
            $('#ETH-GNO-Liqui-sell').html(coins.gno_eth.sell);
            $('#ETH-GNT-Liqui-bid').html(coins.gnt_eth.buy);
            $('#ETH-GNT-Liqui-sell').html(coins.gnt_eth.sell);
            $('#ETH-GUP-Liqui-bid').html(coins.gup_eth.buy);
            $('#ETH-GUP-Liqui-sell').html(coins.gup_eth.sell);
            //$('#ETH-HMQ-Liqui-bid').html(coins.hmq_eth.buy);
            //$('#ETH-HMQ-Liqui-sell').html(coins.hmq_eth.sell);
            //$('#ETH-LGD-Liqui-bid').html(coins.lgd_eth.buy);
            //$('#ETH-LGD-Liqui-sell').html(coins.lgd_eth.sell);
            $('#ETH-LTC-Liqui-bid').html(coins.ltc_eth.buy);
            $('#ETH-LTC-Liqui-sell').html(coins.ltc_eth.sell);
            //$('#ETH-LUN-Liqui-bid').html(coins.lun_eth.buy);
            //$('#ETH-LUN-Liqui-sell').html(coins.lun_eth.sell);
            $('#ETH-MANA-Liqui-bid').html(coins.mana_eth.buy);
            $('#ETH-MANA-Liqui-sell').html(coins.mana_eth.sell);
            $('#ETH-MCO-Liqui-bid').html(coins.mco_eth.buy);
            $('#ETH-MCO-Liqui-sell').html(coins.mco_eth.sell);
            //$('#ETH-MTL-Liqui-bid').html(coins.mtl_eth.buy);
            //$('#ETH-MTL-Liqui-sell').html(coins.mtl_eth.sell);
            $('#ETH-MYST-Liqui-bid').html(coins.myst_eth.buy);
            $('#ETH-MYST-Liqui-sell').html(coins.myst_eth.sell);
            //$('#ETH-NEO-Liqui-bid').html(coins.neo_eth.buy);
            //$('#ETH-NEO-Liqui-sell').html(coins.neo_eth.sell);
            //$('#ETH-NMR-Liqui-bid').html(coins.nmr_eth.buy);
            //$('#ETH-NMR-Liqui-sell').html(coins.nmr_eth.sell);
            $('#ETH-OMG-Liqui-bid').html(coins.omg_eth.buy);
            $('#ETH-OMG-Liqui-sell').html(coins.omg_eth.sell);
            $('#ETH-PAY-Liqui-bid').html(coins.pay_eth.buy);
            $('#ETH-PAY-Liqui-sell').html(coins.pay_eth.sell);
            //$('#ETH-POWR-Liqui-bid').html(coins.powr_eth.buy);
            //$('#ETH-POWR-Liqui-sell').html(coins.powr_eth.sell);
            $('#ETH-PTOY-Liqui-bid').html(coins.ptoy_eth.buy);
            $('#ETH-PTOY-Liqui-sell').html(coins.ptoy_eth.sell);
            $('#ETH-QRL-Liqui-bid').html(coins.qrl_eth.buy);
            $('#ETH-QRL-Liqui-sell').html(coins.qrl_eth.sell);
            //$('#ETH-QTUM-Liqui-bid').html(coins.qtum_eth.buy);
            //$('#ETH-QTUM-Liqui-sell').html(coins.qtum_eth.sell);
            //$('#ETH-RCN-Liqui-bid').html(coins.rcn_eth.buy);
            //$('#ETH-RCN-Liqui-sell').html(coins.rcn_eth.sell);
            $('#ETH-REP-Liqui-bid').html(coins.rep_eth.buy);
            $('#ETH-REP-Liqui-sell').html(coins.rep_eth.sell);
            $('#ETH-RLC-Liqui-bid').html(coins.rlc_eth.buy);
            $('#ETH-SALT-Liqui-sell').html(coins.salt_eth.sell);
            $('#ETH-SALT-Liqui-bid').html(coins.salt_eth.buy);
            $('#ETH-RLC-Liqui-sell').html(coins.rlc_eth.sell);
            //$('#ETH-SC-Liqui-bid').html(coins.sc_eth.buy);
            //$('#ETH-SC-Liqui-sell').html(coins.sc_eth.sell);
            $('#ETH-SNGLS-Liqui-bid').html(coins.sngls_eth.buy);
            $('#ETH-SNGLS-Liqui-sell').html(coins.sngls_eth.sell);
            $('#ETH-SNT-Liqui-bid').html(coins.snt_eth.buy);
            $('#ETH-SNT-Liqui-sell').html(coins.snt_eth.sell);
            $('#ETH-STORJ-Liqui-bid').html(coins.storj_eth.buy);
            $('#ETH-STORJ-Liqui-sell').html(coins.storj_eth.sell);
            //$('#ETH-STRAT-Liqui-bid').html(coins.strat_eth.buy);
            //$('#ETH-STRAT-Liqui-sell').html(coins.strat_eth.sell);
            $('#ETH-TIME-Liqui-bid').html(coins.time_eth.buy);
            $('#ETH-TIME-Liqui-sell').html(coins.time_eth.sell);
            //$('#ETH-TIX-Liqui-bid').html(coins.tix_eth.buy);
            //$('#ETH-TIX-Liqui-sell').html(coins.tix_eth.sell);
            $('#ETH-TKN-Liqui-bid').html(coins.tkn_eth.buy);
            $('#ETH-TKN-Liqui-sell').html(coins.tkn_eth.sell);
            $('#ETH-TRST-Liqui-bid').html(coins.trst_eth.buy);
            $('#ETH-TRST-Liqui-sell').html(coins.trst_eth.sell);
            //$('#ETH-VIB-Liqui-bid').html(coins.vib_eth.buy);
            //$('#ETH-VIB-Liqui-sell').html(coins.vib_eth.sell);
            $('#ETH-WAVES-Liqui-bid').html(coins.waves_eth.buy);
            $('#ETH-WAVES-Liqui-sell').html(coins.waves_eth.sell);
            $('#ETH-WINGS-Liqui-bid').html(coins.wings_eth.buy);
            $('#ETH-WINGS-Liqui-sell').html(coins.wings_eth.sell);
            //$('#ETH-XEM-Liqui-bid').html(coins.xem_eth.buy);
            //$('#ETH-XEM-Liqui-sell').html(coins.xem_eth.sell);
            //$('#ETH-XLM-Liqui-bid').html(coins.xlm_eth.buy);
            //$('#ETH-XLM-Liqui-sell').html(coins.xlm_eth.sell);
            //$('#ETH-XMR-Liqui-bid').html(coins.xmr_eth.buy);
            //$('#ETH-XMR-Liqui-sell').html(coins.xmr_eth.sell);
            //$('#ETH-XRP-Liqui-bid').html(coins.xrp_eth.buy);
            //$('#ETH-XRP-Liqui-sell').html(coins.xrp_eth.sell);
            //$('#ETH-ZEC-Liqui-bid').html(coins.zec_eth.buy);
            //$('#ETH-ZEC-Liqui-sell').html(coins.zec_eth.sell);

            //$('#ETH-1ST-Liqui-bid').val(coins.adx_eth.buy);
            //$('#ETH-1ST-Liqui-sell').val(coins.adx_eth.sell);
            //$('#ETH-ADA-Liqui-bid').val(coins.adx_eth.buy);
            //$('#ETH-ADA-Liqui-sell').val(coins.adx_eth.sell);
            //$('#ETH-ADT-Liqui-bid').val(coins.adx_eth.buy);
            //$('#ETH-ADT-Liqui-sell').val(coins.adx_eth.sell);
            $('#ETH-ADX-Liqui-bid').val(coins.adx_eth.buy);
            $('#ETH-ADX-Liqui-sell').val(coins.adx_eth.sell);
            $('#ETH-ANT-Liqui-bid').val(coins.ant_eth.buy);
            $('#ETH-ANT-Liqui-sell').val(coins.ant_eth.sell);
            $('#ETH-BAT-Liqui-bid').val(coins.bat_eth.buy);
            $('#ETH-BAT-Liqui-sell').val(coins.bat_eth.sell);
            $('#ETH-BCC-Liqui-bid').val(coins.bcc_eth.buy);
            $('#ETH-BCC-Liqui-sell').val(coins.bcc_eth.sell);
            $('#ETH-BNT-Liqui-bid').val(coins.bnt_eth.buy);
            $('#ETH-BNT-Liqui-sell').val(coins.bnt_eth.sell);
            //$('#ETH-BTG-Liqui-bid').val(coins.btg_eth.buy);
            //$('#ETH-BTG-Liqui-sell').val(coins.btg_eth.sell);
            //$('#ETH-BTS-Liqui-bid').val(coins.bts_eth.buy);
            //$('#ETH-BTS-Liqui-sell').val(coins.bts_eth.sell);
            $('#ETH-CFI-Liqui-bid').val(coins.cfi_eth.buy);
            $('#ETH-CFI-Liqui-sell').val(coins.cfi_eth.sell);
            //$('#ETH-CRB-Liqui-bid').val(coins.crb_eth.buy);
            //$('#ETH-CRB-Liqui-sell').val(coins.crb_eth.sell);
            $('#ETH-CVC-Liqui-bid').val(coins.cvc_eth.buy);
            $('#ETH-CVC-Liqui-sell').val(coins.cvc_eth.sell);
            $('#ETH-DASH-Liqui-bid').val(coins.dash_eth.buy);
            $('#ETH-DASH-Liqui-sell').val(coins.dash_eth.sell);
            //$('#ETH-DGB-Liqui-bid').val(coins.dgb_eth.buy);
            //$('#ETH-DGB-Liqui-sell').val(coins.dgb_eth.sell);
            //$('#ETH-DGD-Liqui-bid').val(coins.dgd_eth.buy);
            //$('#ETH-DGD-Liqui-sell').val(coins.dgd_eth.sell);
            $('#ETH-DNT-Liqui-bid').val(coins.dnt_eth.buy);
            $('#ETH-DNT-Liqui-sell').val(coins.dnt_eth.sell);
            $('#ETH-ENG-Liqui-bid').val(coins.eng_eth.buy);
            $('#ETH-ENG-Liqui-sell').val(coins.eng_eth.sell);
            //$('#ETH-ETC-Liqui-bid').val(coins.etc_eth.buy);
            //$('#ETH-ETC-Liqui-sell').val(coins.etc_eth.sell);
            //$('#ETH-FCT-Liqui-bid').val(coins.fct_eth.buy);
            //$('#ETH-FCT-Liqui-sell').val(coins.fct_eth.sell);
            //$('#ETH-FUN-Liqui-bid').val(coins.fun_eth.buy);
            //$('#ETH-FUN-Liqui-sell').val(coins.fun_eth.sell);
            $('#ETH-GNO-Liqui-bid').val(coins.gno_eth.buy);
            $('#ETH-GNO-Liqui-sell').val(coins.gno_eth.sell);
            $('#ETH-GNT-Liqui-bid').val(coins.gnt_eth.buy);
            $('#ETH-GNT-Liqui-sell').val(coins.gnt_eth.sell);
            $('#ETH-GUP-Liqui-bid').val(coins.gup_eth.buy);
            $('#ETH-GUP-Liqui-sell').val(coins.gup_eth.sell);
            //$('#ETH-HMQ-Liqui-bid').val(coins.hmq_eth.buy);
            //$('#ETH-HMQ-Liqui-sell').val(coins.hmq_eth.sell);
            //$('#ETH-LGD-Liqui-bid').val(coins.lgd_eth.buy);
            //$('#ETH-LGD-Liqui-sell').val(coins.lgd_eth.sell);
            $('#ETH-LTC-Liqui-bid').val(coins.ltc_eth.buy);
            $('#ETH-LTC-Liqui-sell').val(coins.ltc_eth.sell);
            //$('#ETH-LUN-Liqui-bid').val(coins.lun_eth.buy);
            //$('#ETH-LUN-Liqui-sell').val(coins.lun_eth.sell);
            $('#ETH-MANA-Liqui-bid').val(coins.mana_eth.buy);
            $('#ETH-MANA-Liqui-sell').val(coins.mana_eth.sell);
            $('#ETH-MCO-Liqui-bid').val(coins.mco_eth.buy);
            $('#ETH-MCO-Liqui-sell').val(coins.mco_eth.sell);
            //$('#ETH-MTL-Liqui-bid').val(coins.mtl_eth.buy);
            //$('#ETH-MTL-Liqui-sell').val(coins.mtl_eth.sell);
            $('#ETH-MYST-Liqui-bid').val(coins.myst_eth.buy);
            $('#ETH-MYST-Liqui-sell').val(coins.myst_eth.sell);
            //$('#ETH-NEO-Liqui-bid').val(coins.neo_eth.buy);
            //$('#ETH-NEO-Liqui-sell').val(coins.neo_eth.sell);
            //$('#ETH-NMR-Liqui-bid').val(coins.nmr_eth.buy);
            //$('#ETH-NMR-Liqui-sell').val(coins.nmr_eth.sell);
            $('#ETH-OMG-Liqui-bid').val(coins.omg_eth.buy);
            $('#ETH-OMG-Liqui-sell').val(coins.omg_eth.sell);
            $('#ETH-PAY-Liqui-bid').val(coins.pay_eth.buy);
            $('#ETH-PAY-Liqui-sell').val(coins.pay_eth.sell);
            //$('#ETH-POWR-Liqui-bid').val(coins.powr_eth.buy);
            //$('#ETH-POWR-Liqui-sell').val(coins.powr_eth.sell);
            $('#ETH-PTOY-Liqui-bid').val(coins.ptoy_eth.buy);
            $('#ETH-PTOY-Liqui-sell').val(coins.ptoy_eth.sell);
            $('#ETH-QRL-Liqui-bid').val(coins.qrl_eth.buy);
            $('#ETH-QRL-Liqui-sell').val(coins.qrl_eth.sell);
            //$('#ETH-QTUM-Liqui-bid').val(coins.qtum_eth.buy);
            //$('#ETH-QTUM-Liqui-sell').val(coins.qtum_eth.sell);
            //$('#ETH-RCN-Liqui-bid').val(coins.rcn_eth.buy);
            //$('#ETH-RCN-Liqui-sell').val(coins.rcn_eth.sell);
            $('#ETH-REP-Liqui-bid').val(coins.rep_eth.buy);
            $('#ETH-REP-Liqui-sell').val(coins.rep_eth.sell);
            $('#ETH-RLC-Liqui-bid').val(coins.rlc_eth.buy);
            $('#ETH-SALT-Liqui-sell').val(coins.salt_eth.sell);
            $('#ETH-SALT-Liqui-bid').val(coins.salt_eth.buy);
            $('#ETH-RLC-Liqui-sell').val(coins.rlc_eth.sell);
            //$('#ETH-SC-Liqui-bid').val(coins.sc_eth.buy);
            //$('#ETH-SC-Liqui-sell').val(coins.sc_eth.sell);
            $('#ETH-SNGLS-Liqui-bid').val(coins.sngls_eth.buy);
            $('#ETH-SNGLS-Liqui-sell').val(coins.sngls_eth.sell);
            $('#ETH-SNT-Liqui-bid').val(coins.snt_eth.buy);
            $('#ETH-SNT-Liqui-sell').val(coins.snt_eth.sell);
            $('#ETH-STORJ-Liqui-bid').val(coins.storj_eth.buy);
            $('#ETH-STORJ-Liqui-sell').val(coins.storj_eth.sell);
            //$('#ETH-STRAT-Liqui-bid').val(coins.strat_eth.buy);
            //$('#ETH-STRAT-Liqui-sell').val(coins.strat_eth.sell);
            $('#ETH-TIME-Liqui-bid').val(coins.time_eth.buy);
            $('#ETH-TIME-Liqui-sell').val(coins.time_eth.sell);
            //$('#ETH-TIX-Liqui-bid').val(coins.tix_eth.buy);
            //$('#ETH-TIX-Liqui-sell').val(coins.tix_eth.sell);
            $('#ETH-TKN-Liqui-bid').val(coins.tkn_eth.buy);
            $('#ETH-TKN-Liqui-sell').val(coins.tkn_eth.sell);
            $('#ETH-TRST-Liqui-bid').val(coins.trst_eth.buy);
            $('#ETH-TRST-Liqui-sell').val(coins.trst_eth.sell);
            //$('#ETH-VIB-Liqui-bid').val(coins.vib_eth.buy);
            //$('#ETH-VIB-Liqui-sell').val(coins.vib_eth.sell);
            $('#ETH-WAVES-Liqui-bid').val(coins.waves_eth.buy);
            $('#ETH-WAVES-Liqui-sell').val(coins.waves_eth.sell);
            $('#ETH-WINGS-Liqui-bid').val(coins.wings_eth.buy);
            $('#ETH-WINGS-Liqui-sell').val(coins.wings_eth.sell);
            //$('#ETH-XEM-Liqui-bid').val(coins.xem_eth.buy);
            //$('#ETH-XEM-Liqui-sell').val(coins.xem_eth.sell);
            //$('#ETH-XLM-Liqui-bid').val(coins.xlm_eth.buy);
            //$('#ETH-XLM-Liqui-sell').val(coins.xlm_eth.sell);
            //$('#ETH-XMR-Liqui-bid').val(coins.xmr_eth.buy);
            //$('#ETH-XMR-Liqui-sell').val(coins.xmr_eth.sell);
            //$('#ETH-XRP-Liqui-bid').val(coins.xrp_eth.buy);
            //$('#ETH-XRP-Liqui-sell').val(coins.xrp_eth.sell);
            //$('#ETH-ZEC-Liqui-bid').val(coins.zec_eth.buy);
            //$('#ETH-ZEC-Liqui-sell').val(coins.zec_eth.sell);
        },
        error: function() {
            alert('FAILURE!');
        }
    });  
}

/*function bitfinex() {
    $.ajax({
        type: 'GET',
        url: 'aici vine url',
        success: function(coins) {
            $('#Omg-Bitfinex').html(coins.omg_eth.buy + ' - ' + coins.omg_eth.sell);
            $('#Req-Bitfinex').html(coins.req_eth.buy + ' - ' + coins.req_eth.sell);
            $('#Req-Bitfinex').html(coins.mtl_eth.buy + ' - ' + coins.mtl_eth.sell);
        },
        error: function() {
            alert('FAILURE!');
        }
    });
}*/

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i]["MarketName"] === nameKey) {
            return myArray[i];
        }
    }
}

function searchBinance(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i]["symbol"] === nameKey) {
            return myArray[i];
        }
    }
}

function hideRows() {

}

function myTimer() {
    getNewCoins();
}

var myVar = setInterval(myTimer, 180000); 


function getNewCoins() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://bittrex.com/api/v1.1/public/getmarketsummaries',
        type: 'GET',
        success: function(coins) {
            var markets = [];
            $.each(coins.result, function(index, value) {
                if(true) {
                    markets.push(value.MarketName);
                }
            })
            var currentCoins = markets;
            var newCoins = [];
            for(var i = 0; i < currentCoins.length; i++) {
                if(!(savedCoins.contains(currentCoins[i]))){
                    newCoins.push(currentCoins[i]);
                }
            }
            for(var i = 0; i < newCoins.length; i++) {
                $("#newCoins").empty();
                $("#newCoins").val(newCoins);
            }
            if(newCoins.length > 0) {
                alert("New coin!!!");
            }
        },
        error: function() {
            alert('FAILURE!');
        }
    }); 
}

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};

function hideUnimportant() {
    if(!(($('#ETH-1ST-Bittrex-bid').val() > $('#ETH-1ST-Binance-sell').val() && $('#ETH-1ST-Binance-sell').val() > 0) || ($('#ETH-1ST-Bittrex-bid').val() > $('#ETH-1ST-Liqui-sell').val() && $('#ETH-1ST-Liqui-sell').val() > 0) || ($('#ETH-1ST-Binance-bid').val() > $('#ETH-1ST-Bittrex-sell').val() && $('#ETH-1ST-Bittrex-sell').val() > 0) || ($('#ETH-1ST-Binance-bid').val() > $('#ETH-1ST-Liqui-sell').val() && $('#ETH-1ST-Liqui-sell').val() > 0) || ($('#ETH-1ST-Liqui-bid').val() > $('#ETH-1ST-Bittrex-sell').val() && $('#ETH-1ST-Bittrex-sell').val() > 0) || ($('#ETH-1ST-Liqui-bid').val() > $('#ETH-1ST-Binance-sell').val() && $('#ETH-1ST-Binance-sell').val() > 0))) {
        $('#ETH-1ST').hide();
    }
    if(!(($('#ETH-ADA-Bittrex-bid').val() > $('#ETH-ADA-Binance-sell').val() && $('#ETH-ADA-Binance-sell').val() > 0) || ($('#ETH-ADA-Bittrex-bid').val() > $('#ETH-ADA-Liqui-sell').val() && $('#ETH-ADA-Liqui-sell').val() > 0) || ($('#ETH-ADA-Binance-bid').val() > $('#ETH-ADA-Bittrex-sell').val() && $('#ETH-ADA-Bittrex-sell').val() > 0) || ($('#ETH-ADA-Binance-bid').val() > $('#ETH-ADA-Liqui-sell').val() && $('#ETH-ADA-Liqui-sell').val() > 0) || ($('#ETH-ADA-Liqui-bid').val() > $('#ETH-ADA-Bittrex-sell').val() && $('#ETH-ADA-Bittrex-sell').val() > 0) || ($('#ETH-ADA-Liqui-bid').val() > $('#ETH-ADA-Binance-sell').val() && $('#ETH-ADA-Binance-sell').val() > 0))) {
        $('#ETH-ADA').hide();
    }
    if(!(($('#ETH-ADT-Bittrex-bid').val() > $('#ETH-ADT-Binance-sell').val() && $('#ETH-ADT-Binance-sell').val() > 0) || ($('#ETH-ADT-Bittrex-bid').val() > $('#ETH-ADT-Liqui-sell').val() && $('#ETH-ADT-Liqui-sell').val() > 0) || ($('#ETH-ADT-Binance-bid').val() > $('#ETH-ADT-Bittrex-sell').val() && $('#ETH-ADT-Bittrex-sell').val() > 0) || ($('#ETH-ADT-Binance-bid').val() > $('#ETH-ADT-Liqui-sell').val() && $('#ETH-ADT-Liqui-sell').val() > 0) || ($('#ETH-ADT-Liqui-bid').val() > $('#ETH-ADT-Bittrex-sell').val() && $('#ETH-ADT-Bittrex-sell').val() > 0) || ($('#ETH-ADT-Liqui-bid').val() > $('#ETH-ADT-Binance-sell').val() && $('#ETH-ADT-Binance-sell').val() > 0))) {
        $('#ETH-ADT').hide();
    }
    if(!(($('#ETH-ADX-Bittrex-bid').val() > $('#ETH-ADX-Binance-sell').val() && $('#ETH-ADX-Binance-sell').val() > 0) || ($('#ETH-ADX-Bittrex-bid').val() > $('#ETH-ADX-Liqui-sell').val() && $('#ETH-ADX-Liqui-sell').val() > 0) || ($('#ETH-ADX-Binance-bid').val() > $('#ETH-ADX-Bittrex-sell').val() && $('#ETH-ADX-Bittrex-sell').val() > 0) || ($('#ETH-ADX-Binance-bid').val() > $('#ETH-ADX-Liqui-sell').val() && $('#ETH-ADX-Liqui-sell').val() > 0) || ($('#ETH-ADX-Liqui-bid').val() > $('#ETH-ADX-Bittrex-sell').val() && $('#ETH-ADX-Bittrex-sell').val() > 0) || ($('#ETH-ADX-Liqui-bid').val() > $('#ETH-ADX-Binance-sell').val() && $('#ETH-ADX-Binance-sell').val() > 0))) {
        $('#ETH-ADX').hide();
    }
    if(!(($('#ETH-ANT-Bittrex-bid').val() > $('#ETH-ANT-Binance-sell').val() && $('#ETH-ANT-Binance-sell').val() > 0) || ($('#ETH-ANT-Bittrex-bid').val() > $('#ETH-ANT-Liqui-sell').val() && $('#ETH-ANT-Liqui-sell').val() > 0) || ($('#ETH-ANT-Binance-bid').val() > $('#ETH-ANT-Bittrex-sell').val() && $('#ETH-ANT-Bittrex-sell').val() > 0) || ($('#ETH-ANT-Binance-bid').val() > $('#ETH-ANT-Liqui-sell').val() && $('#ETH-ANT-Liqui-sell').val() > 0) || ($('#ETH-ANT-Liqui-bid').val() > $('#ETH-ANT-Bittrex-sell').val() && $('#ETH-ANT-Bittrex-sell').val() > 0) || ($('#ETH-ANT-Liqui-bid').val() > $('#ETH-ANT-Binance-sell').val() && $('#ETH-ANT-Binance-sell').val() > 0))) {
        $('#ETH-ANT').hide();
    }
    if(!(($('#ETH-BAT-Bittrex-bid').val() > $('#ETH-BAT-Binance-sell').val() && $('#ETH-BAT-Binance-sell').val() > 0) || ($('#ETH-BAT-Bittrex-bid').val() > $('#ETH-BAT-Liqui-sell').val() && $('#ETH-BAT-Liqui-sell').val() > 0) || ($('#ETH-BAT-Binance-bid').val() > $('#ETH-BAT-Bittrex-sell').val() && $('#ETH-BAT-Bittrex-sell').val() > 0) || ($('#ETH-BAT-Binance-bid').val() > $('#ETH-BAT-Liqui-sell').val() && $('#ETH-BAT-Liqui-sell').val() > 0) || ($('#ETH-BAT-Liqui-bid').val() > $('#ETH-BAT-Bittrex-sell').val() && $('#ETH-BAT-Bittrex-sell').val() > 0) || ($('#ETH-BAT-Liqui-bid').val() > $('#ETH-BAT-Binance-sell').val() && $('#ETH-BAT-Binance-sell').val() > 0))) {
        $('#ETH-BAT').hide();
    }
    if(!(($('#ETH-BCC-Bittrex-bid').val() > $('#ETH-BCC-Binance-sell').val() && $('#ETH-BCC-Binance-sell').val() > 0) || ($('#ETH-BCC-Bittrex-bid').val() > $('#ETH-BCC-Liqui-sell').val() && $('#ETH-BCC-Liqui-sell').val() > 0) || ($('#ETH-BCC-Binance-bid').val() > $('#ETH-BCC-Bittrex-sell').val() && $('#ETH-BCC-Bittrex-sell').val() > 0) || ($('#ETH-BCC-Binance-bid').val() > $('#ETH-BCC-Liqui-sell').val() && $('#ETH-BCC-Liqui-sell').val() > 0) || ($('#ETH-BCC-Liqui-bid').val() > $('#ETH-BCC-Bittrex-sell').val() && $('#ETH-BCC-Bittrex-sell').val() > 0) || ($('#ETH-BCC-Liqui-bid').val() > $('#ETH-BCC-Binance-sell').val() && $('#ETH-BCC-Binance-sell').val() > 0))) {
        $('#ETH-BCC').hide();
    }
    if(!(($('#ETH-BNT-Bittrex-bid').val() > $('#ETH-BNT-Binance-sell').val() && $('#ETH-BNT-Binance-sell').val() > 0) || ($('#ETH-BNT-Bittrex-bid').val() > $('#ETH-BNT-Liqui-sell').val() && $('#ETH-BNT-Liqui-sell').val() > 0) || ($('#ETH-BNT-Binance-bid').val() > $('#ETH-BNT-Bittrex-sell').val() && $('#ETH-BNT-Bittrex-sell').val() > 0) || ($('#ETH-BNT-Binance-bid').val() > $('#ETH-BNT-Liqui-sell').val() && $('#ETH-BNT-Liqui-sell').val() > 0) || ($('#ETH-BNT-Liqui-bid').val() > $('#ETH-BNT-Bittrex-sell').val() && $('#ETH-BNT-Bittrex-sell').val() > 0) || ($('#ETH-BNT-Liqui-bid').val() > $('#ETH-BNT-Binance-sell').val() && $('#ETH-BNT-Binance-sell').val() > 0))) {
        $('#ETH-BNT').hide();
    }
    if(!(($('#ETH-BTG-Bittrex-bid').val() > $('#ETH-BTG-Binance-sell').val() && $('#ETH-BTG-Binance-sell').val() > 0) || ($('#ETH-BTG-Bittrex-bid').val() > $('#ETH-BTG-Liqui-sell').val() && $('#ETH-BTG-Liqui-sell').val() > 0) || ($('#ETH-BTG-Binance-bid').val() > $('#ETH-BTG-Bittrex-sell').val() && $('#ETH-BTG-Bittrex-sell').val() > 0) || ($('#ETH-BTG-Binance-bid').val() > $('#ETH-BTG-Liqui-sell').val() && $('#ETH-BTG-Liqui-sell').val() > 0) || ($('#ETH-BTG-Liqui-bid').val() > $('#ETH-BTG-Bittrex-sell').val() && $('#ETH-BTG-Bittrex-sell').val() > 0) || ($('#ETH-BTG-Liqui-bid').val() > $('#ETH-BTG-Binance-sell').val() && $('#ETH-BTG-Binance-sell').val() > 0))) {
        $('#ETH-BTG').hide();
    }
    if(!(($('#ETH-BTS-Bittrex-bid').val() > $('#ETH-BTS-Binance-sell').val() && $('#ETH-BTS-Binance-sell').val() > 0) || ($('#ETH-BTS-Bittrex-bid').val() > $('#ETH-BTS-Liqui-sell').val() && $('#ETH-BTS-Liqui-sell').val() > 0) || ($('#ETH-BTS-Binance-bid').val() > $('#ETH-BTS-Bittrex-sell').val() && $('#ETH-BTS-Bittrex-sell').val() > 0) || ($('#ETH-BTS-Binance-bid').val() > $('#ETH-BTS-Liqui-sell').val() && $('#ETH-BTS-Liqui-sell').val() > 0) || ($('#ETH-BTS-Liqui-bid').val() > $('#ETH-BTS-Bittrex-sell').val() && $('#ETH-BTS-Bittrex-sell').val() > 0) || ($('#ETH-BTS-Liqui-bid').val() > $('#ETH-BTS-Binance-sell').val() && $('#ETH-BTS-Binance-sell').val() > 0))) {
        $('#ETH-BTS').hide();
    }
    if(!(($('#ETH-CFI-Bittrex-bid').val() > $('#ETH-CFI-Binance-sell').val() && $('#ETH-CFI-Binance-sell').val() > 0) || ($('#ETH-CFI-Bittrex-bid').val() > $('#ETH-CFI-Liqui-sell').val() && $('#ETH-CFI-Liqui-sell').val() > 0) || ($('#ETH-CFI-Binance-bid').val() > $('#ETH-CFI-Bittrex-sell').val() && $('#ETH-CFI-Bittrex-sell').val() > 0) || ($('#ETH-CFI-Binance-bid').val() > $('#ETH-CFI-Liqui-sell').val() && $('#ETH-CFI-Liqui-sell').val() > 0) || ($('#ETH-CFI-Liqui-bid').val() > $('#ETH-CFI-Bittrex-sell').val() && $('#ETH-CFI-Bittrex-sell').val() > 0) || ($('#ETH-CFI-Liqui-bid').val() > $('#ETH-CFI-Binance-sell').val() && $('#ETH-CFI-Binance-sell').val() > 0))) {
        $('#ETH-CFI').hide();
    }
    if(!(($('#ETH-CRB-Bittrex-bid').val() > $('#ETH-CRB-Binance-sell').val() && $('#ETH-CRB-Binance-sell').val() > 0) || ($('#ETH-CRB-Bittrex-bid').val() > $('#ETH-CRB-Liqui-sell').val() && $('#ETH-CRB-Liqui-sell').val() > 0) || ($('#ETH-CRB-Binance-bid').val() > $('#ETH-CRB-Bittrex-sell').val() && $('#ETH-CRB-Bittrex-sell').val() > 0) || ($('#ETH-CRB-Binance-bid').val() > $('#ETH-CRB-Liqui-sell').val() && $('#ETH-CRB-Liqui-sell').val() > 0) || ($('#ETH-CRB-Liqui-bid').val() > $('#ETH-CRB-Bittrex-sell').val() && $('#ETH-CRB-Bittrex-sell').val() > 0) || ($('#ETH-CRB-Liqui-bid').val() > $('#ETH-CRB-Binance-sell').val() && $('#ETH-CRB-Binance-sell').val() > 0))) {
        $('#ETH-CRB').hide();
    }
    if(!(($('#ETH-CVC-Bittrex-bid').val() > $('#ETH-CVC-Binance-sell').val() && $('#ETH-CVC-Binance-sell').val() > 0) || ($('#ETH-CVC-Bittrex-bid').val() > $('#ETH-CVC-Liqui-sell').val() && $('#ETH-CVC-Liqui-sell').val() > 0) || ($('#ETH-CVC-Binance-bid').val() > $('#ETH-CVC-Bittrex-sell').val() && $('#ETH-CVC-Bittrex-sell').val() > 0) || ($('#ETH-CVC-Binance-bid').val() > $('#ETH-CVC-Liqui-sell').val() && $('#ETH-CVC-Liqui-sell').val() > 0) || ($('#ETH-CVC-Liqui-bid').val() > $('#ETH-CVC-Bittrex-sell').val() && $('#ETH-CVC-Bittrex-sell').val() > 0) || ($('#ETH-CVC-Liqui-bid').val() > $('#ETH-CVC-Binance-sell').val() && $('#ETH-CVC-Binance-sell').val() > 0))) {
        $('#ETH-CVC').hide();
    }
    if(!(($('#ETH-DASH-Bittrex-bid').val() > $('#ETH-DASH-Binance-sell').val() && $('#ETH-DASH-Binance-sell').val() > 0) || ($('#ETH-DASH-Bittrex-bid').val() > $('#ETH-DASH-Liqui-sell').val() && $('#ETH-DASH-Liqui-sell').val() > 0) || ($('#ETH-DASH-Binance-bid').val() > $('#ETH-DASH-Bittrex-sell').val() && $('#ETH-DASH-Bittrex-sell').val() > 0) || ($('#ETH-DASH-Binance-bid').val() > $('#ETH-DASH-Liqui-sell').val() && $('#ETH-DASH-Liqui-sell').val() > 0) || ($('#ETH-DASH-Liqui-bid').val() > $('#ETH-DASH-Bittrex-sell').val() && $('#ETH-DASH-Bittrex-sell').val() > 0) || ($('#ETH-DASH-Liqui-bid').val() > $('#ETH-DASH-Binance-sell').val() && $('#ETH-DASH-Binance-sell').val() > 0))) {
        $('#ETH-DASH').hide();
    }
    if(!(($('#ETH-DGB-Bittrex-bid').val() > $('#ETH-DGB-Binance-sell').val() && $('#ETH-DGB-Binance-sell').val() > 0) || ($('#ETH-DGB-Bittrex-bid').val() > $('#ETH-DGB-Liqui-sell').val() && $('#ETH-DGB-Liqui-sell').val() > 0) || ($('#ETH-DGB-Binance-bid').val() > $('#ETH-DGB-Bittrex-sell').val() && $('#ETH-DGB-Bittrex-sell').val() > 0) || ($('#ETH-DGB-Binance-bid').val() > $('#ETH-DGB-Liqui-sell').val() && $('#ETH-DGB-Liqui-sell').val() > 0) || ($('#ETH-DGB-Liqui-bid').val() > $('#ETH-DGB-Bittrex-sell').val() && $('#ETH-DGB-Bittrex-sell').val() > 0) || ($('#ETH-DGB-Liqui-bid').val() > $('#ETH-DGB-Binance-sell').val() && $('#ETH-DGB-Binance-sell').val() > 0))) {
        $('#ETH-DGB').hide();
    }
    if(!(($('#ETH-DGD-Bittrex-bid').val() > $('#ETH-DGD-Binance-sell').val() && $('#ETH-DGD-Binance-sell').val() > 0) || ($('#ETH-DGD-Bittrex-bid').val() > $('#ETH-DGD-Liqui-sell').val() && $('#ETH-DGD-Liqui-sell').val() > 0) || ($('#ETH-DGD-Binance-bid').val() > $('#ETH-DGD-Bittrex-sell').val() && $('#ETH-DGD-Bittrex-sell').val() > 0) || ($('#ETH-DGD-Binance-bid').val() > $('#ETH-DGD-Liqui-sell').val() && $('#ETH-DGD-Liqui-sell').val() > 0) || ($('#ETH-DGD-Liqui-bid').val() > $('#ETH-DGD-Bittrex-sell').val() && $('#ETH-DGD-Bittrex-sell').val() > 0) || ($('#ETH-DGD-Liqui-bid').val() > $('#ETH-DGD-Binance-sell').val() && $('#ETH-DGD-Binance-sell').val() > 0))) {
        $('#ETH-DGD').hide();
    }
    if(!(($('#ETH-DNT-Bittrex-bid').val() > $('#ETH-DNT-Binance-sell').val() && $('#ETH-DNT-Binance-sell').val() > 0) || ($('#ETH-DNT-Bittrex-bid').val() > $('#ETH-DNT-Liqui-sell').val() && $('#ETH-DNT-Liqui-sell').val() > 0) || ($('#ETH-DNT-Binance-bid').val() > $('#ETH-DNT-Bittrex-sell').val() && $('#ETH-DNT-Bittrex-sell').val() > 0) || ($('#ETH-DNT-Binance-bid').val() > $('#ETH-DNT-Liqui-sell').val() && $('#ETH-DNT-Liqui-sell').val() > 0) || ($('#ETH-DNT-Liqui-bid').val() > $('#ETH-DNT-Bittrex-sell').val() && $('#ETH-DNT-Bittrex-sell').val() > 0) || ($('#ETH-DNT-Liqui-bid').val() > $('#ETH-DNT-Binance-sell').val() && $('#ETH-DNT-Binance-sell').val() > 0))) {
        $('#ETH-DNT').hide();
    }
    if(!(($('#ETH-ENG-Bittrex-bid').val() > $('#ETH-ENG-Binance-sell').val() && $('#ETH-ENG-Binance-sell').val() > 0) || ($('#ETH-ENG-Bittrex-bid').val() > $('#ETH-ENG-Liqui-sell').val() && $('#ETH-ENG-Liqui-sell').val() > 0) || ($('#ETH-ENG-Binance-bid').val() > $('#ETH-ENG-Bittrex-sell').val() && $('#ETH-ENG-Bittrex-sell').val() > 0) || ($('#ETH-ENG-Binance-bid').val() > $('#ETH-ENG-Liqui-sell').val() && $('#ETH-ENG-Liqui-sell').val() > 0) || ($('#ETH-ENG-Liqui-bid').val() > $('#ETH-ENG-Bittrex-sell').val() && $('#ETH-ENG-Bittrex-sell').val() > 0) || ($('#ETH-ENG-Liqui-bid').val() > $('#ETH-ENG-Binance-sell').val() && $('#ETH-ENG-Binance-sell').val() > 0))) {
        $('#ETH-ENG').hide();
    }
    if(!(($('#ETH-ETC-Bittrex-bid').val() > $('#ETH-ETC-Binance-sell').val() && $('#ETH-ETC-Binance-sell').val() > 0) || ($('#ETH-ETC-Bittrex-bid').val() > $('#ETH-ETC-Liqui-sell').val() && $('#ETH-ETC-Liqui-sell').val() > 0) || ($('#ETH-ETC-Binance-bid').val() > $('#ETH-ETC-Bittrex-sell').val() && $('#ETH-ETC-Bittrex-sell').val() > 0) || ($('#ETH-ETC-Binance-bid').val() > $('#ETH-ETC-Liqui-sell').val() && $('#ETH-ETC-Liqui-sell').val() > 0) || ($('#ETH-ETC-Liqui-bid').val() > $('#ETH-ETC-Bittrex-sell').val() && $('#ETH-ETC-Bittrex-sell').val() > 0) || ($('#ETH-ETC-Liqui-bid').val() > $('#ETH-ETC-Binance-sell').val() && $('#ETH-ETC-Binance-sell').val() > 0))) {
        $('#ETH-ETC').hide();
    }
    if(!(($('#ETH-FCT-Bittrex-bid').val() > $('#ETH-FCT-Binance-sell').val() && $('#ETH-FCT-Binance-sell').val() > 0) || ($('#ETH-FCT-Bittrex-bid').val() > $('#ETH-FCT-Liqui-sell').val() && $('#ETH-FCT-Liqui-sell').val() > 0) || ($('#ETH-FCT-Binance-bid').val() > $('#ETH-FCT-Bittrex-sell').val() && $('#ETH-FCT-Bittrex-sell').val() > 0) || ($('#ETH-FCT-Binance-bid').val() > $('#ETH-FCT-Liqui-sell').val() && $('#ETH-FCT-Liqui-sell').val() > 0) || ($('#ETH-FCT-Liqui-bid').val() > $('#ETH-FCT-Bittrex-sell').val() && $('#ETH-FCT-Bittrex-sell').val() > 0) || ($('#ETH-FCT-Liqui-bid').val() > $('#ETH-FCT-Binance-sell').val() && $('#ETH-FCT-Binance-sell').val() > 0))) {
        $('#ETH-FCT').hide();
    }
    if(!(($('#ETH-FUN-Bittrex-bid').val() > $('#ETH-FUN-Binance-sell').val() && $('#ETH-FUN-Binance-sell').val() > 0) || ($('#ETH-FUN-Bittrex-bid').val() > $('#ETH-FUN-Liqui-sell').val() && $('#ETH-FUN-Liqui-sell').val() > 0) || ($('#ETH-FUN-Binance-bid').val() > $('#ETH-FUN-Bittrex-sell').val() && $('#ETH-FUN-Bittrex-sell').val() > 0) || ($('#ETH-FUN-Binance-bid').val() > $('#ETH-FUN-Liqui-sell').val() && $('#ETH-FUN-Liqui-sell').val() > 0) || ($('#ETH-FUN-Liqui-bid').val() > $('#ETH-FUN-Bittrex-sell').val() && $('#ETH-FUN-Bittrex-sell').val() > 0) || ($('#ETH-FUN-Liqui-bid').val() > $('#ETH-FUN-Binance-sell').val() && $('#ETH-FUN-Binance-sell').val() > 0))) {
        $('#ETH-FUN').hide();
    }
    if(!(($('#ETH-GNO-Bittrex-bid').val() > $('#ETH-GNO-Binance-sell').val() && $('#ETH-GNO-Binance-sell').val() > 0) || ($('#ETH-GNO-Bittrex-bid').val() > $('#ETH-GNO-Liqui-sell').val() && $('#ETH-GNO-Liqui-sell').val() > 0) || ($('#ETH-GNO-Binance-bid').val() > $('#ETH-GNO-Bittrex-sell').val() && $('#ETH-GNO-Bittrex-sell').val() > 0) || ($('#ETH-GNO-Binance-bid').val() > $('#ETH-GNO-Liqui-sell').val() && $('#ETH-GNO-Liqui-sell').val() > 0) || ($('#ETH-GNO-Liqui-bid').val() > $('#ETH-GNO-Bittrex-sell').val() && $('#ETH-GNO-Bittrex-sell').val() > 0) || ($('#ETH-GNO-Liqui-bid').val() > $('#ETH-GNO-Binance-sell').val() && $('#ETH-GNO-Binance-sell').val() > 0))) {
        $('#ETH-GNO').hide();
    }
    if(!(($('#ETH-GNT-Bittrex-bid').val() > $('#ETH-GNT-Binance-sell').val() && $('#ETH-GNT-Binance-sell').val() > 0) || ($('#ETH-GNT-Bittrex-bid').val() > $('#ETH-GNT-Liqui-sell').val() && $('#ETH-GNT-Liqui-sell').val() > 0) || ($('#ETH-GNT-Binance-bid').val() > $('#ETH-GNT-Bittrex-sell').val() && $('#ETH-GNT-Bittrex-sell').val() > 0) || ($('#ETH-GNT-Binance-bid').val() > $('#ETH-GNT-Liqui-sell').val() && $('#ETH-GNT-Liqui-sell').val() > 0) || ($('#ETH-GNT-Liqui-bid').val() > $('#ETH-GNT-Bittrex-sell').val() && $('#ETH-GNT-Bittrex-sell').val() > 0) || ($('#ETH-GNT-Liqui-bid').val() > $('#ETH-GNT-Binance-sell').val() && $('#ETH-GNT-Binance-sell').val() > 0))) {
        $('#ETH-GNT').hide();
    }
    if(!(($('#ETH-GUP-Bittrex-bid').val() > $('#ETH-GUP-Binance-sell').val() && $('#ETH-GUP-Binance-sell').val() > 0) || ($('#ETH-GUP-Bittrex-bid').val() > $('#ETH-GUP-Liqui-sell').val() && $('#ETH-GUP-Liqui-sell').val() > 0) || ($('#ETH-GUP-Binance-bid').val() > $('#ETH-GUP-Bittrex-sell').val() && $('#ETH-GUP-Bittrex-sell').val() > 0) || ($('#ETH-GUP-Binance-bid').val() > $('#ETH-GUP-Liqui-sell').val() && $('#ETH-GUP-Liqui-sell').val() > 0) || ($('#ETH-GUP-Liqui-bid').val() > $('#ETH-GUP-Bittrex-sell').val() && $('#ETH-GUP-Bittrex-sell').val() > 0) || ($('#ETH-GUP-Liqui-bid').val() > $('#ETH-GUP-Binance-sell').val() && $('#ETH-GUP-Binance-sell').val() > 0))) {
        $('#ETH-GUP').hide();
    }
    if(!(($('#ETH-HMQ-Bittrex-bid').val() > $('#ETH-HMQ-Binance-sell').val() && $('#ETH-HMQ-Binance-sell').val() > 0) || ($('#ETH-HMQ-Bittrex-bid').val() > $('#ETH-HMQ-Liqui-sell').val() && $('#ETH-HMQ-Liqui-sell').val() > 0) || ($('#ETH-HMQ-Binance-bid').val() > $('#ETH-HMQ-Bittrex-sell').val() && $('#ETH-HMQ-Bittrex-sell').val() > 0) || ($('#ETH-HMQ-Binance-bid').val() > $('#ETH-HMQ-Liqui-sell').val() && $('#ETH-HMQ-Liqui-sell').val() > 0) || ($('#ETH-HMQ-Liqui-bid').val() > $('#ETH-HMQ-Bittrex-sell').val() && $('#ETH-HMQ-Bittrex-sell').val() > 0) || ($('#ETH-HMQ-Liqui-bid').val() > $('#ETH-HMQ-Binance-sell').val() && $('#ETH-HMQ-Binance-sell').val() > 0))) {
        $('#ETH-HMQ').hide();
    }
    if(!(($('#ETH-LGD-Bittrex-bid').val() > $('#ETH-LGD-Binance-sell').val() && $('#ETH-LGD-Binance-sell').val() > 0) || ($('#ETH-LGD-Bittrex-bid').val() > $('#ETH-LGD-Liqui-sell').val() && $('#ETH-LGD-Liqui-sell').val() > 0) || ($('#ETH-LGD-Binance-bid').val() > $('#ETH-LGD-Bittrex-sell').val() && $('#ETH-LGD-Bittrex-sell').val() > 0) || ($('#ETH-LGD-Binance-bid').val() > $('#ETH-LGD-Liqui-sell').val() && $('#ETH-LGD-Liqui-sell').val() > 0) || ($('#ETH-LGD-Liqui-bid').val() > $('#ETH-LGD-Bittrex-sell').val() && $('#ETH-LGD-Bittrex-sell').val() > 0) || ($('#ETH-LGD-Liqui-bid').val() > $('#ETH-LGD-Binance-sell').val() && $('#ETH-LGD-Binance-sell').val() > 0))) {
        $('#ETH-LGD').hide();
    }
    if(!(($('#ETH-LTC-Bittrex-bid').val() > $('#ETH-LTC-Binance-sell').val() && $('#ETH-LTC-Binance-sell').val() > 0) || ($('#ETH-LTC-Bittrex-bid').val() > $('#ETH-LTC-Liqui-sell').val() && $('#ETH-LTC-Liqui-sell').val() > 0) || ($('#ETH-LTC-Binance-bid').val() > $('#ETH-LTC-Bittrex-sell').val() && $('#ETH-LTC-Bittrex-sell').val() > 0) || ($('#ETH-LTC-Binance-bid').val() > $('#ETH-LTC-Liqui-sell').val() && $('#ETH-LTC-Liqui-sell').val() > 0) || ($('#ETH-LTC-Liqui-bid').val() > $('#ETH-LTC-Bittrex-sell').val() && $('#ETH-LTC-Bittrex-sell').val() > 0) || ($('#ETH-LTC-Liqui-bid').val() > $('#ETH-LTC-Binance-sell').val() && $('#ETH-LTC-Binance-sell').val() > 0))) {
        $('#ETH-LTC').hide();
    }
    if(!(($('#ETH-LUN-Bittrex-bid').val() > $('#ETH-LUN-Binance-sell').val() && $('#ETH-LUN-Binance-sell').val() > 0) || ($('#ETH-LUN-Bittrex-bid').val() > $('#ETH-LUN-Liqui-sell').val() && $('#ETH-LUN-Liqui-sell').val() > 0) || ($('#ETH-LUN-Binance-bid').val() > $('#ETH-LUN-Bittrex-sell').val() && $('#ETH-LUN-Bittrex-sell').val() > 0) || ($('#ETH-LUN-Binance-bid').val() > $('#ETH-LUN-Liqui-sell').val() && $('#ETH-LUN-Liqui-sell').val() > 0) || ($('#ETH-LUN-Liqui-bid').val() > $('#ETH-LUN-Bittrex-sell').val() && $('#ETH-LUN-Bittrex-sell').val() > 0) || ($('#ETH-LUN-Liqui-bid').val() > $('#ETH-LUN-Binance-sell').val() && $('#ETH-LUN-Binance-sell').val() > 0))) {
        $('#ETH-LUN').hide();
    }
    if(!(($('#ETH-MANA-Bittrex-bid').val() > $('#ETH-MANA-Binance-sell').val() && $('#ETH-MANA-Binance-sell').val() > 0) || ($('#ETH-MANA-Bittrex-bid').val() > $('#ETH-MANA-Liqui-sell').val() && $('#ETH-MANA-Liqui-sell').val() > 0) || ($('#ETH-MANA-Binance-bid').val() > $('#ETH-MANA-Bittrex-sell').val() && $('#ETH-MANA-Bittrex-sell').val() > 0) || ($('#ETH-MANA-Binance-bid').val() > $('#ETH-MANA-Liqui-sell').val() && $('#ETH-MANA-Liqui-sell').val() > 0) || ($('#ETH-MANA-Liqui-bid').val() > $('#ETH-MANA-Bittrex-sell').val() && $('#ETH-MANA-Bittrex-sell').val() > 0) || ($('#ETH-MANA-Liqui-bid').val() > $('#ETH-MANA-Binance-sell').val() && $('#ETH-MANA-Binance-sell').val() > 0))) {
        $('#ETH-MANA').hide();
    }
    if(!(($('#ETH-MCO-Bittrex-bid').val() > $('#ETH-MCO-Binance-sell').val() && $('#ETH-MCO-Binance-sell').val() > 0) || ($('#ETH-MCO-Bittrex-bid').val() > $('#ETH-MCO-Liqui-sell').val() && $('#ETH-MCO-Liqui-sell').val() > 0) || ($('#ETH-MCO-Binance-bid').val() > $('#ETH-MCO-Bittrex-sell').val() && $('#ETH-MCO-Bittrex-sell').val() > 0) || ($('#ETH-MCO-Binance-bid').val() > $('#ETH-MCO-Liqui-sell').val() && $('#ETH-MCO-Liqui-sell').val() > 0) || ($('#ETH-MCO-Liqui-bid').val() > $('#ETH-MCO-Bittrex-sell').val() && $('#ETH-MCO-Bittrex-sell').val() > 0) || ($('#ETH-MCO-Liqui-bid').val() > $('#ETH-MCO-Binance-sell').val() && $('#ETH-MCO-Binance-sell').val() > 0))) {
        $('#ETH-MCO').hide();
    }
    if(!(($('#ETH-MTL-Bittrex-bid').val() > $('#ETH-MTL-Binance-sell').val() && $('#ETH-MTL-Binance-sell').val() > 0) || ($('#ETH-MTL-Bittrex-bid').val() > $('#ETH-MTL-Liqui-sell').val() && $('#ETH-MTL-Liqui-sell').val() > 0) || ($('#ETH-MTL-Binance-bid').val() > $('#ETH-MTL-Bittrex-sell').val() && $('#ETH-MTL-Bittrex-sell').val() > 0) || ($('#ETH-MTL-Binance-bid').val() > $('#ETH-MTL-Liqui-sell').val() && $('#ETH-MTL-Liqui-sell').val() > 0) || ($('#ETH-MTL-Liqui-bid').val() > $('#ETH-MTL-Bittrex-sell').val() && $('#ETH-MTL-Bittrex-sell').val() > 0) || ($('#ETH-MTL-Liqui-bid').val() > $('#ETH-MTL-Binance-sell').val() && $('#ETH-MTL-Binance-sell').val() > 0))) {
        $('#ETH-MTL').hide();
    }
    if(!(($('#ETH-MYST-Bittrex-bid').val() > $('#ETH-MYST-Binance-sell').val() && $('#ETH-MYST-Binance-sell').val() > 0) || ($('#ETH-MYST-Bittrex-bid').val() > $('#ETH-MYST-Liqui-sell').val() && $('#ETH-MYST-Liqui-sell').val() > 0) || ($('#ETH-MYST-Binance-bid').val() > $('#ETH-MYST-Bittrex-sell').val() && $('#ETH-MYST-Bittrex-sell').val() > 0) || ($('#ETH-MYST-Binance-bid').val() > $('#ETH-MYST-Liqui-sell').val() && $('#ETH-MYST-Liqui-sell').val() > 0) || ($('#ETH-MYST-Liqui-bid').val() > $('#ETH-MYST-Bittrex-sell').val() && $('#ETH-MYST-Bittrex-sell').val() > 0) || ($('#ETH-MYST-Liqui-bid').val() > $('#ETH-MYST-Binance-sell').val() && $('#ETH-MYST-Binance-sell').val() > 0))) {
        $('#ETH-MYST').hide();
    }
    if(!(($('#ETH-NEO-Bittrex-bid').val() > $('#ETH-NEO-Binance-sell').val() && $('#ETH-NEO-Binance-sell').val() > 0) || ($('#ETH-NEO-Bittrex-bid').val() > $('#ETH-NEO-Liqui-sell').val() && $('#ETH-NEO-Liqui-sell').val() > 0) || ($('#ETH-NEO-Binance-bid').val() > $('#ETH-NEO-Bittrex-sell').val() && $('#ETH-NEO-Bittrex-sell').val() > 0) || ($('#ETH-NEO-Binance-bid').val() > $('#ETH-NEO-Liqui-sell').val() && $('#ETH-NEO-Liqui-sell').val() > 0) || ($('#ETH-NEO-Liqui-bid').val() > $('#ETH-NEO-Bittrex-sell').val() && $('#ETH-NEO-Bittrex-sell').val() > 0) || ($('#ETH-NEO-Liqui-bid').val() > $('#ETH-NEO-Binance-sell').val() && $('#ETH-NEO-Binance-sell').val() > 0))) {
        $('#ETH-NEO').hide();
    }
    if(!(($('#ETH-NMR-Bittrex-bid').val() > $('#ETH-NMR-Binance-sell').val() && $('#ETH-NMR-Binance-sell').val() > 0) || ($('#ETH-NMR-Bittrex-bid').val() > $('#ETH-NMR-Liqui-sell').val() && $('#ETH-NMR-Liqui-sell').val() > 0) || ($('#ETH-NMR-Binance-bid').val() > $('#ETH-NMR-Bittrex-sell').val() && $('#ETH-NMR-Bittrex-sell').val() > 0) || ($('#ETH-NMR-Binance-bid').val() > $('#ETH-NMR-Liqui-sell').val() && $('#ETH-NMR-Liqui-sell').val() > 0) || ($('#ETH-NMR-Liqui-bid').val() > $('#ETH-NMR-Bittrex-sell').val() && $('#ETH-NMR-Bittrex-sell').val() > 0) || ($('#ETH-NMR-Liqui-bid').val() > $('#ETH-NMR-Binance-sell').val() && $('#ETH-NMR-Binance-sell').val() > 0))) {
        $('#ETH-NMR').hide();
    }
    if(!(($('#ETH-OMG-Bittrex-bid').val() > $('#ETH-OMG-Binance-sell').val() && $('#ETH-OMG-Binance-sell').val() > 0) || ($('#ETH-OMG-Bittrex-bid').val() > $('#ETH-OMG-Liqui-sell').val() && $('#ETH-OMG-Liqui-sell').val() > 0) || ($('#ETH-OMG-Binance-bid').val() > $('#ETH-OMG-Bittrex-sell').val() && $('#ETH-OMG-Bittrex-sell').val() > 0) || ($('#ETH-OMG-Binance-bid').val() > $('#ETH-OMG-Liqui-sell').val() && $('#ETH-OMG-Liqui-sell').val() > 0) || ($('#ETH-OMG-Liqui-bid').val() > $('#ETH-OMG-Bittrex-sell').val() && $('#ETH-OMG-Bittrex-sell').val() > 0) || ($('#ETH-OMG-Liqui-bid').val() > $('#ETH-OMG-Binance-sell').val() && $('#ETH-OMG-Binance-sell').val() > 0))) {
        $('#ETH-OMG').hide();
    }
    if(!(($('#ETH-PAY-Bittrex-bid').val() > $('#ETH-PAY-Binance-sell').val() && $('#ETH-PAY-Binance-sell').val() > 0) || ($('#ETH-PAY-Bittrex-bid').val() > $('#ETH-PAY-Liqui-sell').val() && $('#ETH-PAY-Liqui-sell').val() > 0) || ($('#ETH-PAY-Binance-bid').val() > $('#ETH-PAY-Bittrex-sell').val() && $('#ETH-PAY-Bittrex-sell').val() > 0) || ($('#ETH-PAY-Binance-bid').val() > $('#ETH-PAY-Liqui-sell').val() && $('#ETH-PAY-Liqui-sell').val() > 0) || ($('#ETH-PAY-Liqui-bid').val() > $('#ETH-PAY-Bittrex-sell').val() && $('#ETH-PAY-Bittrex-sell').val() > 0) || ($('#ETH-PAY-Liqui-bid').val() > $('#ETH-PAY-Binance-sell').val() && $('#ETH-PAY-Binance-sell').val() > 0))) {
        $('#ETH-PAY').hide();
    }
    if(!(($('#ETH-POWR-Bittrex-bid').val() > $('#ETH-POWR-Binance-sell').val() && $('#ETH-POWR-Binance-sell').val() > 0) || ($('#ETH-POWR-Bittrex-bid').val() > $('#ETH-POWR-Liqui-sell').val() && $('#ETH-POWR-Liqui-sell').val() > 0) || ($('#ETH-POWR-Binance-bid').val() > $('#ETH-POWR-Bittrex-sell').val() && $('#ETH-POWR-Bittrex-sell').val() > 0) || ($('#ETH-POWR-Binance-bid').val() > $('#ETH-POWR-Liqui-sell').val() && $('#ETH-POWR-Liqui-sell').val() > 0) || ($('#ETH-POWR-Liqui-bid').val() > $('#ETH-POWR-Bittrex-sell').val() && $('#ETH-POWR-Bittrex-sell').val() > 0) || ($('#ETH-POWR-Liqui-bid').val() > $('#ETH-POWR-Binance-sell').val() && $('#ETH-POWR-Binance-sell').val() > 0))) {
        $('#ETH-POWR').hide();
    }
    if(!(($('#ETH-PTOY-Bittrex-bid').val() > $('#ETH-PTOY-Binance-sell').val() && $('#ETH-PTOY-Binance-sell').val() > 0) || ($('#ETH-PTOY-Bittrex-bid').val() > $('#ETH-PTOY-Liqui-sell').val() && $('#ETH-PTOY-Liqui-sell').val() > 0) || ($('#ETH-PTOY-Binance-bid').val() > $('#ETH-PTOY-Bittrex-sell').val() && $('#ETH-PTOY-Bittrex-sell').val() > 0) || ($('#ETH-PTOY-Binance-bid').val() > $('#ETH-PTOY-Liqui-sell').val() && $('#ETH-PTOY-Liqui-sell').val() > 0) || ($('#ETH-PTOY-Liqui-bid').val() > $('#ETH-PTOY-Bittrex-sell').val() && $('#ETH-PTOY-Bittrex-sell').val() > 0) || ($('#ETH-PTOY-Liqui-bid').val() > $('#ETH-PTOY-Binance-sell').val() && $('#ETH-PTOY-Binance-sell').val() > 0))) {
        $('#ETH-PTOY').hide();
    }
    if(!(($('#ETH-QRL-Bittrex-bid').val() > $('#ETH-QRL-Binance-sell').val() && $('#ETH-QRL-Binance-sell').val() > 0) || ($('#ETH-QRL-Bittrex-bid').val() > $('#ETH-QRL-Liqui-sell').val() && $('#ETH-QRL-Liqui-sell').val() > 0) || ($('#ETH-QRL-Binance-bid').val() > $('#ETH-QRL-Bittrex-sell').val() && $('#ETH-QRL-Bittrex-sell').val() > 0) || ($('#ETH-QRL-Binance-bid').val() > $('#ETH-QRL-Liqui-sell').val() && $('#ETH-QRL-Liqui-sell').val() > 0) || ($('#ETH-QRL-Liqui-bid').val() > $('#ETH-QRL-Bittrex-sell').val() && $('#ETH-QRL-Bittrex-sell').val() > 0) || ($('#ETH-QRL-Liqui-bid').val() > $('#ETH-QRL-Binance-sell').val() && $('#ETH-QRL-Binance-sell').val() > 0))) {
        $('#ETH-QRL').hide();
    }
    if(!(($('#ETH-QTUM-Bittrex-bid').val() > $('#ETH-QTUM-Binance-sell').val() && $('#ETH-QTUM-Binance-sell').val() > 0) || ($('#ETH-QTUM-Bittrex-bid').val() > $('#ETH-QTUM-Liqui-sell').val() && $('#ETH-QTUM-Liqui-sell').val() > 0) || ($('#ETH-QTUM-Binance-bid').val() > $('#ETH-QTUM-Bittrex-sell').val() && $('#ETH-QTUM-Bittrex-sell').val() > 0) || ($('#ETH-QTUM-Binance-bid').val() > $('#ETH-QTUM-Liqui-sell').val() && $('#ETH-QTUM-Liqui-sell').val() > 0) || ($('#ETH-QTUM-Liqui-bid').val() > $('#ETH-QTUM-Bittrex-sell').val() && $('#ETH-QTUM-Bittrex-sell').val() > 0) || ($('#ETH-QTUM-Liqui-bid').val() > $('#ETH-QTUM-Binance-sell').val() && $('#ETH-QTUM-Binance-sell').val() > 0))) {
        $('#ETH-QTUM').hide();
    }
    if(!(($('#ETH-RCN-Bittrex-bid').val() > $('#ETH-RCN-Binance-sell').val() && $('#ETH-RCN-Binance-sell').val() > 0) || ($('#ETH-RCN-Bittrex-bid').val() > $('#ETH-RCN-Liqui-sell').val() && $('#ETH-RCN-Liqui-sell').val() > 0) || ($('#ETH-RCN-Binance-bid').val() > $('#ETH-RCN-Bittrex-sell').val() && $('#ETH-RCN-Bittrex-sell').val() > 0) || ($('#ETH-RCN-Binance-bid').val() > $('#ETH-RCN-Liqui-sell').val() && $('#ETH-RCN-Liqui-sell').val() > 0) || ($('#ETH-RCN-Liqui-bid').val() > $('#ETH-RCN-Bittrex-sell').val() && $('#ETH-RCN-Bittrex-sell').val() > 0) || ($('#ETH-RCN-Liqui-bid').val() > $('#ETH-RCN-Binance-sell').val() && $('#ETH-RCN-Binance-sell').val() > 0))) {
        $('#ETH-RCN').hide();
    }
    if(!(($('#ETH-REP-Bittrex-bid').val() > $('#ETH-REP-Binance-sell').val() && $('#ETH-REP-Binance-sell').val() > 0) || ($('#ETH-REP-Bittrex-bid').val() > $('#ETH-REP-Liqui-sell').val() && $('#ETH-REP-Liqui-sell').val() > 0) || ($('#ETH-REP-Binance-bid').val() > $('#ETH-REP-Bittrex-sell').val() && $('#ETH-REP-Bittrex-sell').val() > 0) || ($('#ETH-REP-Binance-bid').val() > $('#ETH-REP-Liqui-sell').val() && $('#ETH-REP-Liqui-sell').val() > 0) || ($('#ETH-REP-Liqui-bid').val() > $('#ETH-REP-Bittrex-sell').val() && $('#ETH-REP-Bittrex-sell').val() > 0) || ($('#ETH-REP-Liqui-bid').val() > $('#ETH-REP-Binance-sell').val() && $('#ETH-REP-Binance-sell').val() > 0))) {
        $('#ETH-REP').hide();
    }
    if(!(($('#ETH-RLC-Bittrex-bid').val() > $('#ETH-RLC-Binance-sell').val() && $('#ETH-RLC-Binance-sell').val() > 0) || ($('#ETH-RLC-Bittrex-bid').val() > $('#ETH-RLC-Liqui-sell').val() && $('#ETH-RLC-Liqui-sell').val() > 0) || ($('#ETH-RLC-Binance-bid').val() > $('#ETH-RLC-Bittrex-sell').val() && $('#ETH-RLC-Bittrex-sell').val() > 0) || ($('#ETH-RLC-Binance-bid').val() > $('#ETH-RLC-Liqui-sell').val() && $('#ETH-RLC-Liqui-sell').val() > 0) || ($('#ETH-RLC-Liqui-bid').val() > $('#ETH-RLC-Bittrex-sell').val() && $('#ETH-RLC-Bittrex-sell').val() > 0) || ($('#ETH-RLC-Liqui-bid').val() > $('#ETH-RLC-Binance-sell').val() && $('#ETH-RLC-Binance-sell').val() > 0))) {
        $('#ETH-RLC').hide();
    }
    if(!(($('#ETH-SALT-Bittrex-bid').val() > $('#ETH-SALT-Binance-sell').val() && $('#ETH-SALT-Binance-sell').val() > 0) || ($('#ETH-SALT-Bittrex-bid').val() > $('#ETH-SALT-Liqui-sell').val() && $('#ETH-SALT-Liqui-sell').val() > 0) || ($('#ETH-SALT-Binance-bid').val() > $('#ETH-SALT-Bittrex-sell').val() && $('#ETH-SALT-Bittrex-sell').val() > 0) || ($('#ETH-SALT-Binance-bid').val() > $('#ETH-SALT-Liqui-sell').val() && $('#ETH-SALT-Liqui-sell').val() > 0) || ($('#ETH-SALT-Liqui-bid').val() > $('#ETH-SALT-Bittrex-sell').val() && $('#ETH-SALT-Bittrex-sell').val() > 0) || ($('#ETH-SALT-Liqui-bid').val() > $('#ETH-SALT-Binance-sell').val() && $('#ETH-SALT-Binance-sell').val() > 0))) {
        $('#ETH-SALT').hide();
    }
    if(!(($('#ETH-SC-Bittrex-bid').val() > $('#ETH-SC-Binance-sell').val() && $('#ETH-SC-Binance-sell').val() > 0) || ($('#ETH-SC-Bittrex-bid').val() > $('#ETH-SC-Liqui-sell').val() && $('#ETH-SC-Liqui-sell').val() > 0) || ($('#ETH-SC-Binance-bid').val() > $('#ETH-SC-Bittrex-sell').val() && $('#ETH-SC-Bittrex-sell').val() > 0) || ($('#ETH-SC-Binance-bid').val() > $('#ETH-SC-Liqui-sell').val() && $('#ETH-SC-Liqui-sell').val() > 0) || ($('#ETH-SC-Liqui-bid').val() > $('#ETH-SC-Bittrex-sell').val() && $('#ETH-SC-Bittrex-sell').val() > 0) || ($('#ETH-SC-Liqui-bid').val() > $('#ETH-SC-Binance-sell').val() && $('#ETH-SC-Binance-sell').val() > 0))) {
        $('#ETH-SC').hide();
    }
    if(!(($('#ETH-SNGLS-Bittrex-bid').val() > $('#ETH-SNGLS-Binance-sell').val() && $('#ETH-SNGLS-Binance-sell').val() > 0) || ($('#ETH-SNGLS-Bittrex-bid').val() > $('#ETH-SNGLS-Liqui-sell').val() && $('#ETH-SNGLS-Liqui-sell').val() > 0) || ($('#ETH-SNGLS-Binance-bid').val() > $('#ETH-SNGLS-Bittrex-sell').val() && $('#ETH-SNGLS-Bittrex-sell').val() > 0) || ($('#ETH-SNGLS-Binance-bid').val() > $('#ETH-SNGLS-Liqui-sell').val() && $('#ETH-SNGLS-Liqui-sell').val() > 0) || ($('#ETH-SNGLS-Liqui-bid').val() > $('#ETH-SNGLS-Bittrex-sell').val() && $('#ETH-SNGLS-Bittrex-sell').val() > 0) || ($('#ETH-SNGLS-Liqui-bid').val() > $('#ETH-SNGLS-Binance-sell').val() && $('#ETH-SNGLS-Binance-sell').val() > 0))) {
        $('#ETH-SNGLS').hide();
    }
    if(!(($('#ETH-SNT-Bittrex-bid').val() > $('#ETH-SNT-Binance-sell').val() && $('#ETH-SNT-Binance-sell').val() > 0) || ($('#ETH-SNT-Bittrex-bid').val() > $('#ETH-SNT-Liqui-sell').val() && $('#ETH-SNT-Liqui-sell').val() > 0) || ($('#ETH-SNT-Binance-bid').val() > $('#ETH-SNT-Bittrex-sell').val() && $('#ETH-SNT-Bittrex-sell').val() > 0) || ($('#ETH-SNT-Binance-bid').val() > $('#ETH-SNT-Liqui-sell').val() && $('#ETH-SNT-Liqui-sell').val() > 0) || ($('#ETH-SNT-Liqui-bid').val() > $('#ETH-SNT-Bittrex-sell').val() && $('#ETH-SNT-Bittrex-sell').val() > 0) || ($('#ETH-SNT-Liqui-bid').val() > $('#ETH-SNT-Binance-sell').val() && $('#ETH-SNT-Binance-sell').val() > 0))) {
        $('#ETH-SNT').hide();
    }
    if(!(($('#ETH-STORJ-Bittrex-bid').val() > $('#ETH-STORJ-Binance-sell').val() && $('#ETH-STORJ-Binance-sell').val() > 0) || ($('#ETH-STORJ-Bittrex-bid').val() > $('#ETH-STORJ-Liqui-sell').val() && $('#ETH-STORJ-Liqui-sell').val() > 0) || ($('#ETH-STORJ-Binance-bid').val() > $('#ETH-STORJ-Bittrex-sell').val() && $('#ETH-STORJ-Bittrex-sell').val() > 0) || ($('#ETH-STORJ-Binance-bid').val() > $('#ETH-STORJ-Liqui-sell').val() && $('#ETH-STORJ-Liqui-sell').val() > 0) || ($('#ETH-STORJ-Liqui-bid').val() > $('#ETH-STORJ-Bittrex-sell').val() && $('#ETH-STORJ-Bittrex-sell').val() > 0) || ($('#ETH-STORJ-Liqui-bid').val() > $('#ETH-STORJ-Binance-sell').val() && $('#ETH-STORJ-Binance-sell').val() > 0))) {
        $('#ETH-STORJ').hide();
    }
    if(!(($('#ETH-STRAT-Bittrex-bid').val() > $('#ETH-STRAT-Binance-sell').val() && $('#ETH-STRAT-Binance-sell').val() > 0) || ($('#ETH-STRAT-Bittrex-bid').val() > $('#ETH-STRAT-Liqui-sell').val() && $('#ETH-STRAT-Liqui-sell').val() > 0) || ($('#ETH-STRAT-Binance-bid').val() > $('#ETH-STRAT-Bittrex-sell').val() && $('#ETH-STRAT-Bittrex-sell').val() > 0) || ($('#ETH-STRAT-Binance-bid').val() > $('#ETH-STRAT-Liqui-sell').val() && $('#ETH-STRAT-Liqui-sell').val() > 0) || ($('#ETH-STRAT-Liqui-bid').val() > $('#ETH-STRAT-Bittrex-sell').val() && $('#ETH-STRAT-Bittrex-sell').val() > 0) || ($('#ETH-STRAT-Liqui-bid').val() > $('#ETH-STRAT-Binance-sell').val() && $('#ETH-STRAT-Binance-sell').val() > 0))) {
        $('#ETH-STRAT').hide();
    }
    if(!(($('#ETH-TIME-Bittrex-bid').val() > $('#ETH-TIME-Binance-sell').val() && $('#ETH-TIME-Binance-sell').val() > 0) || ($('#ETH-TIME-Bittrex-bid').val() > $('#ETH-TIME-Liqui-sell').val() && $('#ETH-TIME-Liqui-sell').val() > 0) || ($('#ETH-TIME-Binance-bid').val() > $('#ETH-TIME-Bittrex-sell').val() && $('#ETH-TIME-Bittrex-sell').val() > 0) || ($('#ETH-TIME-Binance-bid').val() > $('#ETH-TIME-Liqui-sell').val() && $('#ETH-TIME-Liqui-sell').val() > 0) || ($('#ETH-TIME-Liqui-bid').val() > $('#ETH-TIME-Bittrex-sell').val() && $('#ETH-TIME-Bittrex-sell').val() > 0) || ($('#ETH-TIME-Liqui-bid').val() > $('#ETH-TIME-Binance-sell').val() && $('#ETH-TIME-Binance-sell').val() > 0))) {
        $('#ETH-TIME').hide();
    }
    if(!(($('#ETH-TIX-Bittrex-bid').val() > $('#ETH-TIX-Binance-sell').val() && $('#ETH-TIX-Binance-sell').val() > 0) || ($('#ETH-TIX-Bittrex-bid').val() > $('#ETH-TIX-Liqui-sell').val() && $('#ETH-TIX-Liqui-sell').val() > 0) || ($('#ETH-TIX-Binance-bid').val() > $('#ETH-TIX-Bittrex-sell').val() && $('#ETH-TIX-Bittrex-sell').val() > 0) || ($('#ETH-TIX-Binance-bid').val() > $('#ETH-TIX-Liqui-sell').val() && $('#ETH-TIX-Liqui-sell').val() > 0) || ($('#ETH-TIX-Liqui-bid').val() > $('#ETH-TIX-Bittrex-sell').val() && $('#ETH-TIX-Bittrex-sell').val() > 0) || ($('#ETH-TIX-Liqui-bid').val() > $('#ETH-TIX-Binance-sell').val() && $('#ETH-TIX-Binance-sell').val() > 0))) {
        $('#ETH-TIX').hide();
    }
    if(!(($('#ETH-TKN-Bittrex-bid').val() > $('#ETH-TKN-Binance-sell').val() && $('#ETH-TKN-Binance-sell').val() > 0) || ($('#ETH-TKN-Bittrex-bid').val() > $('#ETH-TKN-Liqui-sell').val() && $('#ETH-TKN-Liqui-sell').val() > 0) || ($('#ETH-TKN-Binance-bid').val() > $('#ETH-TKN-Bittrex-sell').val() && $('#ETH-TKN-Bittrex-sell').val() > 0) || ($('#ETH-TKN-Binance-bid').val() > $('#ETH-TKN-Liqui-sell').val() && $('#ETH-TKN-Liqui-sell').val() > 0) || ($('#ETH-TKN-Liqui-bid').val() > $('#ETH-TKN-Bittrex-sell').val() && $('#ETH-TKN-Bittrex-sell').val() > 0) || ($('#ETH-TKN-Liqui-bid').val() > $('#ETH-TKN-Binance-sell').val() && $('#ETH-TKN-Binance-sell').val() > 0))) {
        $('#ETH-TKN').hide();
    }
    if(!(($('#ETH-TRST-Bittrex-bid').val() > $('#ETH-TRST-Binance-sell').val() && $('#ETH-TRST-Binance-sell').val() > 0) || ($('#ETH-TRST-Bittrex-bid').val() > $('#ETH-TRST-Liqui-sell').val() && $('#ETH-TRST-Liqui-sell').val() > 0) || ($('#ETH-TRST-Binance-bid').val() > $('#ETH-TRST-Bittrex-sell').val() && $('#ETH-TRST-Bittrex-sell').val() > 0) || ($('#ETH-TRST-Binance-bid').val() > $('#ETH-TRST-Liqui-sell').val() && $('#ETH-TRST-Liqui-sell').val() > 0) || ($('#ETH-TRST-Liqui-bid').val() > $('#ETH-TRST-Bittrex-sell').val() && $('#ETH-TRST-Bittrex-sell').val() > 0) || ($('#ETH-TRST-Liqui-bid').val() > $('#ETH-TRST-Binance-sell').val() && $('#ETH-TRST-Binance-sell').val() > 0))) {
        $('#ETH-TRST').hide();
    }
    if(!(($('#ETH-VIB-Bittrex-bid').val() > $('#ETH-VIB-Binance-sell').val() && $('#ETH-VIB-Binance-sell').val() > 0) || ($('#ETH-VIB-Bittrex-bid').val() > $('#ETH-VIB-Liqui-sell').val() && $('#ETH-VIB-Liqui-sell').val() > 0) || ($('#ETH-VIB-Binance-bid').val() > $('#ETH-VIB-Bittrex-sell').val() && $('#ETH-VIB-Bittrex-sell').val() > 0) || ($('#ETH-VIB-Binance-bid').val() > $('#ETH-VIB-Liqui-sell').val() && $('#ETH-VIB-Liqui-sell').val() > 0) || ($('#ETH-VIB-Liqui-bid').val() > $('#ETH-VIB-Bittrex-sell').val() && $('#ETH-VIB-Bittrex-sell').val() > 0) || ($('#ETH-VIB-Liqui-bid').val() > $('#ETH-VIB-Binance-sell').val() && $('#ETH-VIB-Binance-sell').val() > 0))) {
        $('#ETH-VIB').hide();
    }
    if(!(($('#ETH-WAVES-Bittrex-bid').val() > $('#ETH-WAVES-Binance-sell').val() && $('#ETH-WAVES-Binance-sell').val() > 0) || ($('#ETH-WAVES-Bittrex-bid').val() > $('#ETH-WAVES-Liqui-sell').val() && $('#ETH-WAVES-Liqui-sell').val() > 0) || ($('#ETH-WAVES-Binance-bid').val() > $('#ETH-WAVES-Bittrex-sell').val() && $('#ETH-WAVES-Bittrex-sell').val() > 0) || ($('#ETH-WAVES-Binance-bid').val() > $('#ETH-WAVES-Liqui-sell').val() && $('#ETH-WAVES-Liqui-sell').val() > 0) || ($('#ETH-WAVES-Liqui-bid').val() > $('#ETH-WAVES-Bittrex-sell').val() && $('#ETH-WAVES-Bittrex-sell').val() > 0) || ($('#ETH-WAVES-Liqui-bid').val() > $('#ETH-WAVES-Binance-sell').val() && $('#ETH-WAVES-Binance-sell').val() > 0))) {
        $('#ETH-WAVES').hide();
    }
    if(!(($('#ETH-WINGS-Bittrex-bid').val() > $('#ETH-WINGS-Binance-sell').val() && $('#ETH-WINGS-Binance-sell').val() > 0) || ($('#ETH-WINGS-Bittrex-bid').val() > $('#ETH-WINGS-Liqui-sell').val() && $('#ETH-WINGS-Liqui-sell').val() > 0) || ($('#ETH-WINGS-Binance-bid').val() > $('#ETH-WINGS-Bittrex-sell').val() && $('#ETH-WINGS-Bittrex-sell').val() > 0) || ($('#ETH-WINGS-Binance-bid').val() > $('#ETH-WINGS-Liqui-sell').val() && $('#ETH-WINGS-Liqui-sell').val() > 0) || ($('#ETH-WINGS-Liqui-bid').val() > $('#ETH-WINGS-Bittrex-sell').val() && $('#ETH-WINGS-Bittrex-sell').val() > 0) || ($('#ETH-WINGS-Liqui-bid').val() > $('#ETH-WINGS-Binance-sell').val() && $('#ETH-WINGS-Binance-sell').val() > 0))) {
        $('#ETH-WINGS').hide();
    }
    if(!(($('#ETH-XEM-Bittrex-bid').val() > $('#ETH-XEM-Binance-sell').val() && $('#ETH-XEM-Binance-sell').val() > 0) || ($('#ETH-XEM-Bittrex-bid').val() > $('#ETH-XEM-Liqui-sell').val() && $('#ETH-XEM-Liqui-sell').val() > 0) || ($('#ETH-XEM-Binance-bid').val() > $('#ETH-XEM-Bittrex-sell').val() && $('#ETH-XEM-Bittrex-sell').val() > 0) || ($('#ETH-XEM-Binance-bid').val() > $('#ETH-XEM-Liqui-sell').val() && $('#ETH-XEM-Liqui-sell').val() > 0) || ($('#ETH-XEM-Liqui-bid').val() > $('#ETH-XEM-Bittrex-sell').val() && $('#ETH-XEM-Bittrex-sell').val() > 0) || ($('#ETH-XEM-Liqui-bid').val() > $('#ETH-XEM-Binance-sell').val() && $('#ETH-XEM-Binance-sell').val() > 0))) {
        $('#ETH-XEM').hide();
    }
    if(!(($('#ETH-XLM-Bittrex-bid').val() > $('#ETH-XLM-Binance-sell').val() && $('#ETH-XLM-Binance-sell').val() > 0) || ($('#ETH-XLM-Bittrex-bid').val() > $('#ETH-XLM-Liqui-sell').val() && $('#ETH-XLM-Liqui-sell').val() > 0) || ($('#ETH-XLM-Binance-bid').val() > $('#ETH-XLM-Bittrex-sell').val() && $('#ETH-XLM-Bittrex-sell').val() > 0) || ($('#ETH-XLM-Binance-bid').val() > $('#ETH-XLM-Liqui-sell').val() && $('#ETH-XLM-Liqui-sell').val() > 0) || ($('#ETH-XLM-Liqui-bid').val() > $('#ETH-XLM-Bittrex-sell').val() && $('#ETH-XLM-Bittrex-sell').val() > 0) || ($('#ETH-XLM-Liqui-bid').val() > $('#ETH-XLM-Binance-sell').val() && $('#ETH-XLM-Binance-sell').val() > 0))) {
        $('#ETH-XLM').hide();
    }
    if(!(($('#ETH-XMR-Bittrex-bid').val() > $('#ETH-XMR-Binance-sell').val() && $('#ETH-XMR-Binance-sell').val() > 0) || ($('#ETH-XMR-Bittrex-bid').val() > $('#ETH-XMR-Liqui-sell').val() && $('#ETH-XMR-Liqui-sell').val() > 0) || ($('#ETH-XMR-Binance-bid').val() > $('#ETH-XMR-Bittrex-sell').val() && $('#ETH-XMR-Bittrex-sell').val() > 0) || ($('#ETH-XMR-Binance-bid').val() > $('#ETH-XMR-Liqui-sell').val() && $('#ETH-XMR-Liqui-sell').val() > 0) || ($('#ETH-XMR-Liqui-bid').val() > $('#ETH-XMR-Bittrex-sell').val() && $('#ETH-XMR-Bittrex-sell').val() > 0) || ($('#ETH-XMR-Liqui-bid').val() > $('#ETH-XMR-Binance-sell').val() && $('#ETH-XMR-Binance-sell').val() > 0))) {
        $('#ETH-XMR').hide();
    }
    if(!(($('#ETH-XRP-Bittrex-bid').val() > $('#ETH-XRP-Binance-sell').val() && $('#ETH-XRP-Binance-sell').val() > 0) || ($('#ETH-XRP-Bittrex-bid').val() > $('#ETH-XRP-Liqui-sell').val() && $('#ETH-XRP-Liqui-sell').val() > 0) || ($('#ETH-XRP-Binance-bid').val() > $('#ETH-XRP-Bittrex-sell').val() && $('#ETH-XRP-Bittrex-sell').val() > 0) || ($('#ETH-XRP-Binance-bid').val() > $('#ETH-XRP-Liqui-sell').val() && $('#ETH-XRP-Liqui-sell').val() > 0) || ($('#ETH-XRP-Liqui-bid').val() > $('#ETH-XRP-Bittrex-sell').val() && $('#ETH-XRP-Bittrex-sell').val() > 0) || ($('#ETH-XRP-Liqui-bid').val() > $('#ETH-XRP-Binance-sell').val() && $('#ETH-XRP-Binance-sell').val() > 0))) {
        $('#ETH-XRP').hide();
    }
    if(!(($('#ETH-ZEC-Bittrex-bid').val() > $('#ETH-ZEC-Binance-sell').val() && $('#ETH-ZEC-Binance-sell').val() > 0) || ($('#ETH-ZEC-Bittrex-bid').val() > $('#ETH-ZEC-Liqui-sell').val() && $('#ETH-ZEC-Liqui-sell').val() > 0) || ($('#ETH-ZEC-Binance-bid').val() > $('#ETH-ZEC-Bittrex-sell').val() && $('#ETH-ZEC-Bittrex-sell').val() > 0) || ($('#ETH-ZEC-Binance-bid').val() > $('#ETH-ZEC-Liqui-sell').val() && $('#ETH-ZEC-Liqui-sell').val() > 0) || ($('#ETH-ZEC-Liqui-bid').val() > $('#ETH-ZEC-Bittrex-sell').val() && $('#ETH-ZEC-Bittrex-sell').val() > 0) || ($('#ETH-ZEC-Liqui-bid').val() > $('#ETH-ZEC-Binance-sell').val() && $('#ETH-ZEC-Binance-sell').val() > 0))) {
        $('#ETH-ZEC').hide();
    }
}

function showAllCoins() {
    $('.coin-row').show();
}

var savedCoins = ["BTC-1ST", "BTC-2GIVE", "BTC-ABY", "BTC-ADA", "BTC-ADT", "BTC-ADX", "BTC-AEON", "BTC-AGRS", "BTC-AMP", "BTC-ANT", "BTC-APX", "BTC-ARDR", "BTC-ARK", "BTC-AUR", "BTC-BAT", "BTC-BAY", "BTC-BCC", "BTC-BCY", "BTC-BITB", "BTC-BLITZ", "BTC-BLK", "BTC-BLOCK", "BTC-BNT", "BTC-BRK", "BTC-BRX", "BTC-BSD", "BTC-BTCD", "BTC-BTG", "BTC-BURST", "BTC-BYC", "BTC-CANN", "BTC-CFI", "BTC-CLAM", "BTC-CLOAK", "BTC-CLUB", "BTC-COVAL", "BTC-CPC", "BTC-CRB", "BTC-CRW", "BTC-CURE", "BTC-CVC", "BTC-DASH", "BTC-DCR", "BTC-DCT", "BTC-DGB", "BTC-DGD", "BTC-DMD", "BTC-DNT", "BTC-DOGE", "BTC-DOPE", "BTC-DTB", "BTC-DYN", "BTC-EBST", "BTC-EDG", "BTC-EFL", "BTC-EGC", "BTC-EMC", "BTC-EMC2", "BTC-ENG", "BTC-ENRG", "BTC-ERC", "BTC-ETC", "BTC-ETH", "BTC-EXCL", "BTC-EXP", "BTC-FAIR", "BTC-FCT", "BTC-FLDC", "BTC-FLO", "BTC-FTC", "BTC-FUN", "BTC-GAM", "BTC-GAME", "BTC-GBG", "BTC-GBYTE", "BTC-GCR", "BTC-GEO", "BTC-GLD", "BTC-GNO", "BTC-GNT", "BTC-GOLOS", "BTC-GRC", "BTC-GRS", "BTC-GUP", "BTC-HMQ", "BTC-INCNT", "BTC-INFX", "BTC-IOC", "BTC-ION", "BTC-IOP", "BTC-KMD", "BTC-KORE", "BTC-LBC", "BTC-LGD", "BTC-LMC", "BTC-LSK", "BTC-LTC", "BTC-LUN", "BTC-MAID", "BTC-MANA", "BTC-MCO", "BTC-MEME", "BTC-MER", "BTC-MLN", "BTC-MONA", "BTC-MTL", "BTC-MUE", "BTC-MUSIC", "BTC-MYST", "BTC-NAV", "BTC-NBT", "BTC-NEO", "BTC-NEOS", "BTC-NLG", "BTC-NMR", "BTC-NXC", "BTC-NXS", "BTC-NXT", "BTC-OK", "BTC-OMG", "BTC-OMNI", "BTC-PART", "BTC-PAY", "BTC-PDC", "BTC-PINK", "BTC-PIVX", "BTC-PKB", "BTC-POT", "BTC-POWR", "BTC-PPC", "BTC-PTC", "BTC-PTOY", "BTC-QRL", "BTC-QTUM", "BTC-QWARK", "BTC-RADS", "BTC-RBY", "BTC-RCN", "BTC-RDD", "BTC-REP", "BTC-RISE", "BTC-RLC", "BTC-SAFEX", "BTC-SALT", "BTC-SBD", "BTC-SC", "BTC-SEQ", "BTC-SHIFT", "BTC-SIB", "BTC-SLR", "BTC-SLS", "BTC-SNGLS", "BTC-SNRG", "BTC-SNT", "BTC-SPHR", "BTC-SPR", "BTC-START", "BTC-STEEM", "BTC-STORJ", "BTC-STRAT", "BTC-SWIFT", "BTC-SWT", "BTC-SYNX", "BTC-SYS", "BTC-THC", "BTC-TIX", "BTC-TKS", "BTC-TRIG", "BTC-TRST", "BTC-TRUST", "BTC-TX", "BTC-UBQ", "BTC-UNB", "BTC-VIA", "BTC-VIB", "BTC-VOX", "BTC-VRC", "BTC-VRM", "BTC-VTC", "BTC-VTR", "BTC-WAVES", "BTC-WINGS", "BTC-XAUR", "BTC-XCP", "BTC-XDN", "BTC-XEL", "BTC-XEM", "BTC-XLM", "BTC-XMG", "BTC-XMR", "BTC-XMY", "BTC-XRP", "BTC-XST", "BTC-XVC", "BTC-XVG", "BTC-XWC", "BTC-XZC", "BTC-ZCL", "BTC-ZEC", "BTC-ZEN","ETH-1ST", "ETH-ADA", "ETH-ADT", "ETH-ADX", "ETH-ANT", "ETH-BAT", "ETH-BCC", "ETH-BNT", "ETH-BTG", "ETH-BTS", "ETH-CFI", "ETH-CRB", "ETH-CVC", "ETH-DASH", "ETH-DGB", "ETH-DGD", "ETH-DNT", "ETH-ENG", "ETH-ETC", "ETH-FCT", "ETH-FUN", "ETH-GNO", "ETH-GNT", "ETH-GUP", "ETH-HMQ", "ETH-LGD", "ETH-LTC", "ETH-LUN", "ETH-MANA", "ETH-MCO", "ETH-MTL", "ETH-MYST", "ETH-NEO", "ETH-NMR", "ETH-OMG", "ETH-PAY", "ETH-POWR", "ETH-PTOY", "ETH-QRL", "ETH-QTUM", "ETH-RCN", "ETH-REP", "ETH-RLC", "ETH-SALT", "ETH-SC", "ETH-SNGLS", "ETH-SNT", "ETH-STORJ", "ETH-STRAT", "ETH-TIME", "ETH-TIX", "ETH-TKN", "ETH-TRST", "ETH-VIB", "ETH-WAVES", "ETH-WINGS", "ETH-XEM", "ETH-XLM", "ETH-XMR", "ETH-XRP", "ETH-ZEC", , "USDT-BCC", "USDT-BTC", "USDT-BTG", "USDT-DASH", "USDT-ETC", "USDT-ETH", "USDT-LTC", "USDT-NEO", "USDT-OMG", "USDT-XMR", "USDT-XRP", "USDT-ZEC"];
