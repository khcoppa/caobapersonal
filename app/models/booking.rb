class Booking < ApplicationRecord
  validates :booker_id, :date, :start_time, :end_time, presence: true
  validates_uniqueness_of :date, :scope => [:start_time, :end_time]

  belongs_to :booker,
    foreign_key: :booker_id,
    class_name: 'User'

  private
  def start_before_end
    return if start_time < end_time

    errors[:start_time] << 'Start time must be before End time'
    errors[:end_time] << 'End time must be after Start time'
    

end
