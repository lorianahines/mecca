class AddBusinessRefToReviews < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :business, foreign_key: true
  end
end
