Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  post '/auth/login', to: 'authentication#login'

  resources :businesses, only: [:index] #shows all businesses

  scope '/users/:id' do
    resources :businesses, only: [:create, :show, :update, :destroy]  #show -- all businesses for that user 
  end

end
