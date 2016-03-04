class Message < ActiveRecord::Base
  belongs_to :chat_room
  validates :text, presence: true, length: {minimum: 1}
end
