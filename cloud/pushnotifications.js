// Make sure all installations point to the current user.
Parse.Cloud.beforeSave(Parse.Installation, function(request, response) {
  console.log("inside beforeSave function")
  Parse.Cloud.useMasterKey();
  if (request.user) {
    console.log("Got user id in beforeSave");
    request.object.set('user', request.user);
  } else {
    console.log("NO user id in beforeSave");
    request.object.unset('user');
  }
  response.success();
});


Parse.Cloud.define("plan__send_push_to_users", function(request, response) {
    console.log("inside plan__send_push_to_users")
    var planId = request.params["planid"];
    var pfUsers = request.params["users"];
    var query = new Parse.Query(Parse.Installation);
    query.containedIn('user', pfUsers);
 
    Parse.Push.send({
      where: query, // Set our Installation query.
      data: {
        alert: "hello"
      }
    });
});