// Three json objects to simulate API Data for Organizations (companies), Members (Employees) and their schedule availability (Day/Night)).

var organizationSample = [
  {"name" : "Intel", "id" : "1"}, 
  {"name" : "Google", "id" : "2"}, 
  {"name" : "Amazon", "id" : "3"}
];

// Members and Schedules are both associated with an organization ID.  

var memberSample = [
  {"name" : "Charles White", "id" : "1", "organization_id" : "1"}, 
  {"name" : "John Doe", "id" : "2", "organization_id" : "1"}, 
  {"name" : "Peter Franklin", "id" : "3", "organization_id" : "2"},
  {"name" : "Nancy Walker", "id" : "4", "organization_id" : "2"},
  {"name" : "Jane Johnson", "id" : "5", "organization_id" : "3"},
  {"name" : "Oscar Peterson", "id" : "6", "organization_id" : "3"}
];

var scheduleOptions = [
  {"name" : "Day Shift", "id" : "1", "organization_id" : "1"},
  {"name" : "Night Shift", "id" : "2", "organization_id" : "1"},
  {"name" : "Day Shift", "id" : "3", "organization_id" : "2"},
  {"name" : "Night Shift", "id" : "4", "organization_id" : "2"},
  {"name" : "Day Shift", "id" : "5", "organization_id" : "3"},
  {"name" : "Night Shift", "id" : "6", "organization_id" : "3"}
];