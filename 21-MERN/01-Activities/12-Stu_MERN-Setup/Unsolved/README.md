# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  "start": "node server/server.js", start the server
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"", can watch the server dont have to restart
  "install": "cd server && npm i && cd ../client && npm i",
  "seed": "cd server && npm run seed", to seed tables to graphql
  "build": "cd client && npm run build" 
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:

```json
"proxy": "http://localhost:3001",
```sets the server to 3001

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:

```js
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
