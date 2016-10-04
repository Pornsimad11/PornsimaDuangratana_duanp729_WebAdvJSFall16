var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("http://www.billboard.com/charts/hot-100", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('div.chart-row__main-display').each(function( index ) {
    var rank = $(this).find('div.chart-row__rank > span.chart-row__current-week').text().trim();
    var title = $(this).find('div.chart-row__container > div.chart-row__title > h2.chart-row__song').text().trim();
    var artist = $(this).find('div.chart-row__container > div.chart-row__title > a.chart-row__artist').text().trim();
    console.log("Rank: " + rank);
    console.log("Title: " + title);
    console.log("Artist: " + artist);
    fs.appendFileSync('result.json', rank + '\n' + title + '\n' + artist + '\n');
  });

});