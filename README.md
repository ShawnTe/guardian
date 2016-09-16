#Guardian
 An app that helps get you home safely.

 ###With the push of a button
 * drone lifts off
 * drone begins video recording
 * text message sends to a friend with link to video stream

 Enter your location and this info is added to the video stream page so your friend knows exactly where you are.

 Friend clicks button across top of screen to indicate they're watching.
 This triggers update to users phone that their friend is watching.
 **Challenge:** How to have one server simultaneously changing two clients, the users and their friends.
 **Solution:** Use setInterval function with a heartbeat to monitor for change in event state.
 
 Upon safe arrival at your destination, hitting the "Safe" button:
 * lands the drone
 * ends video stream
 * triggers change in friends view (home!)

##Team
* Jason Lorentzen @codejlo
* Shawn Tuttle @shawnte
* Armon Arcuri @armoney
* Eric Booker @ericbooker12
