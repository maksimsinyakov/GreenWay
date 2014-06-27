class AddCoordToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :coord1, :string
    add_column :routes, :coord2, :string
  end
end
