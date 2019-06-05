class BusinessesController < ApplicationController
  def index
    @businesses = Business.all 
    render json: @businesses, status: :ok
  end

  def show
    @user = User.find(params[:user_id])
    @business = @user.businesses.find(params[:id])
    render json: @business, status: :ok
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
    @user = User.find(params[:user_id])
    @business = Business.find(params[:id])

    if @business.update(business_params)
      render json: @business, status: :ok
    else
      render json: { errors: @business.errors }, status: :unprocessable_entity
    end
  end

  def destroy
  end

  private

  def business_params
    params.require(:business).permit(:name, :url, :photo_url, :description, :is_green, :category, :user_id)
  end

end
