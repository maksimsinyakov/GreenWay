class Car < ActiveRecord::Base
  belongs_to :user, dependent: :destroy

  attr_accessible :brand, :color, :id, :model, :reg, :user_id
end
