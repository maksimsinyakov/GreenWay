class Move < ActiveRecord::Base
  belongs_to :route
  belongs_to :car

  attr_accessible :car_id, :id, :route_id, :status
end
