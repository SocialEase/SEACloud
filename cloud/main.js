
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

/**
 * Application constants
 */
var ACTIVITY_TYPE_DICT = {1: "Lunch",
                          2: "Dinner"}


Parse.Cloud.define("hello", function(request, response) {
    response.success("Hello world!");
});

/**
 * Convention for naming webhooks:  "{object}__{action}"
 */


/**
 * Section for UserGroup object webhooks
 */

/**
 * Webhook for getting activity recommendations for a user group
 *
 * @param groupId          {Int}    (required) - group id for which recommendation needs to generated
 * @param activityType     {Int}    (optional) - user specified filter for recommendation for activity type (e.g. Lunch, Dinner, etc)
 * @param acticityDate     {Object} (optional) - user specified filter for recommendation for activity date
 * @param acticityLocation {Object} (optional) - user specified filter for recommendation for activity location
 *
 */
Parse.Cloud.define("user_group__get_activity_recommendations", function(request, response) {


    var resultJson = [];
    resultJson.push({'id': 1,
                     'name': 'Sakoon',
                     'rating': 4.5,
                     'location': 'Mountain View, CA',
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/Sakoon.png'});
    resultJson.push({'id': 2,
                     'name': 'Siva',
                     'rating': 3.0,
                     'location': 'Palo Alto, CA',
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/Siva.png'});
    resultJson.push({'id': 3,
                     'name': 'Amber Cafe',
                     'rating': 4.0,
                     'location': 'Mountain View, CA',
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/AmberCafe.png'});
    resultJson.push({'id': 4,
                     'name': 'Madras Cafe',
                     'rating': 4.0,
                     'location': 'Sunnyvale, CA',
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/MadrasCafe.png'});
    resultJson.push({'id': 5,
                     'name': 'Chaat Bhavan',
                     'rating': 3.5,
                     'location': 'Sunnyvale, CA',
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/ChaatBhavan.png'});

    response.success(resultJson);
});

/**
 * Section for User object webhooks
 */

/**
 * Webhook for getting user current activities
 *
 * @param userId          {Int}    (required) - User id for which activities needs to fetched
 *
 */
Parse.Cloud.define("user__get_current_activities", function(request, response) {


    var resultJson = [];
    resultJson.push({'id': 1,
                     'name': 'Lunch at Sakoon',
                     'rating': 4.5,
                     'location': 'Mountain View, CA',
                     'created_at': "Mon Oct 19 11:08:02 +0000 2012",
                     'happens_at': "Wed Oct 21 12:30:00 +0000 2012",
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/Sakoon.png',
                     'group': {'id': 12, 'name': 'F.R.I.E.N.D.S'}});
    resultJson.push({'id': 2,
                     'name': 'Happy Hour at Hause Staudt',
                     'rating': 3.0,
                     'location': 'Redwood City, CA',
                     'created_at': "Mon Oct 19 1:18:02 +0000 2012",
                     'happens_at': "Thu Oct 22 5:30:00 +0000 2012",
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/HausStaudt.jpeg',
                     'group': {'id': 12, 'name': 'F.R.I.E.N.D.S'}});
    resultJson.push({'id': 3,
                     'name': 'Movie at AMC Mercado',
                     'rating': 4.0,
                     'location': 'Santa Clara, CA',
                     'created_at': "Mon Oct 19 17:40:02 +0000 2012",
                     'happens_at': "Fri Oct 23 8:30:00 +0000 2012",
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/AMC.jpeg',
                     'group': {'id': 15, 'name': 'Grad Friends'}});

    response.success(resultJson);
});