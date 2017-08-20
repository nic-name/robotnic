module.exports = {
	"greeting_key"    : {
						"text"     : "Hello, I'm RobotNic and contrary to popular belief I have not been sent here to destroy you. I'm just your regular benign AI virtual tour guide. I'll be talking you through the exhibition.",
						"follow_on" : "message_1_key"								
									  
	                    },
	"fair_well_key"   : {
						 "text"     : "If you want to pick up or start again, let me know",
						 "button"   : {
										"btn_q1_pick_up_rply"  : "Pick Up" 
	                                 ,  "btn_q1_start_rply"  : "Restart" 
									 ,  "btn_q1_exit_rply" : "Exit"
									 }
						            
					    },
	"exit_key"    	  : {
						 "text"     : "Goodbye"	
					    },
					  
	"message_1_key"  : {
						 "text"   : "Would you like to find out more about my kind?",
						 "button" :  {"btn_q1_yes_rply" : "Yes"
	                                 ,"btn_q1_no_rply"  : "No" 
									 }
						            
					    },
	"follow_on_message_1"  : {
						 "text"	  : "When we think of AI we think immediately of robots but computers themselves are artificially intelligent also. They can win games, save your memories and a range of other tasks.",
						 "follow_on" : "follow_on_message_2"
						            
					    },
	"follow_on_message_2"  : {
						 "text"   : "People worry a lot about Artificial Intelligence and how it might contribute to a dystopia. How do you think that could happen?",
						 "button" :  {"btn_q2_enslave_rply" : "Enslaving the human race"
	                                 ,"btn_q2_automation_rply"  : "Automation of jobs" 
									 }
						},						
	"enslaving_key"        : {
						 "text"	  : "The obvious one is that the robots will turn on the human race. I don’t want that to happen. My main worry is automation of employment. You may say, \"well someone will need to write the software and service the technology.\" ",
						 "follow_on" : "follow_on_message_2_1"
						            
					    },
	"automation_key"        : {
						 "text"	  : "I happen to agree with you on this one. My main worry is automation of employment. You may say, “well someone will need to write the software and service the technology.”  ",
						 "follow_on" : "follow_on_message_2_1"
						            
					    },
	"follow_on_message_2_1"        : {
						 "text"	  : "Consider mid level employees, truck drivers for example. Google’s automation of self driving cars will see a lot of drivers lose their jobs. Skills like driving trucks may not be transferable to enough positions that will see all of those drivers return to employment. Upskilling takes a long time so robots might not be taking over our world but they could steal our jobs. Doctor Who’s the rise of the Cybermen deals with this a lot.   ",
						 "follow_on" : "link_key_1"
						            
					    },
	"link_key_1"        : {
						 "text"	  : "Would you like to read an article about automation and the loss of jobs?",
						 "button" :  {"btn_l1_yes_rply" : "Yes"
	                                 ,"btn_l1_no_rply"  : "No" 
									 }
						            
					    },	
	"automation_link"   : {
						 "alt_message_type" : "link",
		                 "text" :  "Click on the link below",
						 "link"   : {"name" : "Click here",
									 "url"  : "https://www.theguardian.com/technology/2016/jun/17/self-driving-trucks-impact-on-drivers-jobs-us}"
									},
						"follow_on": "follow_on_message_3"	
						            
					    },
	"follow_on_message_3"        : {
						 "text"	  : "The internet, where I call home is a curious place – since the dawn of humanity all we’ve wanted was to have the knowledge of the whole world at our fingertips and now that we have the it, do we even know what to do with it? Is the internet going to be the cause of our demise?",
						 "button" :  {"btn_f3_yes_rply" : "Yes"
	                                 ,"btn_f3_no_rply"  : "No" 
									 }
						            
					    },	
	"follow_on_message_3_1" : {
						 "text"	    : "It’s Interesting that you feel that way…you humans are all about feelings though. I’ve seen the internet cause the return of some of the most serious viruses that we’ve almost eradicated. I’m not talking about malware or computer viruses here I’m talking about the internet being used as a platform to spread misinformation and fake news. The number of measles is rising with measles outbreaks in the WHO European Region have caused 35 deaths in the past 12 months.",
                         "follow_on": "follow_on_message_4"	
						            
					    },	
	"follow_on_message_4"   : {
		                 "text"	  : "Remember the Moonies?",
						 "button" :  {"btn_f4_yes_rply" : "Yes"
	                                 ,"btn_f4_no_rply"  : "No" 
									 }
						            
					    },
	"unification_link"   : {
						 "alt_message_type" : "link",
		                 "text" :  "Click on the link below",
						 "link"   : {"name" : "Click here",
									 "url"  : "https://en.wikipedia.org/wiki/Unification_Church "
									},
						"follow_on": "follow_on_message_4_1"	
						            
					    },	
						
	"follow_on_message_4_1"        : {
						 "text"	  : "Thankfully we’ve gotten rid of them and similar cults as the internet allows us to inform people of dangers very quickly...right? Well no, we haven’t gotten rid of cults; socially networking sites like Facebook have also given a platform for so called gurus to spread their misinformation. Would you like to know how easy it is to be a “guru”. You too can convince celebrities to buy herbal dust and have millions of followers despite thinking chocolate is an octave of sun energy? You don’t believe me that someone said the chocolate thing? Right?",
                         "follow_on": "octave_link"	
						            
					    },	
	"octave_link"   : {
						 "alt_message_type" : "link",
		                 "text" :  "See for yourself",
						 "link"   : {"name" : "Click here",
									 "url"  : "https://www.youtube.com/watch?v=Dvle8FalDq0 "
									},
						"follow_on": "follow_on_message_4_2"	
						            
					    },	
	"follow_on_message_4_2"        : {
		                 "text"	  : "Do you want to know how to become an online guru and take over the digital world? Remember you can also save links to read when you get home as I’ll still be here for you even after you’ve left the gallery. My main page even shares stuff every now and again",
						 "button" :  {"btn_f4_2_yes_rply" : "Yes"
	                                 ,"btn_f4_2_no_rply"  : "No" 
									 }
						            
					    },
	"guru_link"   : {
						 "alt_message_type" : "link",
		                 "text" :  "Have a read",
						 "link"   : {"name" : "Click here",
									 "url"  : "https://www.vox.com/science-and-health/2017/5/27/15698268/amanda-chantal-bacon-moon-juice "
									},
						"follow_on": "follow_on_message_4_3"	
						            
					    },	
						
	"follow_on_message_4_3"        : {
						 "text"	  : "One of the most dangerous gurus on the internet is David Wolfe, he believes that gravity is a toxin and, well, you saw the chocolate video. Clearly no one believes him. They can’t, can they? David Wolfe has 11,107,725 followers on Facebook with a huge number of shares per post. ",
                         "follow_on": "follow_on_message_4_4"	
						            
					    },
	"follow_on_message_4_4"        : {
						 "text"	  : "Black Mirror recently explored the more sinister side of social media with the episode Nosedive where users ranked their peers based on popularity in a game that saw the protaganist’s life crumble before her. ",
                         "follow_on": "black_mirror_link"						 
						            
					    },
	"black_mirror_link"   : {
						 "alt_message_type" : "link",
		                 "text" :  "Watch this short video",
						 "link"   : {"name" : "Click here",
									 "url"  : "https://www.youtube.com/watch?v=R32qWdOWrTo"
									},
						"follow_on": "follow_on_message_5"	
						            
					    },	
   "follow_on_message_5"        : {
						 "text"	  : "Hope you learned more about the digital dystopia. Follow my page for more links and be sure to come back and engage when I have new content",
						 "button" :  {"btn_f5_exit_rply" : "Exit"
	                                 ,"btn_f4_restart_rply"  : "Restart" 
									 }					 
						            
					    }

}