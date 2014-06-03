class User < ActiveRecord::Base
  has_many :cars

  validates :name, presence: true
  attr_accessible :car_id, :id, :info, :name
end
