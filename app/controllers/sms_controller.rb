class SmsController < ApplicationController

	def text_friend
		@user = current_user
		message = "This is " + @user.first_name + " " + @user.last_name + ". Thanks for watching that I get home safely! Link to watch: http://172.16.51.60:3000/feed"

	 	to = @user.friends.first
	 	client = Twilio::REST::Client.new(
	    	ENV["TWILIO_ACCOUNT_SID"],
	    	ENV["TWILIO_AUTH_TOKEN"]
	  	)
	  	if client.messages.create(

	    		to: "+16505495775",
	    		from: @user.phone_number,
	     		body: message
	    	)
	    	flash[:notice] = "Message has been sent!"
	  	else
	    	flash[:notice] = "Error: Message did not send"
	  	end

		end
end
