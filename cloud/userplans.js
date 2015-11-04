

/**
 * @param groupId          {Int}    (required) - group id for which recommendation needs to generated
 */
Parse.Cloud.define("plan__update_voting_status", function(request, response) {
    var planId = request.params["planId"];

    // query UsersPlan data class to get all the users of the plan
    var userPlans = Parse.Object.extend("UserPlans");
    var query = new Parse.Query(userPlans);
    query.equalTo("planId", planId);

    var votingComplete = 0;

    query.find({
      success: function(results) {
        // alert("Successfully retrieved " + results.length + " entries.");
        var planUsers = []
        for (var i = 0; i < results.length; i++) {
            var object = results[i];
            var userId = object.get('userId');
            planUsers.push(userId);
        }

        // query UserActivity data class to get all the acitivities and corresponding users
        var usersActivities = Parse.Object.extend("UserActivity");
        var query = new Parse.Query(usersActivities);
        query.equalTo("planId", planId);
        query.find({
          success: function(results) {
            // alert("Successfully retrieved " + results.length + " scores.");
            // Do something with the returned Parse.Object values
            var votedUserList = [];
            var activityVotingDict = {};
            var maxVotes = null;
            var maxVoteActivity = null;
            for (var i = 0; i < results.length; i++) {
              var object = results[i];

              // get user id
              var userId = object.get('userId');
              // get activity id
              var activityId = object.get('activityId');
              // get voting count number
              var vote = object.get('vote');

              if (vote != 0 && votedUserList.indexOf(userId) == -1) {
                votedUserList.push(userId);
              }

              if (!(activityId in activityVotingDict)) {
                activityVotingDict[activityId] = {};
                activityVotingDict[activityId]["upVotedBy"] = [];
                activityVotingDict[activityId]["downVotedBy"] = [];
                activityVotingDict[activityId]["vote"] = vote;
              } else {
                activityVotingDict[activityId]["vote"] += vote;
              }

              if (vote == 1) {
                activityVotingDict[activityId]["upVotedBy"].push(userId);
              } else if (vote == -1) {
                activityVotingDict[activityId]["downVotedBy"].push(userId);
              }

              // get activity with maximum votes
              if (maxVotes == null || activityVotingDict[activityId]["vote"] > maxVotes) {
                maxVotes = activityVotingDict[activityId]["vote"];
                maxVoteActivity = activityId;
              }
            }

            // if all the users have voted then choose the winning acitivity
            if (planUsers && votedUserList && planUsers.length == votedUserList.length) {
                // update max voted activity
                votingComplete = 1;
                var planObject = Parse.Object.extend("Plan");
                var query = new Parse.Query(planObject);
                query.get(planId, {
                  success: function(planObject) {
                    var planName = planObject.get("name");
                    var planDate = planObject.get("occurrenceDate");

                    alert(planName);
                    alert(planDate);

                    // The object was retrieved successfully.
                    planObject.set("votedActivityObjectId", maxVoteActivity);
                    planObject.set("activityVotingObject", activityVotingDict);
                    planObject.save(null, {
                      success: function(planObject) {
                        // send push notification to all users
                        var query = new Parse.Query(Parse.Installation);
                        query.containedIn('userId', planUsers);

                        Parse.Push.send({
                          where: query, // Set our Installation query.
                          data: {
                            alert: planName + " has been voted",
                            planId: planId
                          }
                        }, {
                              success: function() {
                                // Push was successful
                                // send response
                                response.success({"planId": planId,
                                                  "votingComplete": votingComplete,
                                                  "votedUserList": votedUserList,
                                                  "planUserList": planUsers,
                                                  "activityVotingDict": activityVotingDict,
                                                  "maxVotes": maxVotes,
                                                  "maxVoteActivity": maxVoteActivity});
                              },
                              error: function(error) {
                                // Handle error
                              }
                        });
                      }
                    });
                  },
                  error: function(object, error) {
                    // The object was not retrieved successfully.
                    // error is a Parse.Error with an error code and message.
                    alert("Error: " + error.code + " " + error.message);
                  }
                });
            } else {

                var planObject = Parse.Object.extend("Plan");
                var query = new Parse.Query(planObject);
                query.get(planId, {
                  success: function(planObject) {
                    // The object was retrieved successfully.
                    planObject.set("activityVotingObject", activityVotingDict);
                    planObject.save(null, {
                      success: function(planObject) {
                        // send push notification to all users
                        response.success({"planId": planId,
                                          "votingComplete": votingComplete,
                                          "votedUserList": votedUserList,
                                          "planUserList": planUsers,
                                          "activityVotingDict": activityVotingDict,
                                          "maxVotes": maxVotes,
                                          "maxVoteActivity": maxVoteActivity});

                      }
                    });
                  },
                  error: function(object, error) {
                    // The object was not retrieved successfully.
                    // error is a Parse.Error with an error code and message.
                    alert("Error: " + error.code + " " + error.message);
                  }
                });
            }
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
});
