Rails.application.routes.draw do

  resources :chat_rooms, only: [:index, :create, :show] do
    resources :messages, only: [:create]
  end

  get '*path', to: 'application#angular'
  root to: 'application#angular'

end
