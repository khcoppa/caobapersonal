class Booking < ApplicationRecord
  validates :booker_id, :date, :start_time, :end_time, presence: true
  validates_uniqueness_of :date, :scope => [:start_time, :end_time]

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: 'User'

end
