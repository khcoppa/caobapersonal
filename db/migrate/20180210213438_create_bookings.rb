class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :booker_id, null: false
      t.integer :date, null: false
      t.date :start_time, null: false
      t.date :end_time, null: false

      t.timestamps
    end
  end
end
