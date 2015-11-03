
/**
 * Section for UserGroup object webhooks
 */

/**
 * @param userId          {String}    (required) - user id to get groups for
 */
Parse.Cloud.define("user__get_user_groups", function(request, response) {
	var userId = request.params["userid"];
    
	var User = Parse.Object.extend("User");
	var queryUser = new Parse.Query(User);
	queryUser.get(userId, {
		success: function(user) {
			var groupsString = user.get("groups");
			var groupIds = groupsString.split(",");
						
			var Group = Parse.Object.extend("Group");
			var query2 = new Parse.Query(Group);
			query2.containedIn("objectId", groupIds);
			query2.find({
				success: function(groups) {
					                  
					alert("Successfully retrieved " + groups.length + " groups.");
					
					response.success(groups)
				},
				error: function(error) {
					console.log("Error: " + error.code + " " + error.message);
					response.failure("Error retrieving user's groups")
				}
			});
		},
		error: function(object, error) {
			response.failure("Error retrieving")
		}
	});
});

/**
 * @param userId          {String}    (required) - user id to get friends for
 */
Parse.Cloud.define("user__get_user_friends", function(request, response) {
	var userId = request.params["userid"];
    
	var User = Parse.Object.extend("User");
	var queryUser = new Parse.Query(User);
	queryUser.get(userId, {
		success: function(user) {
			var friendsString = user.get("friends");
			var userIds = friendsString.split(",");
						
			var User = Parse.Object.extend("User");
			var query2 = new Parse.Query(User);
			query2.containedIn("objectId", userIds);
			query2.find({
				success: function(friends) {
					                  
					alert("Successfully retrieved " + friends.length + " friends.");
					
					response.success(friends)
				},
				error: function(error) {
					console.log("Error: " + error.code + " " + error.message);
					response.failure("Error retrieving user's friends")
				}
			});
		},
		error: function(object, error) {
			response.failure("Error retrieving")
		}
	});
});

/**
 * @param groupId          {Int}    (required) - group id for which recommendation needs to generated
 */
Parse.Cloud.define("user__get_group_users", function(request, response) {
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
            query2.containedIn("objectId", usersPhoneNumbers);
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
