TODO 
- ensure phone number is the one entered - add test
- connect model to database: when and what is created
- send a series of texts: timing?!?!
- add facts!!
- get sense check 

Possible
- add email option 
- add readme
- add sender name 
- add a button to another page with all pranksters and count of pranks played??
- consider ways to improve text experience 
= get a better web domain


Local Database Setup for testing

```
psql;
CREATE DATABASE dicaprifacts;
\c dicaprifacts;
CREATE TABLE recipients (id SERIAL PRIMARY KEY, email VARCHAR);
```

