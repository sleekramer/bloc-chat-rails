class ChatRoomsController < ApplicationController

  def index
    chat_rooms  = ChatRoom.all
    render json: chat_rooms.as_json, status: 200
  end


end
