class ChatRoom < ActiveRecord::Base
  before_create :capitalize_name

  validates :name, presence: true, uniqueness: {case_sensitive: false}

  def capitalize_name
    self.name = name.split.map{|s| s.capitalize}.join(" ")
  end
end
