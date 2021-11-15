Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #   path           where to go
  get "/pages", to: "pages#index"
  get "pages/new", to: "pages#new"
  post "/pages", to: "pages#create"
end
