class FriendsController < ApplicationController

  def index
    @friends = current_user.friends
  end

  def create
    @friend = Friend.new(friend_params)
    @friend.user_id = current_user.id
    if @friend.save
      redirect_to @friend
    else
      render 'new'
    end
  end

  def new
  end

  def edit
    @friend = Friend.find(params[:id])
  end

  def destroy
    @friend = Friend.find(params[:id])
    @friend.destroy

    redirect_to friends_path
  end

  def show
    @friend = Friend.find(params[:id])
  end

  def update
    @friend = Friend.find(params[:id])

    if @friend.update(friend_params)
      redirect_to @friend
    else
      render 'edit'
    end
  end

  private
  
  def friend_params
    params.require(:friend).permit(:first_name, :last_name, :email, :phone_number)
  end
end
