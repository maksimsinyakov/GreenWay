class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.integer :id
      t.integer :load
      t.float :fare
      t.text :info

      t.timestamps
    end
  end
end
