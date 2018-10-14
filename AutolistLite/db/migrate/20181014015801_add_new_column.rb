class AddNewColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :vehicles, :VIN, :integer, null: false

  end
end
