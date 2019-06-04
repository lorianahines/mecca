class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.date :review_date
      t.string :title
      t.integer :rating
      t.text :review_body

      t.timestamps
    end
  end
end
