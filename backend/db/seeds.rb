# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'faker'

# LifeAspect.delete_all
# Problem.delete_all
 
# life_aspects = [
#   'home',
#   'work',
#   'health'
  
# ]
 
# life_aspects_array = []
 
# life_aspects.each do |name|
#   life_aspects_array << LifeAspect.create(name: name)
# end
 
# life_aspects_array.each do |e|
#   e.each do |stuff|
#     body = Faker::Coffee.blend_name
#     date = Faker::Date.between(from: 5.days.ago, to: Date.today)
#     Problem.create(body: body, date: date, life_aspect_id: e.id)
#   end
# end

LifeAspect.create(name: "home")
LifeAspect.create(name: "health")
LifeAspect.create(name: "work")



Problem.create(body: "arguing with mom", date: "2019-2-11", life_aspect_id: 4)
Problem.create(body: "neighbors too noisy", date: "2019-2-11", life_aspect_id: 4)
Problem.create(body: "i need to loose weight", date: "2019-5-11", life_aspect_id: 6)
Problem.create(body: "annoying coworkers", date: "2019-2-11", life_aspect_id: 5)
Problem.create(body: "not paid enough", date: "2019-2-11", life_aspect_id: 5)