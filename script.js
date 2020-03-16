$.get('http://data.fixer.io/api/latest?access_key=f2736000cc2c2dbf09fb504b1a10792c', function(response){
console.log(response);

        $('#eur').text(Math.round(response.rates.RUB * 100)/100);

        $('#usd').text(Math.round(response.rates.RUB / response.rates.USD * 100) / 100);

        $('#byn').text(Math.round(response.rates.RUB / response.rates.BYN * 100) / 100);

        $('#uah').text(Math.round(response.rates.RUB / response.rates.UAH * 100) / 100);

        $('#uah').css('margin-right', 0);
});
