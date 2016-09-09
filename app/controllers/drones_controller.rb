class DronesController < ApplicationController

  def show
    @drone = Drone.find(params[:id])
    @user = current_user
    @friend = Friend.find(@user.friends.first.id)
    event_drone_path
  end

end
