class ChatRoomsController < ApplicationController

  def index
    chat_rooms  = ChatRoom.all
    render json: chat_rooms.as_json, status: 200
  end

  def show
    chat_room = ChatRoom.find(params[:id])
    if chat_room
      render json: chat_room.as_json(include: {messages: {only: [:text, :created_at]}}), status: 200
    else
      render json: { name: "No chat room here..."}.to_json, status: 200
    end
  end

  def create
    chat_room = ChatRoom.new(chat_room_params)
    if chat_room.save
      render json: chat_room.as_json, status: 200
    else
      render json: { errors: chat_room.errors.full_messages }.to_json, status: :unprocessable_entity
    end
  end

  private

  def chat_room_params
    params.require(:chat_room).permit(:name)
  end
end
