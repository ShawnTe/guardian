#Guardian
An app that helps you get home safely.

This was our final project at DevBootcamp. Using a combo of app + hardware, we used a Parrot AR.Drone 2.0 to monitor User's progress for short (up to 10 minute) walks. Future iteration would include the feature of a drone auto-following user.
**Challenge:** The drone communicates to controller over wifi. We were unable, on such short timeframe, to figure out how to utilize both wifi (to connect with drone) as well as data (to connect with app server).
**Solution:** The app sent command to a second server which issued the commands for the drone to take-off, walk forward, and land (instead of communicating with the drone itself).

##Features

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

##My Role
Rails backend, most of the js/ajax functionality, CRUD views, Devise setup
