// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

//NYT API Key
var nytAPIkey = "someAPIkeyHere";

// Helper Functions (in this case the only one is runQuery)
var helpers = {

  runQuery: function(term, start, end) {
    var term = term.trim();
		var start = start.trim();
		var end = end.trim();

    // Figure out the geolocation
    var queryURL ='http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ topic +'&begin_date='+ start +'0101&end_date='+ end + '0101&api-key=' + nytAPIkey;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
    });

  }

};

// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
