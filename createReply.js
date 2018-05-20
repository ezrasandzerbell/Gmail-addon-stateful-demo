// This function is responsible for generating the email draft in response to current email

function createReply(e) {
    
  // get current organization
   
  var organization = getObjectByID(organizationSample, userProperties.getProperty('organizationID'));
 
  Logger.log("createReply organization: " + organization.name);
  
  // get current members and testconnection
  
  var currentMembers = memberSample.filter(function(member){
    return member.organization_id === userProperties.getProperty('organizationID');
  });
  
  Logger.log("currentMembers[0].name from createReply: " + currentMembers[0].name);
  Logger.log("currentMembers[1].name from createReply: " + currentMembers[1].name);

  // testing state for all ID's
  
  Logger.log("state prop currentMemberID: " + userProperties.getProperty('currentMemberID'));
  Logger.log("state prop currentScheduleI: " + userProperties.getProperty('currentScheduleID'));
  Logger.log("state prop organizationID: " + userProperties.getProperty('organizationID'));
  
  // get current member 
  
  var currentMember = getObjectByID(currentMembers, userProperties.getProperty('currentMemberID'));
  
  Logger.log("currentMember from createReply: " + currentMember.name);
  
  // get current schedule options
  
  var currentScheduleOptions = scheduleOptions.filter(function(schedule){
    
    Logger.log("scheduleOptions fromcreateReply, filtered by schedule: " + schedule.name);
    
    return schedule.organization_id === userProperties.getProperty('organizationID');
  });
  
  Logger.log("currentScheduleOptions[0].name from createReply: " + currentScheduleOptions[0].name);
  Logger.log("currentScheduleOptions[1].name from createReply: " + currentScheduleOptions[1].name); 
  Logger.log("currentScheduleID from createReply: " + userProperties.getProperty('currentScheduleID'));
  
  // get current schedule
  
  var currentSchedule = getObjectByID(currentScheduleOptions, userProperties.getProperty('currentScheduleID'));
    
  Logger.log("currentSchedule from createReply: " + currentSchedule);
  
  // everything from here on is distinct to the gmailDraft build.
  
    var accessToken = e.messageMetadata.accessToken;
    GmailApp.setCurrentMessageAccessToken(accessToken);
    
    var messageId = e.messageMetadata.messageId;
    var message = GmailApp.getMessageById(messageId);
 
  // test that all variables are loading correctly
  
  Logger.log("Hello, this is " + currentMember.name + " from " + organization.name + " and I will be working the " + currentSchedule.name);
  
  // load the variable names into the canned response
  
    var draft = message.createDraftReply("Hello, this is " + currentMember.name + " from " + organization.name + " and I will be working the " + currentSchedule.name );
   
  // build the emailDraft response
  
    return CardService.newComposeActionResponseBuilder()
    .setGmailDraft(draft).build();
    
  }