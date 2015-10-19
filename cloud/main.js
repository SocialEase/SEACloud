
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:


var ACTIVITY_TYPE = {1: "Lunch"}



Parse.Cloud.define("hello", function(request, response) {
    response.success("Hello world!");
});

// Stub call for API response for getting activity suggestion
Parse.Cloud.define("getActivityRecommendations", function(request, response) {

    print(request);


    var resultJson = [];
    resultJson.push({'name': 'Sakoon',
                   'rating': 4.5,
                   'location': 'Mountain View, CA',
                   'posterImage': 'http://bombaygrilltx.com/wp-content/uploads/2013/09/Kheema-Samosa.png'});
    resultJson.push({'name': 'Siva',
                   'rating': 3.0,
                   'location': 'Palo Alto, CA',
                   'posterImage': 'https://cookshook.files.wordpress.com/2011/06/indian-food1.png'});
    resultJson.push({'name': 'Amber Cafe',
                   'rating': 4.0,
                   'location': 'Mountain View, CA',
                   'posterImage': 'http://sahibjohnsoncity.com/wp-content/uploads/2015/07/2.png'});
    resultJson.push({'name': 'Madras Cafe',
                   'rating': 4.0,
                   'location': 'Sunnyvale, CA',
                   'posterImage': 'http://3.bp.blogspot.com/-9YgUhaxHNXI/UmFKYPIC_sI/AAAAAAAAAEI/1cvVK-q5l7U/s400/Janardhan.png'});
    resultJson.push({'name': 'Chaat Bhavan',
                   'rating': 3.5,
                   'location': 'Sunnyvale, CA',
                   'posterImage': 'http://41.media.tumblr.com/60d0c12f327cb4b2579d49c236cc520c/tumblr_inline_npgw2nB5WV1t09dzn_400.png'});

    response.success(resultJson);
});
