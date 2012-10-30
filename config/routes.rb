Blog::Application.routes.draw do
  resources :posts do
    resources :comments
  end

  get "blog/index"
  root :to => "blog#index"
end
