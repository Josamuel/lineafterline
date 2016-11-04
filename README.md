# Line After Line

Welcome to Line After Line, a place where the stories never go how you expect! Playing the game involves taking turns adding a line to an unfolding story, only knowing the line that was written before you. Once completed the story is printed out for all players to see. You can even upvote and share popular stories with your friends. Gather around and let hilarity ensue!

##Tech
- Node
- Express
- React
- Mongo
- Socket.io

##Features implemented by Brittany Artimez, Stephen Bolton, Michael Lefkowitz, and Joey Steinberger
- Implemented multiple sockets so more than one story could occur at once.  
- Allowed users to add more than one line to a story for variety.
- Created a profile page that shows a user what stories they contributed to and the stories they created
- Added a voting system and leaderboard page so user's could see who created the highest rated stories.
- Built a feature that allows user's to share favorite stories on Facebook.
- Updated lobby component to toggle between stories in progress and completed stories.
- Added a 'Piratize' feature that converts user's text into 'pirate talk'.  

#Starting It Up

```
npm install
```

Start up the Express server on port 3000 with `npm start`.

##Facebook Auth
You will need to create an app at developers.facebook.com for Facebook authentication to work. Add all of your team members as developers to this app. Facebook will generate an App ID and App Secret for you.

Create a file named `secretsecrets.js` and save it in the `server` folder. Make sure this file is in your `.gitignore`. This file should have the following:

```
module.exports = {
 appId : your-fb-app-id,
 appSecret : 'your-fb-secret',
 secret : 'your-secret'
}
```
The `appId` will be a number. `appSecret` and `secret` should be strings. The `secret` can be whatever you want as long as it is a string.


##Starting up MongoDB
We recommend creating a folder on your desktop with the name of your db. Then cd to your desktop and run:
```
mongod --dbpath=./your-db-name --port=51707
```

The `models/config.js` calls for an environment variable that is a pathway to your database. Run this line in the terminal:
```
export DBPATH='mongodb://localhost:51707/lineafterline'
```

From there you can open a new terminal tab and run:

```
mongo
```
The you can type `show dbs` to see all your databases. Then type `use line4line`.

##Webpack && Server
```
npm run build:watch
```
```
npm run start:dev
```

typing `npm run build:watch` will fire up webpack and it will automatically rebundle when you save files you're editing.
typing `npm run start: dev` will fire up the server and it will automatically restart when you save files you're editing.

Look into the package.json file for other scripts you can run.  

##Contributors

This project was worked on by Brittany Artimez, Stephen Bolton, Michael Lefkowitz, and Joey Steinberger.  We inherted the project from Charlie Person, Phil Mok, Darion Freeman, and Jason Barnet. 

