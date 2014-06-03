class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :id
      t.string :name
      t.integer :car_id
      t.text :info

      t.timestamps
    end
  end
end
