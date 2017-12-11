$(document).ready(function(){
    bittrex();
    binance();
    liqui();
    getMarkets();
})

function bittrex() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://bittrex.com/api/v1.1/public/getmarketsummaries',
        type: 'GET',
        success: function(coins) {
            var first = search("ETH-1ST", coins.result);
            $('#1ST-Bittrex').html(first.Bid + ' - ' + first.Ask);
            var ADA = search("ETH-ADA", coins.result);
            $('#ADA-Bittrex').html(ADA.Bid + ' - ' + ADA.Ask);
            var ADT = search("ETH-ADT", coins.result);
            $('#ADT-Bittrex').html(ADT.Bid + ' - ' + ADT.Ask);
            var ADX = search("ETH-ADX", coins.result);
            $('#ADX-Bittrex').html(ADX.Bid + ' - ' + ADX.Ask);
            var ANT = search("ETH-ANT", coins.result);
            $('#ANT-Bittrex').html(ANT.Bid + ' - ' + ANT.Ask);
            var BAT = search("ETH-BAT", coins.result);
            $('#BAT-Bittrex').html(BAT.Bid + ' - ' + BAT.Ask);
            var BCC = search("ETH-BCC", coins.result);
            $('#BCC-Bittrex').html(BCC.Bid + ' - ' + BCC.Ask);
            var BNT = search("ETH-BNT", coins.result);
            $('#BNT-Bittrex').html(BNT.Bid + ' - ' + BNT.Ask);
            var BTG = search("ETH-BTG", coins.result);
            $('#BTG-Bittrex').html(BTG.Bid + ' - ' + BTG.Ask);
            //var BTS = search("ETH-BTS", coins.result);
            //$('#BTS-Bittrex').html(BTS.Bid + ' - ' + BTS.Ask);
            var CFI = search("ETH-CFI", coins.result);
            $('#CFI-Bittrex').html(CFI.Bid + ' - ' + CFI.Ask);
            var CRB = search("ETH-CRB", coins.result);
            $('#CRB-Bittrex').html(CRB.Bid + ' - ' + CRB.Ask);
            var CVC = search("ETH-CVC", coins.result);
            $('#CVC-Bittrex').html(CVC.Bid + ' - ' + CVC.Ask);
            var DASH = search("ETH-DASH", coins.result);
            $('#DASH-Bittrex').html(DASH.Bid + ' - ' + DASH.Ask);
            var DGB = search("ETH-DGB", coins.result);
            $('#DGB-Bittrex').html(DGB.Bid + ' - ' + DGB.Ask);
            var DGD = search("ETH-DGD", coins.result);
            $('#DGD-Bittrex').html(DGD.Bid + ' - ' + DGD.Ask);
            var DNT = search("ETH-DNT", coins.result);
            $('#DNT-Bittrex').html(DNT.Bid + ' - ' + DNT.Ask);
            var ENG = search("ETH-ENG", coins.result);
            $('#ENG-Bittrex').html(ENG.Bid + ' - ' + ENG.Ask);
            var ETC = search("ETH-ETC", coins.result);
            $('#ETC-Bittrex').html(ETC.Bid + ' - ' + ETC.Ask);
            var FCT = search("ETH-FCT", coins.result);
            $('#FCT-Bittrex').html(FCT.Bid + ' - ' + FCT.Ask);
            var FUN = search("ETH-FUN", coins.result);
            $('#FUN-Bittrex').html(FUN.Bid + ' - ' + FUN.Ask);
            var GNO = search("ETH-GNO", coins.result);
            $('#GNO-Bittrex').html(GNO.Bid + ' - ' + GNO.Ask);
            var GNT = search("ETH-GNT", coins.result);
            $('#GNT-Bittrex').html(GNT.Bid + ' - ' + GNT.Ask);
            var GUP = search("ETH-GUP", coins.result);
            $('#GUP-Bittrex').html(GUP.Bid + ' - ' + GUP.Ask);
            var HMQ = search("ETH-HMQ", coins.result);
            $('#HMQ-Bittrex').html(HMQ.Bid + ' - ' + HMQ.Ask);
            var LGD = search("ETH-LGD", coins.result);
            $('#LGD-Bittrex').html(LGD.Bid + ' - ' + LGD.Ask);
            var LTC = search("ETH-LTC", coins.result);
            $('#LTC-Bittrex').html(LTC.Bid + ' - ' + LTC.Ask);
            var LUN = search("ETH-LUN", coins.result);
            $('#LUN-Bittrex').html(LUN.Bid + ' - ' + LUN.Ask);
            var MANA = search("ETH-MANA", coins.result);
            $('#MANA-Bittrex').html(MANA.Bid + ' - ' + MANA.Ask);
            var MCO = search("ETH-MCO", coins.result);
            $('#MCO-Bittrex').html(MCO.Bid + ' - ' + MCO.Ask);
            var MTL = search("ETH-MTL", coins.result);
            $('#MTL-Bittrex').html(MTL.Bid + ' - ' + MTL.Ask);
            var MYST = search("ETH-MYST", coins.result);
            $('#MYST-Bittrex').html(MYST.Bid + ' - ' + MYST.Ask);
            var NEO = search("ETH-NEO", coins.result);
            $('#NEO-Bittrex').html(NEO.Bid + ' - ' + NEO.Ask);
            var NMR = search("ETH-NMR", coins.result);
            $('#NMR-Bittrex').html(NMR.Bid + ' - ' + NMR.Ask);
            var OMG = search("ETH-OMG", coins.result);
            $('#OMG-Bittrex').html(OMG.Bid + ' - ' + OMG.Ask);
            var PAY = search("ETH-PAY", coins.result);
            $('#PAY-Bittrex').html(PAY.Bid + ' - ' + PAY.Ask);
            var POWR = search("ETH-POWR", coins.result);
            $('#POWR-Bittrex').html(POWR.Bid + ' - ' + POWR.Ask);
            var PTOY = search("ETH-PTOY", coins.result);
            $('#PTOY-Bittrex').html(PTOY.Bid + ' - ' + PTOY.Ask);
            var QRL = search("ETH-QRL", coins.result);
            $('#QRL-Bittrex').html(QRL.Bid + ' - ' + QRL.Ask);
            var QTUM = search("ETH-QTUM", coins.result);
            $('#QTUM-Bittrex').html(QTUM.Bid + ' - ' + QTUM.Ask);
            var RCN = search("ETH-RCN", coins.result);
            $('#RCN-Bittrex').html(RCN.Bid + ' - ' + RCN.Ask);
            var REP = search("ETH-REP", coins.result);
            $('#REP-Bittrex').html(REP.Bid + ' - ' + REP.Ask);
            var RLC = search("ETH-RLC", coins.result);
            $('#RLC-Bittrex').html(RLC.Bid + ' - ' + RLC.Ask);
            var SALT = search("ETH-SALT", coins.result);
            $('#SALT-Bittrex').html(SALT.Bid + ' - ' + SALT.Ask);
            var SC = search("ETH-SC", coins.result);
            $('#SC-Bittrex').html(SC.Bid + ' - ' + SC.Ask);
            var SNGLS = search("ETH-SNGLS", coins.result);
            $('#SNGLS-Bittrex').html(SNGLS.Bid + ' - ' + SNGLS.Ask);
            var SNT = search("ETH-SNT", coins.result);
            $('#SNT-Bittrex').html(SNT.Bid + ' - ' + SNT.Ask);
            var STORJ = search("ETH-STORJ", coins.result);
            $('#STORJ-Bittrex').html(STORJ.Bid + ' - ' + STORJ.Ask);
            var STRAT = search("ETH-STRAT", coins.result);
            $('#STRAT-Bittrex').html(STRAT.Bid + ' - ' + STRAT.Ask);
            var TIME = search("ETH-TIME", coins.result);
            $('#TIME-Bittrex').html(TIME.Bid + ' - ' + TIME.Ask);
            var TIX = search("ETH-TIX", coins.result);
            $('#TIX-Bittrex').html(TIX.Bid + ' - ' + TIX.Ask);
            var TKN = search("ETH-TKN", coins.result);
            $('#TKN-Bittrex').html(TKN.Bid + ' - ' + TKN.Ask);
            var TRST = search("ETH-TRST", coins.result);
            $('#TRST-Bittrex').html(TRST.Bid + ' - ' + TRST.Ask);
            var VIB = search("ETH-VIB", coins.result);
            $('#VIB-Bittrex').html(VIB.Bid + ' - ' + VIB.Ask);
            var WAVES = search("ETH-WAVES", coins.result);
            $('#WAVES-Bittrex').html(WAVES.Bid + ' - ' + WAVES.Ask);
            var WINGS = search("ETH-WINGS", coins.result);
            $('#WINGS-Bittrex').html(WINGS.Bid + ' - ' + WINGS.Ask);
            var XEM = search("ETH-XEM", coins.result);
            $('#XEM-Bittrex').html(XEM.Bid + ' - ' + XEM.Ask);
            var XLM = search("ETH-XLM", coins.result);
            $('#XLM-Bittrex').html(XLM.Bid + ' - ' + XLM.Ask);
            var XMR = search("ETH-XMR", coins.result);
            $('#XMR-Bittrex').html(XMR.Bid + ' - ' + XMR.Ask);
            var XRP = search("ETH-XRP", coins.result);
            $('#XRP-Bittrex').html(XRP.Bid + ' - ' + XRP.Ask);
            var ZEC = search("ETH-ZEC", coins.result);
            $('#ZEC-Bittrex').html(ZEC.Bid + ' - ' + ZEC.Ask);
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
            //$('#1ST-Binance').html(first.Bid + ' - ' + first.Ask);
            var ADA = searchBinance("ADAETH", coins);
            $('#ADA-Binance').html(ADA.bidPrice + ' - ' + ADA.askPrice);
            //var ADT = searchBinance("ETH-ADT", coins);
            //$('#ADT-Binance').html(ADT.bidPrice + ' - ' + ADT.askPrice);
            var ADX = searchBinance("ADXETH", coins);
            $('#ADX-Binance').html(ADX.bidPrice + ' - ' + ADX.askPrice);
            //var ANT = searchBinance("ETH-ANT", coins);
            //$('#ANT-Binance').html(ANT.bidPrice + ' - ' + ANT.askPrice);
            var BAT = searchBinance("BATETH", coins);
            $('#BAT-Binance').html(BAT.bidPrice + ' - ' + BAT.askPrice);
            var BCC = searchBinance("BCCETH", coins);
            $('#BCC-Binance').html(BCC.bidPrice + ' - ' + BCC.askPrice);
            var BNT = searchBinance("BNTETH", coins);
            $('#BNT-Binance').html(BNT.bidPrice + ' - ' + BNT.askPrice);
            var BTG = searchBinance("BTGETH", coins);
            $('#BTG-Binance').html(BTG.bidPrice + ' - ' + BTG.askPrice);
            var BTS = searchBinance("BTSETH", coins);
            $('#BTS-Binance').html(BTS.bidPrice + ' - ' + BTS.askPrice);
            //var CFI = searchBinance("ETH-CFI", coins);
            //$('#CFI-Binance').html(CFI.bidPrice + ' - ' + CFI.askPrice);
            //var CRB = searchBinance("ETH-CRB", coins);
            //$('#CRB-Binance').html(CRB.bidPrice + ' - ' + CRB.askPrice);
            //var CVC = searchBinance("ETH-CVC", coins);
            //$('#CVC-Binance').html(CVC.bidPrice + ' - ' + CVC.askPrice);
            var DASH = searchBinance("DASHETH", coins);
            $('#DASH-Binance').html(DASH.bidPrice + ' - ' + DASH.askPrice);
            //var DGB = searchBinance("ETH-DGB", coins);
            //$('#DGB-Binance').html(DGB.bidPrice + ' - ' + DGB.askPrice);
            var DGD = searchBinance("DGDETH", coins);
            $('#DGD-Binance').html(DGD.bidPrice + ' - ' + DGD.askPrice);
            var DNT = searchBinance("DNTETH", coins);
            $('#DNT-Binance').html(DNT.bidPrice + ' - ' + DNT.askPrice);
            var ENG = searchBinance("ENGETH", coins);
            $('#ENG-Binance').html(ENG.bidPrice + ' - ' + ENG.askPrice);
            var ETC = searchBinance("ETCETH", coins);
            $('#ETC-Binance').html(ETC.bidPrice + ' - ' + ETC.askPrice);
            //var FCT = searchBinance("ETH-FCT", coins);
            //$('#FCT-Binance').html(FCT.bidPrice + ' - ' + FCT.askPrice);
            var FUN = searchBinance("FUNETH", coins);
            $('#FUN-Binance').html(FUN.bidPrice + ' - ' + FUN.askPrice);
            //var GNO = searchBinance("ETH-GNO", coins);
            //$('#GNO-Binance').html(GNO.bidPrice + ' - ' + GNO.askPrice);
            //var GNT = searchBinance("ETH-GNT", coins);
            //$('#GNT-Binance').html(GNT.bidPrice + ' - ' + GNT.askPrice);
            //var GUP = searchBinance("ETH-GUP", coins);
            //$('#GUP-Binance').html(GUP.bidPrice + ' - ' + GUP.askPrice);
            //var HMQ = searchBinance("ETH-HMQ", coins);
            //$('#HMQ-Binance').html(HMQ.bidPrice + ' - ' + HMQ.askPrice);
            //var LGD = searchBinance("ETH-LGD", coins);
            //$('#LGD-Binance').html(LGD.bidPrice + ' - ' + LGD.askPrice);
            //var LTC = searchBinance("ETH-LTC", coins);
            //$('#LTC-Binance').html(LTC.bidPrice + ' - ' + LTC.askPrice);
            //var LUN = searchBinance("ETH-LUN", coins);
            //$('#LUN-Binance').html(LUN.bidPrice + ' - ' + LUN.askPrice);
            var MANA = searchBinance("MANAETH", coins);
            $('#MANA-Binance').html(MANA.bidPrice + ' - ' + MANA.askPrice);
            var MCO = searchBinance("MCOETH", coins);
            $('#MCO-Binance').html(MCO.bidPrice + ' - ' + MCO.askPrice);
            var MTL = searchBinance("MTLETH", coins);
            $('#MTL-Binance').html(MTL.bidPrice + ' - ' + MTL.askPrice);
            //var MYST = searchBinance("ETH-MYST", coins);
            //$('#MYST-Binance').html(MYST.bidPrice + ' - ' + MYST.askPrice);
            var NEO = searchBinance("NEOETH", coins);
            $('#NEO-Binance').html(NEO.bidPrice + ' - ' + NEO.askPrice);
            //var NMR = searchBinance("ETH-NMR", coins);
            //$('#NMR-Binance').html(NMR.bidPrice + ' - ' + NMR.askPrice);
            var OMG = searchBinance("OMGETH", coins);
            $('#OMG-Binance').html(OMG.bidPrice + ' - ' + OMG.askPrice);
            //var PAY = searchBinance("ETH-PAY", coins);
            //$('#PAY-Binance').html(PAY.bidPrice + ' - ' + PAY.askPrice);
            var POWR = searchBinance("POWRETH", coins);
            $('#POWR-Binance').html(POWR.bidPrice + ' - ' + POWR.askPrice);
            //var PTOY = searchBinance("ETH-PTOY", coins);
            //$('#PTOY-Binance').html(PTOY.bidPrice + ' - ' + PTOY.askPrice);
            //var QRL = searchBinance("ETH-QRL", coins);
            //$('#QRL-Binance').html(QRL.bidPrice + ' - ' + QRL.askPrice);
            var QTUM = searchBinance("QTUMETH", coins);
            $('#QTUM-Binance').html(QTUM.bidPrice + ' - ' + QTUM.askPrice);
            var RCN = searchBinance("RCNETH", coins);
            $('#RCN-Binance').html(RCN.bidPrice + ' - ' + RCN.askPrice);
            //var REP = searchBinance("ETH-REP", coins);
            //$('#REP-Binance').html(REP.bidPrice + ' - ' + REP.askPrice);
            //var RLC = searchBinance("ETH-RLC", coins);
            //$('#RLC-Binance').html(RLC.bidPrice + ' - ' + RLC.askPrice);
            var SALT = searchBinance("SALTETH", coins);
            $('#SALT-Binance').html(SALT.bidPrice + ' - ' + SALT.askPrice);
            //var SC = searchBinance("ETH-SC", coins);
            //$('#SC-Binance').html(SC.bidPrice + ' - ' + SC.askPrice);
            var SNGLS = searchBinance("SNGLSETH", coins);
            $('#SNGLS-Binance').html(SNGLS.bidPrice + ' - ' + SNGLS.askPrice);
            var SNT = searchBinance("SNTETH", coins);
            $('#SNT-Binance').html(SNT.bidPrice + ' - ' + SNT.askPrice);
            var STORJ = searchBinance("STORJETH", coins);
            $('#STORJ-Binance').html(STORJ.bidPrice + ' - ' + STORJ.askPrice);
            var STRAT = searchBinance("STRATETH", coins);
            $('#STRAT-Binance').html(STRAT.bidPrice + ' - ' + STRAT.askPrice);
            //var TIME = searchBinance("ETH-TIME", coins);
            //$('#TIME-Binance').html(TIME.bidPrice + ' - ' + TIME.askPrice);
            //var TIX = searchBinance("ETH-TIX", coins);
            //$('#TIX-Binance').html(TIX.bidPrice + ' - ' + TIX.askPrice);
            //var TKN = searchBinance("ETH-TKN", coins);
            //$('#TKN-Binance').html(TKN.bidPrice + ' - ' + TKN.askPrice);
            //var TRST = searchBinance("ETH-TRST", coins);
            //$('#TRST-Binance').html(TRST.bidPrice + ' - ' + TRST.askPrice);
            var VIB = searchBinance("VIBETH", coins);
            $('#VIB-Binance').html(VIB.bidPrice + ' - ' + VIB.askPrice);
            //var WAVES = searchBinance("ETH-WAVES", coins);
            //$('#WAVES-Binance').html(WAVES.bidPrice + ' - ' + WAVES.askPrice);
            //var WINGS = searchBinance("ETH-WINGS", coins);
            //$('#WINGS-Binance').html(WINGS.bidPrice + ' - ' + WINGS.askPrice);
            //var XEM = searchBinance("ETH-XEM", coins);
            //$('#XEM-Binance').html(XEM.bidPrice + ' - ' + XEM.askPrice);
            var XLM = searchBinance("XLMETH", coins);
            $('#XLM-Binance').html(XLM.bidPrice + ' - ' + XLM.askPrice);
            var XMR = searchBinance("XMRETH", coins);
            $('#XMR-Binance').html(XMR.bidPrice + ' - ' + XMR.askPrice);
            var XRP = searchBinance("XRPETH", coins);
            $('#XRP-Binance').html(XRP.bidPrice + ' - ' + XRP.askPrice);
            var ZEC = searchBinance("ZECETH", coins);
            $('#ZEC-Binance').html(ZEC.bidPrice + ' - ' + ZEC.askPrice);
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
            //$('#1ST-Liqui').html(coins.adx_eth.buy + ' - ' + coins.adx_eth.sell);
            //$('#ADA-Liqui').html(coins.adx_eth.buy + ' - ' + coins.adx_eth.sell);
            //$('#ADT-Liqui').html(coins.adx_eth.buy + ' - ' + coins.adx_eth.sell);
            $('#ADX-Liqui').html(coins.adx_eth.buy + ' - ' + coins.adx_eth.sell);
            $('#ANT-Liqui').html(coins.ant_eth.buy + ' - ' + coins.ant_eth.sell);
            $('#BAT-Liqui').html(coins.bat_eth.buy + ' - ' + coins.bat_eth.sell);
            $('#BCC-Liqui').html(coins.bcc_eth.buy + ' - ' + coins.bcc_eth.sell);
            $('#BNT-Liqui').html(coins.bnt_eth.buy + ' - ' + coins.bnt_eth.sell);
            //$('#BTG-Liqui').html(coins.btg_eth.buy + ' - ' + coins.btg_eth.sell);
            //$('#BTS-Liqui').html(coins.bts_eth.buy + ' - ' + coins.bts_eth.sell);
            $('#CFI-Liqui').html(coins.cfi_eth.buy + ' - ' + coins.cfi_eth.sell);
            //$('#CRB-Liqui').html(coins.crb_eth.buy + ' - ' + coins.crb_eth.sell);
            $('#CVC-Liqui').html(coins.cvc_eth.buy + ' - ' + coins.cvc_eth.sell);
            $('#DASH-Liqui').html(coins.dash_eth.buy + ' - ' + coins.dash_eth.sell);
            //$('#DGB-Liqui').html(coins.dgb_eth.buy + ' - ' + coins.dgb_eth.sell);
            //$('#DGD-Liqui').html(coins.dgd_eth.buy + ' - ' + coins.dgd_eth.sell);
            $('#DNT-Liqui').html(coins.dnt_eth.buy + ' - ' + coins.dnt_eth.sell);
            $('#ENG-Liqui').html(coins.eng_eth.buy + ' - ' + coins.eng_eth.sell);
            //$('#ETC-Liqui').html(coins.etc_eth.buy + ' - ' + coins.etc_eth.sell);
            //$('#FCT-Liqui').html(coins.fct_eth.buy + ' - ' + coins.fct_eth.sell);
            //$('#FUN-Liqui').html(coins.fun_eth.buy + ' - ' + coins.fun_eth.sell);
            $('#GNO-Liqui').html(coins.gno_eth.buy + ' - ' + coins.gno_eth.sell);
            $('#GNT-Liqui').html(coins.gnt_eth.buy + ' - ' + coins.gnt_eth.sell);
            $('#GUP-Liqui').html(coins.gup_eth.buy + ' - ' + coins.gup_eth.sell);
            //$('#HMQ-Liqui').html(coins.hmq_eth.buy + ' - ' + coins.hmq_eth.sell);
            //$('#LGD-Liqui').html(coins.lgd_eth.buy + ' - ' + coins.lgd_eth.sell);
            $('#LTC-Liqui').html(coins.ltc_eth.buy + ' - ' + coins.ltc_eth.sell);
            //$('#LUN-Liqui').html(coins.lun_eth.buy + ' - ' + coins.lun_eth.sell);
            $('#MANA-Liqui').html(coins.mana_eth.buy + ' - ' + coins.mana_eth.sell);
            $('#MCO-Liqui').html(coins.mco_eth.buy + ' - ' + coins.mco_eth.sell);
            //$('#MTL-Liqui').html(coins.mtl_eth.buy + ' - ' + coins.mtl_eth.sell);
            $('#MYST-Liqui').html(coins.myst_eth.buy + ' - ' + coins.myst_eth.sell);
            //$('#NEO-Liqui').html(coins.neo_eth.buy + ' - ' + coins.neo_eth.sell);
            //$('#NMR-Liqui').html(coins.nmr_eth.buy + ' - ' + coins.nmr_eth.sell);
            $('#OMG-Liqui').html(coins.omg_eth.buy + ' - ' + coins.omg_eth.sell);
            $('#PAY-Liqui').html(coins.pay_eth.buy + ' - ' + coins.pay_eth.sell);
            //$('#POWR-Liqui').html(coins.powr_eth.buy + ' - ' + coins.powr_eth.sell);
            $('#PTOY-Liqui').html(coins.ptoy_eth.buy + ' - ' + coins.ptoy_eth.sell);
            $('#QRL-Liqui').html(coins.qrl_eth.buy + ' - ' + coins.qrl_eth.sell);
            //$('#QTUM-Liqui').html(coins.qtum_eth.buy + ' - ' + coins.qtum_eth.sell);
            //$('#RCN-Liqui').html(coins.rcn_eth.buy + ' - ' + coins.rcn_eth.sell);
            $('#REP-Liqui').html(coins.rep_eth.buy + ' - ' + coins.rep_eth.sell);
            $('#RLC-Liqui').html(coins.rlc_eth.buy + ' - ' + coins.rlc_eth.sell);
            $('#SALT-Liqui').html(coins.salt_eth.buy + ' - ' + coins.salt_eth.sell);
            //$('#SC-Liqui').html(coins.sc_eth.buy + ' - ' + coins.sc_eth.sell);
            $('#SNGLS-Liqui').html(coins.sngls_eth.buy + ' - ' + coins.sngls_eth.sell);
            $('#SNT-Liqui').html(coins.snt_eth.buy + ' - ' + coins.snt_eth.sell);
            $('#STORJ-Liqui').html(coins.storj_eth.buy + ' - ' + coins.storj_eth.sell);
            //$('#STRAT-Liqui').html(coins.strat_eth.buy + ' - ' + coins.strat_eth.sell);
            $('#TIME-Liqui').html(coins.time_eth.buy + ' - ' + coins.time_eth.sell);
            //$('#TIX-Liqui').html(coins.tix_eth.buy + ' - ' + coins.tix_eth.sell);
            $('#TKN-Liqui').html(coins.tkn_eth.buy + ' - ' + coins.tkn_eth.sell);
            $('#TRST-Liqui').html(coins.trst_eth.buy + ' - ' + coins.trst_eth.sell);
            //$('#VIB-Liqui').html(coins.vib_eth.buy + ' - ' + coins.vib_eth.sell);
            $('#WAVES-Liqui').html(coins.waves_eth.buy + ' - ' + coins.waves_eth.sell);
            $('#WINGS-Liqui').html(coins.wings_eth.buy + ' - ' + coins.wings_eth.sell);
            //$('#XEM-Liqui').html(coins.xem_eth.buy + ' - ' + coins.xem_eth.sell);
            //$('#XLM-Liqui').html(coins.xlm_eth.buy + ' - ' + coins.xlm_eth.sell);
            //$('#XMR-Liqui').html(coins.xmr_eth.buy + ' - ' + coins.xmr_eth.sell);
            //$('#XRP-Liqui').html(coins.xrp_eth.buy + ' - ' + coins.xrp_eth.sell);
            //$('#ZEC-Liqui').html(coins.zec_eth.buy + ' - ' + coins.zec_eth.sell);
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
    getMarkets();
    console.log(' each 4 second...');
}

var myVar = setInterval(myTimer, 60000); 

var savedCoins = ["BTC-1ST", "BTC-2GIVE", "BTC-ABY", "BTC-ADA", "BTC-ADT", "BTC-ADX", "BTC-AEON", "BTC-AGRS", "BTC-AMP", "BTC-ANT", "BTC-APX", "BTC-ARDR", "BTC-ARK", "BTC-AUR", "BTC-BAT", "BTC-BAY", "BTC-BCC", "BTC-BCY", "BTC-BITB", "BTC-BLITZ", "BTC-BLK", "BTC-BLOCK", "BTC-BNT", "BTC-BRK", "BTC-BRX", "BTC-BSD", "BTC-BTCD", "BTC-BTG", "BTC-BURST", "BTC-BYC", "BTC-CANN", "BTC-CFI", "BTC-CLAM", "BTC-CLOAK", "BTC-CLUB", "BTC-COVAL", "BTC-CPC", "BTC-CRB", "BTC-CRW", "BTC-CURE", "BTC-CVC", "BTC-DASH", "BTC-DCR", "BTC-DCT", "BTC-DGB", "BTC-DGD", "BTC-DMD", "BTC-DNT", "BTC-DOGE", "BTC-DOPE", "BTC-DTB", "BTC-DYN", "BTC-EBST", "BTC-EDG", "BTC-EFL", "BTC-EGC", "BTC-EMC", "BTC-EMC2", "BTC-ENG", "BTC-ENRG", "BTC-ERC", "BTC-ETC", "BTC-ETH", "BTC-EXCL", "BTC-EXP", "BTC-FAIR", "BTC-FCT", "BTC-FLDC", "BTC-FLO", "BTC-FTC", "BTC-FUN", "BTC-GAM", "BTC-GAME", "BTC-GBG", "BTC-GBYTE", "BTC-GCR", "BTC-GEO", "BTC-GLD", "BTC-GNO", "BTC-GNT", "BTC-GOLOS", "BTC-GRC", "BTC-GRS", "BTC-GUP", "BTC-HMQ", "BTC-INCNT", "BTC-INFX", "BTC-IOC", "BTC-ION", "BTC-IOP", "BTC-KMD", "BTC-KORE", "BTC-LBC", "BTC-LGD", "BTC-LMC", "BTC-LSK", "BTC-LTC", "BTC-LUN", "BTC-MAID", "BTC-MANA", "BTC-MCO", "BTC-MEME", "BTC-MER", "BTC-MLN", "BTC-MONA", "BTC-MTL", "BTC-MUE", "BTC-MUSIC", "BTC-MYST", "BTC-NAV", "BTC-NBT", "BTC-NEO", "BTC-NEOS", "BTC-NLG", "BTC-NMR", "BTC-NXC", "BTC-NXS", "BTC-NXT", "BTC-OK", "BTC-OMG", "BTC-OMNI", "BTC-PART", "BTC-PAY", "BTC-PDC", "BTC-PINK", "BTC-PIVX", "BTC-PKB", "BTC-POT", "BTC-POWR", "BTC-PPC", "BTC-PTC", "BTC-PTOY", "BTC-QRL", "BTC-QTUM", "BTC-QWARK", "BTC-RADS", "BTC-RBY", "BTC-RCN", "BTC-RDD", "BTC-REP", "BTC-RISE", "BTC-RLC", "BTC-SAFEX", "BTC-SALT", "BTC-SBD", "BTC-SC", "BTC-SEQ", "BTC-SHIFT", "BTC-SIB", "BTC-SLR", "BTC-SLS", "BTC-SNGLS", "BTC-SNRG", "BTC-SNT", "BTC-SPHR", "BTC-SPR", "BTC-START", "BTC-STEEM", "BTC-STORJ", "BTC-STRAT", "BTC-SWIFT", "BTC-SWT", "BTC-SYNX", "BTC-SYS", "BTC-THC", "BTC-TIX", "BTC-TKS", "BTC-TRIG", "BTC-TRST", "BTC-TRUST", "BTC-TX", "BTC-UBQ", "BTC-UNB", "BTC-VIA", "BTC-VIB", "BTC-VOX", "BTC-VRC", "BTC-VRM", "BTC-VTC", "BTC-VTR", "BTC-WAVES", "BTC-WINGS", "BTC-XAUR", "BTC-XCP", "BTC-XDN", "BTC-XEL", "BTC-XEM", "BTC-XLM", "BTC-XMG", "BTC-XMR", "BTC-XMY", "BTC-XRP", "BTC-XST", "BTC-XVC", "BTC-XVG", "BTC-XWC", "BTC-XZC", "BTC-ZCL", "BTC-ZEC", "BTC-ZEN","ETH-1ST", "ETH-ADA", "ETH-ADT", "ETH-ADX", "ETH-ANT", "ETH-BAT", "ETH-BCC", "ETH-BNT", "ETH-BTG", "ETH-BTS", "ETH-CFI", "ETH-CRB", "ETH-CVC", "ETH-DASH", "ETH-DGB", "ETH-DGD", "ETH-DNT", "ETH-ENG", "ETH-ETC", "ETH-FCT", "ETH-FUN", "ETH-GNO", "ETH-GNT", "ETH-GUP", "ETH-HMQ", "ETH-LGD", "ETH-LTC", "ETH-LUN", "ETH-MANA", "ETH-MCO", "ETH-MTL", "ETH-MYST", "ETH-NEO", "ETH-NMR", "ETH-OMG", "ETH-PAY", "ETH-POWR", "ETH-PTOY", "ETH-QRL", "ETH-QTUM", "ETH-RCN", "ETH-REP", "ETH-RLC", "ETH-SALT", "ETH-SC", "ETH-SNGLS", "ETH-SNT", "ETH-STORJ", "ETH-STRAT", "ETH-TIME", "ETH-TIX", "ETH-TKN", "ETH-TRST", "ETH-VIB", "ETH-WAVES", "ETH-WINGS", "ETH-XEM", "ETH-XLM", "ETH-XMR", "ETH-XRP", "ETH-ZEC", , "USDT-BCC", "USDT-BTC", "USDT-BTG", "USDT-DASH", "USDT-ETC", "USDT-ETH", "USDT-LTC", "USDT-NEO", "USDT-OMG", "USDT-XMR", "USDT-XRP", "USDT-ZEC"];

function getMarkets() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://bittrex.com/api/v1.1/public/getmarketsummaries',
        type: 'GET',
        success: function(coins) {
            var markets = [];
            $.each(coins.result, function(index, value) {
                if(true) {
                    markets.push(value.MarketName);
                }
                console.log(markets);
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
            console.log("every ten seconds...")
        },
        error: function() {
            alert('FAILURE!');
        }
    }); 
}

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};