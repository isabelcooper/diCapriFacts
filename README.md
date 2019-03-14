TODO 
-fix db connection for heroku
- connect model to database: when and what is created
- send a series of texts: timing?!?!
- prettify page
- add heroku server (and possibly staging env) 
- add facts!!
- get sense check 
- feature tests

Possible
- add email option 
- add readme
- add a button to another page with all pranksters and count of pranks played??
- consider ways to improve text experience 


Local Database Setup for testing

```
psql;
CREATE DATABASE dicaprifacts;
\c dicaprifacts;
CREATE TABLE recipients (id SERIAL PRIMARY KEY, email VARCHAR);
```

