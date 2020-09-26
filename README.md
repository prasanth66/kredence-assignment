This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Application Use

The purpose of the appliction is to keep track of all your tasks.

## How to setup and run application in your local system
1. Clone the repository .and downloadthe files.<br />
2. Need to have nodejs installed in your local system.<br />
3. Run ```npm install``` in terminal ,it will install all dependencies that are required.<br />
4. To start application run ```npm start``` in terminal.it will automatically open the url in 
   browser running on port 3000.


# Point Of Information
 1. No database is used here.
 2. when new task is added it will just stores in the react state(visit react doc to know more about react    
    state).
 3. The user details is stored in Local Storage. 


### Tree reprentation of used components

                                                    App.js 
 
                signin     signup     navbar     hometab                  tasktab              user       
                                                   |                         |
                                                                               
                                                   |                         |
                                           dropdown  information      tasklist addtask


