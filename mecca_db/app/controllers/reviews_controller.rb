class ReviewsController < ApplicationController
  def index
    @reviews = Review.all 
    render json: @reviews, status: :ok
  end

  def show
    @user = User.find(params[:user_id])
    puts "This is the user #{@user.id}"
    puts "This is the review #{params[:id]}"
    @review = @user.reviews.find(params[:id])
   
    render json: @review, status: :ok
    
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # def update
  #   @user = User.find(params[:user_id])
  #   @business = Business.find(params[:id])

  #   if @business.update(business_params)
  #     render json: @business, status: :ok
  #   else
  #     render json: { errors: @business.errors }, status: :unprocessable_entity
  #   end
  # end

  # def destroy
  #   @user = User.find(params[:user_id])
  #   @business = Business.find(params[:id])

  #   if @business.destroy
  #     render json: @business, status: :no_content
  #   else
  #     render json: { errors: @business.errors }, status: :not_found
  #   end
  # end

  private

  def review_params
    params.require(:review).permit(:review_date, :title, :rating, :review_body, :user_id, :business_id)
  end
end
