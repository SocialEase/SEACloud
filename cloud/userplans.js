

/**
 * @param groupId          {Int}    (required) - group id for which recommendation needs to generated
 */
Parse.Cloud.define("plan__get_updated_voting_status", function(request, response) {
    var params = request.params;
    console.log(params);
    
    // var Group = Parse.Object.extend("Group");
    // var query = new Parse.Query(Group);
    // query.get(groupId, {
    //     success: function(group) {
    //         var usersString = group.get("users")
    //         var usersPhoneNumbers = usersString.split(",")
            
    //         var User = Parse.Object.extend("User");
    //         var query2 = new Parse.Query(User);
    //         query2.containedIn("objectId", usersPhoneNumbers);
    //         query2.find({
    //             success: function(results) {
    //                 response.success(results)
                    
    //                 alert("Successfully retrieved " + results.length + " users.");
    //                 // Do something with the returned Parse.Object values
    //                 for (var i = 0; i < results.length; i++) {
    //                     var object = results[i];
    //                         console.log(object.id + ' - ' + object.get('phone'));
    //                 }
    //             },
    //             error: function(error) {
    //                 console.log("Error: " + error.code + " " + error.message);
    //                 response.failure("Error retrieving users friends")
    //             }
    //         });

    //     },
    //     error: function(object, error) {
    //         response.failure("Error retrieving")
    //     }
    // });
});
