Rails.application.routes.draw do

  resources :chat_rooms, only: [:index, :create, :show]

  get '*path', to: 'application#angular'
  root to: 'application#angular'

end
