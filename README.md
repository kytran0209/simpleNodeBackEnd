# simpleNodeBackEnd
A simple BackEnd server using nodejs - express
This repo is used as a guide to help others to create simple BackEnd server using NodeJS and Express 

There is only one function on this repo as an example - getNamesList:
	* It returns list of names 
	* Showing success/error message (it is hardcoded to be successful all the time)
	* Adding Router to help manage the application when there are too many controllers

### Instruction: 
Clone the application 
Run npm install 
There are 3 script commands for this: 
* npm start - normal way to run the server 
* npm run start:server - run the server using nodemon, no need to restart server when making changes 
* npm run start:server-debug - run the server and debug it if needed 

After the server is started, go to your browser and type:
```http://localhost:3000/api/getNames```

The name list will show
