class Car < ActiveRecord::Base
  belongs_to :user, dependent: :destroy
  has_many :passed_cars

  attr_accessible :brand, :color, :id, :model, :reg, :user_id
end
