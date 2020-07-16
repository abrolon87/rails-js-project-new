class LifeAspectSerializer < ActiveModel::Serializer 
  attributes :id, :name 
  has_many :problems
end