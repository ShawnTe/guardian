#Guardian
 An app that helps get you home safely.

####Push the Walk Me Home button
* Drone lifts off
* Drone begins video recording
* Text message sends to friend with link to video stream

####Enter location
* Geolocation map is added to video stream page so that friend knows exactly where user is

####Live connection communication
* Friend clicks button across top of screen to indicate they're watching
* User's phone is updated to say that their friend is watching
**Challenge:** How to have one server responding to both User and Friend's clients
**Solution:** Use setInterval function with a heartbeat to monitor change in event state.

####Push the Safe button upon arrival
* Lands the drone
* Ends video stream
* Triggers change in friends view

##Team
* Jason Lorentzen @codejlo
* Shawn Tuttle @shawnte
* Armon Arcuri @armoney
* Eric Booker @ericbooker12
