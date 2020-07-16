# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

requires 'faker'

LifeAspect.delete_all
Problem.delete_all
 
life_aspects = [
  'home',
  'work',
  'health'
  
]
 
life_aspects_array = []
 
life_aspects.each do |name|
  life_aspects_array << LifeAspect.create(name: name)
end
 
life_aspects_array.each do |e|
  e.each do |stuff|
    body = Faker::Coffee.blend_name
    date = Faker::Date.between(from: 5.days.ago, to: Date.today)
    Problem.create(body: body, date: date, life_aspect_id: e.id)
  end
end