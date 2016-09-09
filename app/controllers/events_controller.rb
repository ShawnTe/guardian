class EventsController < ApplicationController

	def index
		@events = current_user.events
	end

	def new
		# render 'in-progress'
	end

	def create
		@event = Event.new(user_id: current_user.id, drone_id: 1)

		if @event.save
			if request.xhr?
				@event.update(place_id: params["place_id"])
				render status: 200, :json => {event_id: "#{@event.id}", drone_id: "#{@event.drone.id}"}

			end
		else
			@error_messages = @event.errors.full_messages
			p @error_messages
			root_path
		end
	end

	def edit
		edit_event_path
	end

	def show
		@event = Event.find(params[:id])
		@user = User.find(@event.user.id)

		#friend variable will need to be updated
		@friend = Friend.find(@user.friends.first.id)
		event_path
	end

	def update
		redirect_to 'events_path'
	end

	def destroy
		# does user need to be able to destroy event from the events index?
	end

end
