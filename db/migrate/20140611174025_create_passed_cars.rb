class CreatePassedCars < ActiveRecord::Migration
  def change
    create_table :passed_cars do |t|
      t.integer :id
      t.integer :car_id
      t.integer :route_id
      t.integer :status

      t.timestamps
    end
  end
end
