Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  post '/auth/login', to: 'authentication#login'

  resources :businesses, only: [:index] #shows all businesses
  resources :reviews, only: [:index]

  scope '/users/:id' do
    resources :businesses, only: [:create, :show, :update, :destroy]  #show -- all businesses for that user 
    resources :reviews, only: [:create, :show, :update, :destroy] 
  end

end
