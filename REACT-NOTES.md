# Generate the React App

The best way to create a React project is by using the create-react-app script provided by the React team:

```bash
cd ~/code
npx create-react-app mern-infrastructure
```

*A new folder will be created named mern-infrastructure. If you would like to generate a project in the future within an existing folder, you can use . in place of the project name.*

```bash
cd mern-infrastructure
code .
```

Open the integrated VS Code terminal
`control + backtick`

Start React's built-in development server
```bash
npm start
```

*This will open the app in a browser tab at localhost:3000*

## Build the React App's Production Code

Run the build script

```bash
npm run build
```

*npm requires us to use the `run` command for scripts other than `start` and `test`.*

**Install the modules for the Express Server**

```bash
npm i express morgan serve-favicon
```

**Create and Code the Express App (server.js)**

1. Ensure that you're still in the root folder of the Reaqct project.
2. `touch server.js`
3. At the top of **server.js**, let's fo all the familiar stuff:

```js
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
```

4. Mount and configure the `serve-favicon` & `static` middleware so that they serve from the **build** (production) folder:

```js
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
```

5. Set the port for development to use 3001 so that React’s dev server can continue to use 3000 and finally, tell the Express app to listen for incoming requests:

```js
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});
```

## Define the "Catch All" Route

A catch all route is required to serve the **index.html** when any non-AJAX request is received by the Express app

```js
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

### Test the Express Server

Start the Express server by typing: 
```bash
nodemon server
```

*Browsing to `localhost:3001` will display the built production React app*

*To update the React app's production code when ready for production, use: `npm run build`*

## Configure React for MERN-Stack Development

To develop a MERN-Stack app, you'll need **two separate** terminal sessions for running:

1. The Express backend
2. React’s development server

### Ensure that the React Dev Server Sends AJAX Calls to the Express Server

Add a "proxy" property in the **package.json** (be sure that it's a "top-level" property)

```json
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:3001"
}
```
*Restart dev server*

--------------------------------
--------------------------------


## Perform CRUD Using Mongoose Models in a Node REPL

1. Start by opening a terminal session and make sure that you are in the project's root folder.

2. Start a Node REPL:

	```sh
	$ node
	> 
	```

3. Connect to the MongoDB database:

	```sh
	// If the db connection string is in a .env file, we need to process it just like in server.js
	> require('dotenv').config()
	// Connect to the database
	> require('./config/database')
	{}
	> Connected to MongoDB at localhost:27017
	// Press enter to return to the prompt
	```

4. Load the Models, for example, `Movie`:

	```sh
	> const Movie = require('./models/movie')
	```

5. Curious what the `Movie` Model looks like?

	```sh
	> Movie
	// a big object...
	```
	**Important:** If you make any changes to a Model, you'll have exit Node and start again.

6. Log all _movie_ docs:

	```sh
	> Movie.find({}, (e, movies) => {
	... console.log(movies)
	... })
	```
	The `find` method returns a **Query** object that is first logged, followed by the _movie_ docs. Press enter to return to the prompt.

7. Anything that can be done with a Model in an Express app, can be done in the REPL including CRUD operations, manipulate individual documents, etc.

8. Here's a way to delete all documents from a collection:

	```sh
	> Movie.deleteMany({}, (err, result) => console.log(result))
	...
	> { n: 3, ok: 1, deletedCount: 3 }
	```
	The _empty query object_ provided as the first argument matches all documents, so all documents were removed.

9. And here's a way to update all documents in a collection:

	```sh
	// reset all cast arrays to be empty
	> Movie.updateMany({}, {cast: []}, (err, result) => console.log(result))
	...
	> { n: 3, nModified: 3, ok: 1 }
	```
	The second object has the properties with their new values that you want to update.
	
10. Press `control + C` twice to exit the REPL.

--------------------
---------------------

## The process of adding a deature to a MERN-Stack app

1. Start with the UI/frontend… Render a component with an event prop designed to handle interaction from the user, e.g., onClick.
2. Stub up and assign an event handler function to the event prop.
3. In the event handler function, write code to accomplish the task at hand which could include any of the following:
	- Perform program logic, calculations, etc.
	- Update local state.
	- Invoke service methods to make AJAX requests to the server.
	- Invoke a method passed to it as a prop so that the component up the hierarchy can respond to the event by updating state, etc.
	- Etc.

	Then, in the case that an AJAX request was made…
4. Define a route on the server that maps the AJAX request to a controller action.
5. Code the controller action to perform any necessary CRUD and send a JSON response back to the client.
6. Back in the event handler of the component, if necessary, update state using the JSON received from the server and optionally programmatically change routes.