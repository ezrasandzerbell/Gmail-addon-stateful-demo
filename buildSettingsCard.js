// Build Settings Card

function buildSettingsCard() {
  
  // create a new card
  var card = CardService.newCardBuilder();  
    
  // Set name and header title on card 
  card.setName("SettingsCard").setHeader(CardService.newCardHeader().setTitle('Company Registration'));
  
  // newCardSections are a that Widgets can be painted onto
  var sectionSettings = CardService.newCardSection();
  
  // get organization object
  var organization = getObjectByID(organizationSample, userProperties.getProperty('organizationID'));
  Logger.log("Current Organization on buildSettingsCard: " + organization.name);

  // get scheduleID
  
  var schedules = scheduleOptions.filter(function(schedule){
    return schedule.organization_id === organization.id
  });
  
  var scheduleID = userProperties.getProperty('currentScheduledID') || schedules[0].id;
  
  userProperties.setProperty('currentScheduleID', scheduleID);  
  
  // get the current member associated with current organizatio
  var currentMember = getObjectByID(memberSample, userProperties.getProperty('currentMemberID'));
  Logger.log("Current Member Name on buildSettingsCard: " + currentMember.name);
  
  // get currentMembers to be displayed on the member select menun
  
  var currentMembers = memberSample.filter(function(member){
    return member.organization_id === userProperties.getProperty('organizationID');
  });
  
  Logger.log("name of member 1 associated with current organization name on buildSettingsCard: " + currentMembers[0].name);
  Logger.log("name of member 2 associated with current organization name on buildSettingsCard: " + currentMembers[1].name);
  
  // Add widgets to the Settings card section 
  
  // Add the organization select menu widget to the card
  
  sectionSettings.addWidget(getOrganizationSelectMenu(organizationSample, organization || organizationSample[0]));
  
  // check that there are members associated with the current organization. If so, display the member select menu widget on the card
  
  if (currentMembers.length > 0) { 
    
    sectionSettings.addWidget(getMembersSelectMenu(currentMembers, currentMember || memberSample[0]));
  } else {
    sectionSettings.addWidget(CardService.newTextParagraph().setText("No Members Available"));
  };
  
  // btnSaveSettings is a button located at the bottom of the card
  // actSaveSettings a newAction that triggers a function called buildScheduleTypes. 
  // buildScheduleTypes is located in the corresponding buildScheduleTypes.gs file
  
  var actSaveSettings = CardService.newAction()
        .setFunctionName('buildScheduleTypes');
  var btnSaveSettings = CardService.newTextButton()
        .setText("Save")
        .setOnClickAction(actSaveSettings);
  
  // add the button 
  
  sectionSettings.addWidget(btnSaveSettings);

  // Return and build the card
  
 return card.addSection(sectionSettings).build();
  
}
