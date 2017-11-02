$(document).ready(function(){
/* var bitUrl = 'https://bittrex.com/api/v1.1/public/getmarketsummaries';
    //Api pentru Bittrex
        $.ajax({
        url: bitUrl,
        type: 'GET',
        success: function(coins) {
            $('#Omg-Bittrex').html(coins.result[0].High);
            $('#Req-Bittrex').html();
            $('#Mtl-Bittrex').html();
        },
        error: function() {
            alert('FAILURE!');
        }
    }); */
        
    //Api pentru Binance
    $.ajax({
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://www.binance.com/api/v1/ticker/allPrices',
        success: function(coins) {
            var myCo = JSON.parse(coins);
            $('#Omg-Binance').html(myCo[31].price);
            $('#Req-Binance').html(myCo[87].price);
            $('#Mtl-Binance').html(myCo[60].price);
        },
        error: function() {
            alert('FAILURE!');
        }
    }); 
        
    //Api pentru Liqui
    $.ajax({
        type: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://api.liqui.io/api/3/ticker/omg_eth-req_eth',
        success: function(coins) {
            console.log(coins);
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

        //Api pentru Liqui
var LiquiApi = function(){
    $.ajax({
        type: 'GET',
        url: 'https://api.liqui.io/api/3/ticker/omg_eth-req_eth',
        success: function(coins) {
            console.log(coins);
            $('#Omg-Liqui').html(coins.omg_eth.buy + ' - ' + coins.omg_eth.sell);
            $('#Req-Liqui').html(coins.req_eth.buy + ' - ' + coins.req_eth.sell);
            // nu exista api de mtl
        },
        error: function() {
            alert('FAILURE!');
        }
    }); 
}
        //Api pentru Binance
/* var BinanceApi = function(){
   $.ajax({
        type: 'GET',
        url: 'https://www.binance.com/api/v1/ticker/allPrices',
        success: function(coins) {
            var myCo = JSON.parse(coins);
            $('#Omg-Binance').html(myCo[31].price);
            $('#Req-Binance').html(myCo[87].price);
            $('#Mtl-Binance').html(myCo[60].price);
        },
        error: function() {
            alert('FAILURE!');
        }
    }); */