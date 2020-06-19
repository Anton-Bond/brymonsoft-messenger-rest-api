Launching the application (it will start in the root of the index.js folder):

  npm run start

The server will start on port 3000 (http://localhost: 3000).

MongoDB is used as a data source.

REST API methods:

GET requests:

1) /api/user/?name='username'

    Returns the user from the database, where 'username' is the query parameter


2) /api/user/?phone='phone_number'

    Returns the user from the database, where as the query parameter the user's 'phone_number'

3) /api/chat/

    Returns a list of dialogs with information about them.

4) /api/chat/'user_id'

    Returns the last message from the user with 'user_id'

POST requests:

1) /api/chat/'user_id'

    Receiving a message from the user with 'user_id' and storing it in the database

2) /api/user/

    Saving a new user in the database by receiving data about him in the request body