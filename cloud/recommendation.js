
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

    console.log(request);
    var resultJson = [];
    resultJson.push({"addressLine1": "357 Castro St",
                     "city": "Mountain View",
                     "description": "Indian",
                     "image": {
                         "__type": "File",
                         "name": "tfss-ee547989-afeb-41a5-ac0f-71b1d7703b2f-Sakoon.png",
                         "url": "http://files.parsetfss.com/36ba3fa4-0edd-4544-8a1f-a772ccd9446f/tfss-ee547989-afeb-41a5-ac0f-71b1d7703b2f-Sakoon.png"
                     },
                     "location": {
                         "__type": "GeoPoint",
                         "latitude": 37.3916756,
                         "longitude": -122.0799188
                     },
                     "name": "Sakoon",
                     "phone": "(650) 965-2000",
                     "posterImageUrl": "https://asocialease.parseapp.com/images/stub/Sakoon.png",
                     "rating": 3.5,
                     "state": "CA",
                     "zipcode": "94041"});
    resultJson.push({"addressLine1": "600 W El Camino Real",
                     "city": "Mountain View",
                     "description": "Indian",
                     "image": {
                         "__type": "File",
                         "name": "tfss-f63cd478-0036-4238-b5c5-43ad097db053-AmberCafe.png",
                         "url": "http://files.parsetfss.com/36ba3fa4-0edd-4544-8a1f-a772ccd9446f/tfss-f63cd478-0036-4238-b5c5-43ad097db053-AmberCafe.png"
                     },
                     "location": {
                         "__type": "GeoPoint",
                         "latitude": 37.3851341,
                         "longitude": -122.0820062
                     },
                     "name": "Amber Cafe",
                     "phone": "(650) 968-1751",
                     "posterImageUrl": "https://asocialease.parseapp.com/images/stub/AmberCafe.png",
                     "rating": 4,
                     "state": "CA",
                     "zipcode": "94041"});
    resultJson.push({"addressLine1": "129 Lytton Ave",
                     "city": "Palo Alto",
                     "description": "Indian, Pakistani",
                     "image": {
                         "__type": "File",
                         "name": "tfss-a07cff17-e56f-465d-a0d0-ae85e60d3d60-Darbar.png",
                         "url": "http://files.parsetfss.com/36ba3fa4-0edd-4544-8a1f-a772ccd9446f/tfss-a07cff17-e56f-465d-a0d0-ae85e60d3d60-Darbar.png"
                     },
                     "location": {
                         "__type": "GeoPoint",
                         "latitude": 37.4448476,
                         "longitude": -122.1651561
                     },
                     "name": "Darbar",
                     "phone": "(650) 321-6688",
                     "posterImageUrl": "https://asocialease.parseapp.com/images/stub/Darbar.png",
                     "rating": 4.5,
                     "state": "CA",
                     "zipcode": "94301"});

    response.success(resultJson);
});
