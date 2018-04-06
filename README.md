# README #

### What is this repository for? ###

A barbones node.js server with webpack set up.

### How do I get set up? ###

Make sure you have [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed. This will allow you to provision a container without having to install the software and dependencies of the project locally!

Start by running `curl --user <username>:<password> https://bitbucket.org/cgis_development/docker-node.git/get/master.zip > docker-node.zip` in your terminal/git bash.

### Build the Docker Image ###

In order to work with [Docker](https://docs.docker.com/get-started/) you'll need to build the image containing node-js. If you have Docker installed you can run `docker build --rm -t <tag> <path to Dockerfile>` replacing `<tag>` with whatever you'd like the image to be named.

This process usually takes a few minutes.

### Environment Variables ###

You'll need to create what's called an env_file to store environment variables ( this is essentially a secrets.json ). There are three variables that need to be defined as such: 

```
	PORT=<some port>
	HOST=<some host>
	WEBPACK_PORT=<some port>
```

Make sure the server and webpack dev server are running on different ports!

### Starting up the Project ###

After your node image is built and environment variables set, open docker-compose.yml. You should see the following:

```
	services:
		web:
		image: node-app
		ports:

	... more configuration not shown
```

If you didn't tag your image as node-app, replace the `image:` key with your `<tag>` from the previous step. You can now run `docker-compose up` to start the project.

For more information on the details of the above set up, refer to the [Part 3 of Docker "Get Started"](https://docs.docker.com/get-started/part3/) tutorial or [Docker Compose](https://docs.docker.com/compose/) for a more detailed explanation.

### Visit the App ###

The app should now be running at <http://localhost:3000> or whatever port you set as WEBPACK_PORT above.

### Recommended ###

You can set up aliases in webpack.config.js; There are some examples commented out.

This will allow importing from your directory structure logically without having to type the whole path.

These are some example aliases we've found to be helpful:
```javascript
'Tejas': path.resolve( __dirname, './Client/scripts/Tejas' ),
'Redux': path.resolve( __dirname, './Client/scripts/Redux' ),
'Config': path.resolve( __dirname, './Client/config.js' ),
'Styles': path.resolve( __dirname, './Client/styles' ),
'Utilities': path.resolve( __dirname, './Client/scripts/Utilities' ),
'Components': path.resolve( __dirname, './Client/scripts/Components' )
```
With Aliasing:
```javascript
import {
	BarChart
} from 'Components/Barchart/component.jsx'
```

vs.

Without Aliasing:
```javascript
import {
	BarChart
} from './Client/scripts/Components/Barchart/component.jsx'
```

### Reminder ###

Be sure to change the directory name as well as set up the correct remotes.
Don't forget to change the name in the package.json!
