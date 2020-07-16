class LifeAspect < ApplicationRecord
  has_many :problems, dependent: :delete_all
  validates :name, presence: true, uniqueness: true
end
