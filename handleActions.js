// handle dropdown menu state-changes

function handleOrganizationChange(e) {
  
  var organization = getObjectByID(organizationSample, e.formInputs.selected_organization[0]);
  
  var currentMembers = memberSample.filter(function(member){
    return member.organization_id === organization.id;
  });
  var firstMember = currentMembers[0];
  
  // On organization change, update the state's organizationID to the new organization's ID and 
  // update the state's currentMemberID to be the first member of the organization's members. 
  
  userProperties.setProperty('organizationID', organization.id);
  userProperties.setProperty('currentMemberID', firstMember.id); 

  Logger.log("organization on handleOrganizationChange: " + organization.name + " " + organization.id);
  Logger.log("member on handleOrganizationChange: " + firstMember.name + " " + firstMember.id);
  
  return buildSettingsCard();
  
}

function handleMemberChange(e) {
  
  currentMembers = memberSample.filter(function(member){
    return member.organization_id === userProperties.getProperty('organizationID');
  });

  // On member change, update the state's memberID to the new member's ID
  
  var member = getObjectByID(currentMembers, e.formInputs.selected_member[0]);
  
  Logger.log("member on handleMemberChange: " + member.name + " " + member.id);
 
  userProperties.setProperty('currentMemberID', member.id);
  
  return buildSettingsCard();
  
}

function handleScheduleChange(e) {

  var schedule = getObjectByID(scheduleOptions, e.formInputs.selected_schedule[0]);
  
  Logger.log("schedule.id: " + schedule.id);
  
  // On schedule change, update the state's scheduleID to the new schedule's ID

  userProperties.setProperty('currentScheduleID', schedule.id);
  
}

// Universal Action Response Builder is set to the OnTrigger key in json manifest, and it runs the buildSettingsCard function

function navigateToSettings(e) {
  return CardService.newUniversalActionResponseBuilder()
      .displayAddOnCards(
          [buildSettingsCard()])
      .build();
}






