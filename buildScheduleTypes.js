// Build Schedule Types

function buildScheduleTypes(e) {
  
  var currentMemberID = userProperties.getProperty('currentMemberID');
  
  Logger.log("current member id: " + currentMemberID);
  
  
  // re-establish state variables for local scope

  var currentSchedules = scheduleOptions.filter(function(schedule){
    return schedule.organization_id === userProperties.getProperty('organizationID')
  });
  
  Logger.log("first schedule on currentSchedules: " + currentSchedules[0].name);
  
  // create card amd give it header title, establish section
  
   var cardScheduleTypes = CardService.newCardBuilder()
  .setName("ScheduleCard")
  .setHeader(CardService.newCardHeader().setTitle("Schedule Types"));
  
  var sectionSchedules = CardService.newCardSection();
  
  // add widgets to card section for Schedule types
  
  if (currentSchedules.length != 0) { 
    sectionSchedules.addWidget(getScheduleSelectMenu(currentSchedules));
  } else {
    sectionSchedules.addWidget(CardService.newTextParagraph().setText("No Schedule Types Available"));
  }
 
  // Print-to-Email Button (see createReply.gs)
 
  
  var action = CardService.newAction().setFunctionName('createReply');  
  
  sectionSchedules.addWidget(CardService
                    .newTextButton()
                    .setText('Confirm')
                    .setComposeAction(action, CardService.ComposedEmailType.REPLY_AS_DRAFT));
  
  return cardScheduleTypes.addSection(sectionSchedules).build();  
  
}