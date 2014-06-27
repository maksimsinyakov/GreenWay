class AddCoord1ToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :coord, :string
  end
end
