class CreateChatRooms < ActiveRecord::Migration
  def change
    create_table :chat_rooms do |t|
      t.string :name

      t.timestamps null: false
    end
    add_index :chat_rooms, :name, unique: true
  end
end
