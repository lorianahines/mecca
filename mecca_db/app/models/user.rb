class User < ApplicationRecord
  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  
  validates :email, presence: true, length: { maximum: 255 }, uniqueness: true

  has_secure_password
  validates :password, 
    	presence: true, 
    	length: { minimum: 6 },
    	if: -> { new_record? || !password.nil? }
end
