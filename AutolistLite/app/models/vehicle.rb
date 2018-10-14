class Vehicle < ApplicationRecord
    validates :views_count, :VIN, presence: true

end 