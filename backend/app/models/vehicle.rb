class Vehicle < ApplicationRecord
    validates :kind, presence: true
    validates :name, presence: true
end
