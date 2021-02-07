class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :kind
      t.string :name

      t.timestamps
    end
  end
end
