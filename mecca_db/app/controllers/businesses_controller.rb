class BusinessesController < ApplicationController
  def index
    @businesses = Business.all 
    render json: @businesses, status: :ok
  end

  def show
    # @user = User.find(params[:id])
    # @businesses = @user.businesses
    # render json: @businesses, status: :ok
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render json: @business, status: :created
    else
      render json: @business.errors, status: :unprocessable_entity
    end
  

  end

  def update
  end

  def destroy
  end

  private

  def business_params
    params.require(:business).permit(:name, :url, :photo_url, :description, :is_green, :category, :user_id)
  end

end
