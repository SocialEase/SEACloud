
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

/**
 * Application constants
 */
var ACTIVITY_TYPE_DICT = {1: "Lunch",
                          2: "Dinner"}

var ACTIVITY_STATE_DELETED = 0
var ACTIVITY_STATE_VOTING = 1
var ACTIVITY_STATE_VOTED = 2

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
 * @param groupId          {Int}    (required) - group id for which recommendation needs to generated
 */
Parse.Cloud.define("user__get_user_groups", function(request, response) {
    var groupId = request.params["groupid"];
    console.log(groupId);
    
    var Group = Parse.Object.extend("Group");
    var query = new Parse.Query(Group);
    query.get(groupId, {
        success: function(group) {
            var usersString = group.get("users")
            var usersPhoneNumbers = usersString.split(",")
            
            var User = Parse.Object.extend("User");
            var query2 = new Parse.Query(User);
            query2.containedIn("phone", usersPhoneNumbers);
            query2.find({
                success: function(results) {
                    response.success(results)
                    
                    alert("Successfully retrieved " + results.length + " users.");
                    // Do something with the returned Parse.Object values
                    for (var i = 0; i < results.length; i++) {
                        var object = results[i];
                        console.log(object.id + ' - ' + object.get('phone'));
                    }
                },
                error: function(error) {
                    console.log("Error: " + error.code + " " + error.message);
                    response.failure("Error retrieving users friends")
                }
            });
            

                                    
            // response.success(usersPhoneNumbers)
        },
        error: function(object, error) {
            response.failure("Error retrieving")
        }
    });
});


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
                     'name': 'Lunch tomorrow',
                     'rating': 4.5,
                     'location': 'Mountain View, CA',
                     'created_at': "Mon Oct 19 11:08:02 +0000 2012",
                     'happens_at': "Wed Oct 21 12:30:00 +0000 2012",
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/Sakoon.png',
                     'group': {'id': 12, 'name': 'F.R.I.E.N.D.S'}});
    resultJson.push({'id': 2,
                     'name': 'Happy Hour on Thursday, 10/22',
                     'rating': 3.0,
                     'location': 'Redwood City, CA',
                     'created_at': "Mon Oct 19 1:18:02 +0000 2012",
                     'happens_at': "Thu Oct 22 5:30:00 +0000 2012",
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/HausStaudt.jpeg',
                     'group': {'id': 12, 'name': 'F.R.I.E.N.D.S'}});
    resultJson.push({'id': 3,
                     'name': 'Movie on Friday, 10/23',
                     'rating': 4.0,
                     'location': 'Santa Clara, CA',
                     'created_at': "Mon Oct 19 17:40:02 +0000 2012",
                     'happens_at': "Fri Oct 23 8:30:00 +0000 2012",
                     'posterImage': 'https://asocialease.parseapp.com/images/stub/AMC.jpeg',
                     'group': {'id': 15, 'name': 'Grad Friends'}});

    response.success(resultJson);
});


/**
 * Section for Activity object webhook
 */

/**
 * Webhook for getting details about an activity
 *
 * @param activityId   {Int}    (required) - activity id for which details needs to fetched
 *
 */
Parse.Cloud.define("activity__get_details", function(request, response) {


    var activityOptionsJson = [];

    activityOptionsJson.push({'id': 2,
                              'name': 'Siva',
                              'rating': 3.0,
                              'location': 'Palo Alto, CA',
                              'posterImage': 'https://asocialease.parseapp.com/images/stub/Siva.png',
                              'liked_by': [{'id': 12, 'name': 'Uday'}, {'id': 13, 'name': 'Yuichi'}],
                              'disliked_by': [{'id': 11, 'name': 'Amay'}]});
    activityOptionsJson.push({'id': 4,
                              'name': 'Madras Cafe',
                              'rating': 4.0,
                              'location': 'Sunnyvale, CA',
                              'posterImage': 'https://asocialease.parseapp.com/images/stub/MadrasCafe.png',
                              'liked_by': [{'id': 11, 'name': 'Amay'}],
                              'disliked_by': []});
    activityOptionsJson.push({'id': 5,
                              'name': 'Chaat Bhavan',
                              'rating': 3.5,
                              'location': 'Sunnyvale, CA',
                              'posterImage': 'https://asocialease.parseapp.com/images/stub/ChaatBhavan.png',
                              'liked_by': [],
                              'disliked_by': []});

    var activityDetails = {};
    activityDetails["state"] = ACTIVITY_STATE_VOTING;
    activityDetails["options"] = activityOptionsJson;

    response.success(activityDetails);
});