Rails.application.routes.draw do
  resources :scores, only: [:index, :create, :show]
  resources :vehicles, only: [:index, :create, :show, :edit]
  resources :players, only: [:index, :create, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
