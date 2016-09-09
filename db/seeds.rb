Drone.delete_all
Event.delete_all
User.delete_all
Friend.delete_all

User.create(first_name: "Bill", last_name: "Miller", email:"e@c.com", password: "123456",phone_number: "+16502156875")

Friend.create(first_name: "Jen", last_name: "Miller", user_id: 1, email: "e@b.com", phone_number: "+15304703493")
Friend.create(first_name: "Jake", last_name: "Miller", user_id: 1, email: "e@b.com", phone_number: "+15304703493")
Friend.create(first_name: "Juanita", last_name: "Miller", user_id: 1, email: "e@b.com", phone_number: "+15304703493")
Friend.create(first_name: "Javier", last_name: "Miller", user_id: 1, email: "e@b.com", phone_number: "+15304703493")

Drone.create(name: "Patricia", server_address: "http://172.16.50.232:8080/start", user_id: 1)

4.times do

  Event.create(temp_url: "http://guardian.pagekite.me", permanent_url: "http://guardian.pagekite.me", place_id: "633 Folsom St, San Francisco, CA", user_id: 1, drone_id: 1)
end
