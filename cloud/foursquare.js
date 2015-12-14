var FOURSQUARE_CLIENT_ID = "VN05TLI5IPNON304RGJVCWDDMJH0JU3BGDAVKI3HCZNYJUP5";
var FOURSQUARE_CLIENT_SECRECT = "23O3BZEDCJHV0UGSBIZU5C2QZABC400CESRMMQZMC4RWR0O5";


function getUrlForVenueSearch() {
    var url = "https://api.foursquare.com/v2/venues/search" 
    + "?client_id=" + FOURSQUARE_CLIENT_ID 
    + "&client_secret=" + FOURSQUARE_CLIENT_SECRECT
    + "&ll=40.7,-74"
    + "&v=20161209";
    
    return url;
    // console.log('url: ' + url);
    // return "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=VN05TLI5IPNON304RGJVCWDDMJH0JU3BGDAVKI3HCZNYJUP5&client_secret=23O3BZEDCJHV0UGSBIZU5C2QZABC400CESRMMQZMC4RWR0O5&v=20161209";
}

Parse.Cloud.define("get_foursquare_results", function(request, response) {
    var fqUrl = getUrlForVenueSearch();
    Parse.Cloud.httpRequest({
        // url: 'https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=VN05TLI5IPNON304RGJVCWDDMJH0JU3BGDAVKI3HCZNYJUP5&client_secret=23O3BZEDCJHV0UGSBIZU5C2QZABC400CESRMMQZMC4RWR0O5&v=20161212',
        url: fqUrl,
        success: function(httpResponse) {
            console.log(httpResponse);
            response.success(httpResponse.text);
        },
        error: function(httpResponse) {
            console.log(httpResponse);
            response.failure('Request failed with response code ' + httpResponse.status)
        }
    });
});



