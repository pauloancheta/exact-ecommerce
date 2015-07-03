require 'openssl'

class WelcomeController < ApplicationController
  def index
    @items = Item.all
    @image = Faker::Avatar.image
  end

  def receipt
    @more_params = params
    @auth_num = params['Authorization_Num']
    @ctr = params['exact_ctr']
    @merchant_name = params['MerchantName']
  end

end