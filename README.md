

TODO 
- connect model to database: when and what is created
- send a series of texts: timing?!?!
- connect to localhost (react v post get)
- prettify page 
- add heroku server (and possibly staging env) 
- consider ways to improve text experience 
- add facts!!
- get sense check 
- feature tests

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

