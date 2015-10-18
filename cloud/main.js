
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// Stub call for API response for getting activity suggestion
Parse.Cloud.define("getActivityRecommendations", function(request, response) {
  var resultJson = [];
  resultJson.push({'name': 'Sakoon',
                   'rating': 4.5,
                   'location': 'Mountain View, CA',
                   'posterImage': 'http://travelgenes.com/wp-content/uploads/2014/12/Indian-Food-Not-To-Miss.jpg'});
  resultJson.push({'name': 'Siva',
                   'rating': 3.0,
                   'location': 'Palo Alto, CA',
                   'posterImage': 'http://images.indiatvnews.com/lifestylelifestyle/2014/food-fact1.jpgg'});
  resultJson.push({'name': 'Amber Cafe',
                   'rating': 4.0,
                   'location': 'Mountain View, CA',
                   'posterImage': 'http://wallpaper-hd.org/uploads/originals/2015/09/08/food_wallpaper_1366x768_Wonderful_Indian_Food_Wallpaper.jpg'});
  response.success(resultJson);
});
