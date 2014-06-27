class User < ActiveRecord::Base
  has_many :moves

  validates :name, presence: true
  attr_accessible :surname, :card, :id, :info, :name
end
