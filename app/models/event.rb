class Event < ApplicationRecord
  belongs_to :drone
  belongs_to :user
  has_and_belongs_to_many :friends
end
