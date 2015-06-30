Rails.application.routes.draw do
  
  get 'home/index'

  namespace :api do
    resources :drinks
  end

  get "*path" => "home#index"

end
