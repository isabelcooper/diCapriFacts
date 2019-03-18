TODO 

TIMING
- add tests for runSend timer 
- update db sender to remember each text has been sent
- remove old timing options

OTHER 

- update db fn in sender => timing q

- ensure phone number is the one entered - add test
- connect model to database: when and what is created
- send a series of texts: timing?!?!
- add self reveal and name collection
- add first name to recipient 
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
CREATE TABLE senders (senderId SERIAL PRIMARY KEY, reveal BOOL, theme VARCHAR, recipient INTEGER REFERENCES recipients (id));

```

    await connection.pool.query(`INSERT INTO senders (sent, reveal, theme, recipient) VALUES ('${this.sent}', '${this.reveal}', '${this.theme}', '${this.recipient}')`);
