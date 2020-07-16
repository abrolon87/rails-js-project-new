Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :life_aspects

  resources :problems

  resources :life_aspects do 
    resources :problems   
  end

end
