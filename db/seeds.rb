# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ChatRoom.create!(name: "General Discussion")
ChatRoom.create!(name: "american football")
ChatRoom.create!(name: "angularjs with ruby on rails")
ChatRoom.create!(name: "things that work")
ChatRoom.create!(name: "world peace")

puts "Total Number of ChatRooms: #{ChatRoom.count}"
