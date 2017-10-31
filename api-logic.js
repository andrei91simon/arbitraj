$(document).ready(function(){

    //Api pentru Bittrex
      /*  $.ajax({
        type: 'GET',
        url: 'aici vine url',
        success: function(coins) {
            $('#Omg-Bittrex').html(coins.omg_eth.buy + ' - ' + coins.omg_eth.sell);
            $('#Req-Bittrex').html(coins.req_eth.buy + ' - ' + coins.req_eth.sell);
            $('#Mtl-Bittrex').html();
        },
        error: function() {
            alert('FAILURE!');
        }
    });
*/
        
    //Api pentru Binance
   /* $.ajax({
        type: 'GET',
        url: 'aici vine url',
        success: function(coins) {
            $('#Omg-Binance').html(coins.omg_eth.buy + ' - ' + coins.omg_eth.sell);
            $('#Req-Binance').html(coins.req_eth.buy + ' - ' + coins.req_eth.sell);
            $('#Mtl-Binance').html(coins.mtl_eth.buy + ' - ' + coins.mtl_eth.sell);
        },
        error: function() {
            alert('FAILURE!');
        }
    });
*/
        
    //Api pentru Liqui
    $.ajax({
        type: 'GET',
        url: 'https://api.liqui.io/api/3/ticker/omg_eth-req_eth',
        success: function(coins) {
            $('#Omg-Liqui').html(coins.omg_eth.buy + ' - ' + coins.omg_eth.sell);
            $('#Req-Liqui').html(coins.req_eth.buy + ' - ' + coins.req_eth.sell);
            // nu exista api de mtl
        },
        error: function() {
            alert('FAILURE!');
        }
    });
    
    //Api pentru Bitfinex
  /*  $.ajax({
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
*/
})