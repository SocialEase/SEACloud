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
