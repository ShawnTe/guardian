class EventsFriends < ActiveRecord::Migration[5.0]
  def change
  	create_join_table :events, :friends do |t|
  		t.index :friend_id
  		t.index :event_id

  	end
  end
end
