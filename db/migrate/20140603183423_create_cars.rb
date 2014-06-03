class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.integer :id
      t.string :brand
      t.string :model
      t.string :reg
      t.string :color

      t.timestamps
    end
  end
end
