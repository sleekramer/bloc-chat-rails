class MessagesController < ApplicationController
  def create
    chat_room = ChatRoom.find(params[:chat_room_id])
    message = chat_room.messages.new(messages_params)
    if message.save
      render json: message.as_json(only: [:text, :username, :created_at]), status: 200
    else
      render json: { errors: message.errors.full_messages}.to_json, status: :unprocessable_entity
    end
  end

  private
  def messages_params
    params.require(:message).permit(:username, :text)
  end
end
