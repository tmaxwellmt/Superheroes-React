 Everything in client is a react app, which is separate from the rest of our code.

 cd into client and start the react server with "npm start".

 Everything outside of client is our node-specific app. it only manages our DB and API endpoints. start server with "nodemon".

 Each app has it's own node-modules and package.json.

 add   "proxy": "http://localhost:3001/", to client - package.json

 add   "dev": "nf start -p 3000 --procfile Procfile.dev", below start: to root sh-heroes directory - package.json

make new file in sh-heroes directory called Procfile.dev and put in
'web: cd client && npm start
api: PORT=3001 nodemon server.js'

 We're going to blend the start-up of both apps through a command. "npm run dev"
