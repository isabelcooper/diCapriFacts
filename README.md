 
-  form creates SENDER
- sender has a recipient 
- send has a counter 
- sender has a twilio obj
- senderis master of what to send next 



TODO 
- finish model  
- send a series of texts: timing?!?!
- connect to localhost (react v post get)
- prettify page 
- add heroku server (and possibly staging env) 
- consider ways to improve text experience 
- add facts!!
- get sense check 
- feature tests

possible 
- add email option 
- add readme
- 



Local Database Setup for testing

```
psql;
CREATE DATABASE dicaprifacts;
\c dicaprifacts;
CREATE TABLE recipients (id SERIAL PRIMARY KEY, email VARCHAR);
```

