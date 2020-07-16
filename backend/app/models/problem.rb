class Problem < ApplicationRecord 
  belongs_to :life_aspect
  validates :body, presence: true
  validates :date, presence: true
end
