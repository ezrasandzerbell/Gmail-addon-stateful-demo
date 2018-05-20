// create stateful property service by instantiating User Properties
// PropertiesService storage is made possible by the oAuthScope "script.storage" in appscript.json

var userProperties = PropertiesService.getUserProperties();

// this startApp method is the first thing to load on startup
// startUp is called by the onTriggerFunction property in appscript.json.

function startApp () {

  // First, we establish the organizationID. There are two options. 
  // If organizationID already exists as a property in the state's storage, then it gets that value. 
  // Otherwise, we get the first organization object in the jsonData array. 
  
  var organizationID = userProperties.getProperty('organizationID') || organizationSample[0].id;
  
  // Now that the organizationID var is established, we use setProperty to store that ID in our state.
  
  userProperties.setProperty('organizationID', organizationID);
  
  // Next we gather the array of members who share the organizationID of our current selected org. 
  
  var members = memberSample.filter(function(member){
    return member.organization_id === organizationID
  });
  
  // logs are used throughout these docs for testing purposes. 
  
  Logger.log("first member on startApp: " + members[0].name)
  
  // We get a current Member ID, either from the state or from the first  member in our members array.
  
  var memberID = userProperties.getProperty('currentMemberID') || members[0].id;
  
  userProperties.setProperty('currentMemberID', memberID);
  
  Logger.log("memberID on startApp: " + memberID)
  
  // Finally, the scheduleOptions from appscript.json are filtered by organization id to provide our schedule array.
  
  var schedules = scheduleOptions.filter(function(schedule){
    return schedule.organization_id === organizationID
  });
  
  var scheduleID = userProperties.getProperty('currentScheduledID') || schedules[0].id;
  
  userProperties.setProperty('currentScheduleID', scheduleID);
  
  Logger.log("schedules[0].name on startApp: " + schedules[0].name);
  Logger.log("schedules[1].name on startApp: " + schedules[1].name);
  
  // return the function located in buildSettingsCard.gs, which loads the first card based on our stateful data
  
  return buildSettingsCard()
  
}