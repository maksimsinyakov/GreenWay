class Route < ActiveRecord::Base
  has_many :moves

  attr_accessible :fare, :id, :info, :load, :name, :coord
end
