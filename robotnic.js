//import the Claudia Bot Builder and FB Template
const botBuilder = require('claudia-bot-builder');
//import the workflow conversation configuration
const workflow = require("./workflow_conversation.js");
//import the workflow conversation button keys
const button_keys = require("./button_keys.js");
//import the Database services 
const rbtnic_db_service = require('./rbtnic_db_service');

//Map botBuilder.fbTemplate to simply fbTemplate
var fbTemplate = botBuilder.fbTemplate;

//var kill_switch = true;

// Note getFbResponse function includes recursion for 'follow-on' messages.
// as a result we will track these recursions, and break if they become stuck.
var recursion_count = 0;

/****** START MAIN BODY *******/
//object that's returned. Message is a variable that's populated by Claudia. It contains all the information that came from Facebook
module.exports = botBuilder(message => {
	//First piece of code that's executed is here. 
	console.log(' ** START ROBOTNIC SESSION**');
	//writing to the console in Lambda for debugging and reference purposes
	console.log(message);
		
//Message object has an attribute called type and we check is the value of type === to the String Facebook
//It looks at the message argument in line 8 and checks if it's of type fb
    if (message.type === 'facebook') {
		/*
		if(kill_switch){
			return new fbTemplate.Text("Sorry I'm feeling a bit unwell at the moment" ).get();
		}*/
		
		//Message object has an attribute called text which is the string of the user's input and we set it to user_text
		const user_text = message.text;
		
		//If the user selects a quick reply button it should match one in button_keys.js
		const wfkey = getButtonMessage(user_text);
	    
		//generate the response based on the workflow key associated with the button key.
		recursion_count = 0;
		const fbMessageArray = getFbResponse(wfkey);
		
     // Database calls to log user Input
     // DATA BASE UPDATE                      user_response_value  ,platform_service_type, user_platform_id
		//rbtnic_db_service.updateLastResponse(user_text            ,message.type         , message.sender);

	 // Database calls to log system response key	
     // DATA BASE INSERT                  platform_service_type, user_platform_id      , response_key
		//rbtnic_db_service.insertNextResponse(message.type         , message.sender        , wfkey );

		
		console.log(' ** EXIT ROBOTNIC SESSION**');
		//This is the complex object returned to Facebook messanger
		return fbMessageArray;
		
    }//end if 'facebook'
  
});
/****** END MAIN BODY *******/

/**
 * Utility functions
 * //function is the same as def function in Python or a method in Java(?)
**/

// Loops through the button keys looking for a match
// returns the workflow key associated with the button
// Defaults to "greeting_key"
function getButtonMessage(user_text){
	//If the user selects a quick reply button it should match one in button_keys.js
	console.log('getButtonMessage (' + user_text + ')' );//where is user_text defined? It's a parameter variable
	for(const rply in button_keys){//this seems to be lobbed in for the lols...like if potato == pineapple please attend a barn dance asap
		if(rply === user_text){
			console.log('Found button key' );//I assume this logs to Lambda
			//Key : Value
			//we return the value associated with the key in the key value pair (JSON File)
			return button_keys[rply];//return statement exits
		}
	}
	console.log('Default button key' );
	return "greeting_key";
	
}



// Goal of this function is to accept in a workflow key
// and return an array of facebook templates to send back to facebook
function getFbResponse(wf_key){
	//add one per recursion itteration
	recursion_count ++;
	//write to lambda log
	console.log('recursion_count (' + recursion_count + ')' );
	
	var responseArray = [];
	var fbResponse = null;
	
	if(recursion_count < 2){
		console.log('Adding SEEN and TYPING_ON' );
		//instanciate some natural chat behaviours
		var seen = new fbTemplate.ChatAction('mark_seen').get();
		var typing = new fbTemplate.ChatAction('typing_on').get();
		
		//Add the chat behviours to the responseArray
		responseArray.push(seen);
		responseArray.push(typing);
	}
	else if (recursion_count < 6){
		//this section applies for recursion_count >=2 but < 6
		//which is for the follow-on messages
		
		//the Pause time decreases for each follow-on
		var pauseTime = 1500;
		console.log('Adding PAUSE : ' + pauseTime + ' And TYPING_ON' );
		//pauses can create buggy behaviour
		var pause = new fbTemplate.Pause(pauseTime).get();
		var typing = new fbTemplate.ChatAction('typing_on').get();
		
		responseArray.push(typing);
		responseArray.push(pause);
		
		
	}
	
	//write to lambda log
	console.log('getFbResponse (' + wf_key + ')' );
	
	
	//This is an alternative to the for loop in the above function
	var wf_response = workflow[wf_key]; //workflow refers to the .js file 
								//the wf_key contains the returned value of getButtonMessage and should match a key of the workflow object
								//the bracket notation returns you the value associated with whatever key is in the wf_key variable
	
	console.log(wf_response);
	
	if(wf_response.alt_message_type){
		if(wf_response.alt_message_type == "link"){
			//COMMENT THIS AND PUSH
			console.log('Creating fbTemplate.Button : ' + wf_response.text );

			fbResponse =  new fbTemplate.Button(wf_response.text	);
			
			console.log('Creating fbResponse.addButton : (' + wf_response.link.name + wf_response.link.url + ')');
			//if link attributes exist add them to the response as quick replies
//			fbResponse.addButton(wf_response.link.name, wf_response.link.url);	
			fbResponse.addButtonByType(wf_response.link.name, wf_response.link.url, 'web_url');
		}
		//Room for more alt_message_types
	}
	else{
		//Default fbTemplate to Text
		console.log('Creating fbTemplate.Text : ' + wf_response.text );
		fbResponse =  new fbTemplate.Text(wf_response.text); //create new object and .Text is a constructor of fbTemplate which is included in Claudia. The parameter refers to the text attribute in the workflow_conversation.js (wf_response response)	
	}
	
	//consider changing wf_response to wf_response
	//check if wf_response has a button attribute
	if(wf_response.button){ 
		//if button attributes exist loop through them and add them to the response as quick replies
		for(const btn in wf_response.button){
				console.log(btn + " - " + wf_response.button[btn])
				fbResponse.addQuickReply(wf_response.button[btn], btn);	
		}
	}
			
	//<<<<HERE LOOK! THIS IS WHERE YOU PUSH TO THE ARRAY!!!!!!!!!>>>>>>>>
	responseArray.push(fbResponse.get());
	
	//Now Check for any follow on messages 
	//Also prevent follow_ons getting stuck in infinite loops 
	if(wf_response.follow_on && recursion_count < 10){
		console.log('Creating Follow on');
		var tempArray = getFbResponse(wf_response.follow_on);
		responseArray = responseArray.concat(tempArray); //Add the result to the responseArray
	}
	
	return responseArray;
}