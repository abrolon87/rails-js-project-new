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
 

LifeAspect.create(name: "home")
LifeAspect.create(name: "health")
LifeAspect.create(name: "work")



Problem.create(body: "arguing with mom", date: "2019-2-11", solved?: false, life_aspect_id: 1)
Problem.create(body: "neighbors too noisy", date: "2019-2-11", solved?: false, life_aspect_id: 1)
Problem.create(body: "i need to loose weight", date: "2019-5-11", solved?: false, life_aspect_id: 2)
Problem.create(body: "annoying coworkers", date: "2019-2-11", solved?: false, life_aspect_id: 3)
Problem.create(body: "not paid enough", date: "2019-2-11", solved?: false, life_aspect_id: 3)