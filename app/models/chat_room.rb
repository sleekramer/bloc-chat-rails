class ChatRoom < ActiveRecord::Base
  before_create :capitalize_name
  has_many :messages
  validates :name, presence: true, uniqueness: {case_sensitive: false}

  def capitalize_name
    self.name = name.split.map{|s| s.capitalize}.join(" ")
  end
end
