require('cloud/recommendation.js');
require('cloud/usergroups.js');
require('cloud/pushnotifications.js');
require('cloud/useractivities.js');


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
 * Section for User object webhooks
 */


