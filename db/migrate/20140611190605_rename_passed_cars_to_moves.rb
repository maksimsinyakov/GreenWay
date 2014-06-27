class RenamePassedCarsToMoves < ActiveRecord::Migration
  def change
    rename_table :passed_cars, :moves
  end
end
