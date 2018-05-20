// generate select menu for ORGS 

function getOrganizationSelectMenu(organizations, currentOrganization) {
  
  Logger.log("Current organization name: " + currentOrganization.name);
  
  // create a new selectionInput called orgItems
  // set a title, field name, and attach a function that handles the change of organization
  
  var orgItems = CardService.newSelectionInput()
     .setType(CardService.SelectionInputType.DROPDOWN)
     .setTitle("What company do you work for?")
     .setFieldName("selected_organization")
     .setOnChangeAction(CardService.newAction()
         .setFunctionName("handleOrganizationChange"));

  // get all of the organizations that should be listed in the select menu
  
  organizations.forEach(function(org){
     
    Logger.log("getOrganizationSelectMenu org name " + org.name + " and org id: " + org.id +". Match?: " + (org.id === currentOrganization.id));
    
     orgItems.addItem(org.name, org.id, org.id === currentOrganization.id)
  });
  
  return orgItems;

}

// generate select menu for Members

function getMembersSelectMenu(currentMembers, currentMember){

  Logger.log("Current Member name: " + currentMember.name);
  
  // create a new selectionInput called memberList
  // set a title, field name, and attach a function that handles the change of member
  
  var memberList = CardService.newSelectionInput()
     .setType(CardService.SelectionInputType.DROPDOWN)
     .setTitle("Select your name from the list:")
     .setFieldName("selected_member")
     .setOnChangeAction(CardService.newAction()
         .setFunctionName("handleMemberChange"));

  // get all of the members that should be listed in the select menu
  
  currentMembers.forEach(function(member){
  
    Logger.log("getMembersSelectMenu Member name: " + member.name + " and member id: " + member.id +". Match?: " + (member.id === currentMember.id));
    
     memberList.addItem(member.name, member.id, member.id === currentMember.id)
  });

  return memberList;

}

// generate select menu for Schedule Types (schedule) 

function getScheduleSelectMenu(schedules){

  Logger.log("getScheduleSelectMenu | current schedules: " + schedules)
  
  // create a new selectionInput called scheduleOptions
  // set a title, field name, and attach a function that handles the change of schedule
  
  var scheduleOptions = CardService.newSelectionInput()
     .setType(CardService.SelectionInputType.DROPDOWN)
     .setTitle("Schedule Preference")
     .setFieldName("selected_schedule")
     .setOnChangeAction(CardService.newAction()
         .setFunctionName("handleScheduleChange"));

   /// get all of the schedules that should be listed in the select menu
  
  schedules.forEach(function(schedule){
    
    Logger.log("getScheduleSelectMenu chedule name: " + schedule.name + " and schedule id: " + schedule.id +". Match?: " + (schedule.id === schedule.id));
    
     scheduleOptions.addItem(schedule.name, schedule.id, false);
  });

  return scheduleOptions;

}