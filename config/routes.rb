Rails.application.routes.draw do
  root "home#index"

  devise_for :users
  resources :users, only: [:show]

  resources :friends

  devise_scope :user do
   get '/users/sign_out' => 'devise/sessions#destroy'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :events do
    get '/stream' => "events#stream"
    get '/status' => "events#status"
    resources :drones, only: [:show]
  end

  get '/sms/text_friend' => 'sms#text_friend'

  # delete "/friends/:id" => "friends#destroy"
end
