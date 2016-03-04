Rails.application.routes.draw do
  root to: 'application#angular'

  resources :chat_rooms, only: [:index, :create]
end
