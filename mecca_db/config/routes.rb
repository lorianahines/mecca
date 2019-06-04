Rails.application.routes.draw do
  resources :users, only: [:new, :create, :show]
  post '/auth/login', to: 'authentication#login'


end
