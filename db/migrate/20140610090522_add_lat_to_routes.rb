class AddLatToRoutes < ActiveRecord::Migration
  def change
    add_column :routes, :lat, :decimal
    add_column :routes, :lng, :decimal
  end
end
