unless ChatRoom.count > 0
  ChatRoom.create!(name: "General Discussion")
  ChatRoom.create!(name: "american football")
  ChatRoom.create!(name: "angularjs with ruby on rails")
  ChatRoom.create!(name: "things that work")
  ChatRoom.create!(name: "world peace")
end

unless Message.count > 0
  chat_rooms = ChatRoom.all
  40.times do
    chat_room = chat_rooms.sample
    chat_room.messages.create!(text: Faker::Hipster.paragraph(1,false,3))
  end
end

puts "Seed Finished"
puts "Total Number of Posts #{Message.count}"
puts "Total Number of ChatRooms: #{ChatRoom.count}"
