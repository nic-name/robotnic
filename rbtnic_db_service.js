var con = require('./db_connection');

module.exports = {
  insertNextResponse: function(platform_service_type, user_platform_id, response_key) {
	  console.log("insertResponse");
	  /*
	  INSERT INTO `user_request_log`
			 (`platform_service_type`, `user_platform_id`, `response_key`) 
	  VALUES ( [value-2]             ,  [value-3]        ,  [value-4]    );
	  */
	  var sql = "INSERT INTO user_request_log "
		 + "       (platform_service_type          , user_platform_id        ,  response_key       ) "
		 + "VALUES ( '"+ platform_service_type +"' ,  '"+user_platform_id+"' ,  '"+response_key+"' );" ;
	  console.log(sql);
	  con.executeSQL(sql);
  },
       
  updateLastResponse: function(user_response_value, platform_service_type, user_platform_id) {
	  console.log("updateResponse");
	  if(!user_response_value)
		  return;	
	  /*
		UPDATE `user_request_log` 
		SET `user_response_value`=[value-5]
		WHERE user_request_log_id = 1;   ** FILTER ON platform_service_type, user_platform_id, AND user_response_value == null
	  */
	  var sql = " UPDATE user_request_log as a"
			  + " JOIN ("
					+ " SELECT user_request_log_id " 
					+ "   FROM user_request_log "
					+ "  WHERE user_platform_id      = " + con.mysql_escape(user_platform_id)     + " "
					+ "    AND platform_service_type = " + con.mysql_escape(platform_service_type)+ " "  
					+ "  ORDER BY user_request_log_id desc "
					+ "  LIMIT 1  "
					+") as b"
		      + " SET   a.user_response_value = '" +user_response_value + "'"
			  + " WHERE a.user_request_log_id = b.user_request_log_id ;"
	  console.log(sql);
	  con.executeSQL(sql);

  }
//
//  
//  Can't get this working because the exection won't wait for a response_key
//  And we don't want to do chaining of promises because we don't know how to      
//  send a promise back to Facebook
//
//  Ideally this would have returned the last message the user was sent
//  and hence what they are repyling too, so that open text could be interpreted with context
//
//  getLastResponse: function(platform_service_type, user_platform_id) {
//   console.log("getLastResponse");
//   
//   var sql = " SELECT user_request_log_id " 
// 		  +	"   FROM user_request_log "
// 		  + "  WHERE user_platform_id      = " + con.mysql_escape(user_platform_id)     + " "
// 		  + "    AND platform_service_type = " + con.mysql_escape(platform_service_type)+ " "  
// 		  + "  ORDER BY user_request_log_id desc "
//              + "  LIMIT 1  ;"
//   
//   console.log(sql);
//   
//   return con.executeSQL(sql);
//  
//  }
};
		