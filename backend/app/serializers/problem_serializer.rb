class ProblemSerializer < ActiveModel::Serializer 
  attributes :id, :body, :date, :life_aspect_id
  belongs_to :life_aspect 
end