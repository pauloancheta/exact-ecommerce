Rails.application.routes.draw do
  root 'welcome#index'
  post '/receipt' => 'welcome#receipt'
end
