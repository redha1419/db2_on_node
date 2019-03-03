## DB2 ON NODE.JS ##

- This is a project that one can use to bring up a db2 instance (docker + db2-expressC) and be able to connect/ run queries through a REST API.
- Eventually everything will be automated, so in a matter of minutes some can have a "blank/template" node server and an ibm db2 database up.
- Some functionality out of the box includes: 
  1. a sample db with 1 table (Users).
  2. connecting and adding, removing and modifying that table.
  
This can be great for a quick website that need to manage users with no authentification (for now).


## ROUTES ##

- `hostname:port/db2/connect`: This connects to your db and queries a dummy table
- `hostname:port/db2/init`: creates a table for storing users -> fist name, last name, email
- `hostname:port/users/add`: add a new user
- `hostname:port/users/remove`: remove a user (by email address)

## HOW TO USE ##

1. have a db2 instance up (this git repo will have scripts to this eventually)
2. set the `.env` file in this repo with the proper db credentials
3. `npm start`
