require 'openssl'

class WelcomeController < ApplicationController
  def index
    @items = Item.all
  end

  def receipt
    @auth_num = params['Authorization_Num']
    @ctr = params['exact_ctr']
    @merchant_name = params['MerchantName']
  end

end