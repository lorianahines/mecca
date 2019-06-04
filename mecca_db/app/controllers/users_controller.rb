class UsersController < ApplicationController
  before_action :authorize_request, except: :create

  def show 
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def new
    @user = User.new
    render json: @user, status: :ok
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end  
 
 private
 
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :is_owner, :password, :password_confirmation)
  end

end
