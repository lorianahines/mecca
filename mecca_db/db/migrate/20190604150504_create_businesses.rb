class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name
      t.string :url
      t.string :photo_url
      t.text :description
      t.boolean :is_green
      t.string :category

      t.timestamps
    end
  end
end
