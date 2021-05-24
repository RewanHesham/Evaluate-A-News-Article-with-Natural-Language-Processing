# Evaluate A News Article with Natural Language Processing Project

## Description

    *This is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability
     of an application to understand the human language, written or oral.
    *The user enter the article link in the input field.
    *Then i creat a URL using the main URL of the MeaningCloud, the article link entered from user and the API Key from MeaningCloud Website
     to make a GET request to the server and get data of the article.
    *The data received from MeaningCloud API are then used to make a POST request to the server's endpoint.
    *Then make a request to the server's endpoint object to post all the data to the user.
    *Showing score tag, agreement, subjectivity and confidence.
    *If the server failed in the production mode the server worker will run to build the webpage offline.
  
  
## Table of Contents

   ### package.json file:
   
      *The file includes the main features of the webpage and all the npm scripts Dependencies (dev dependencies & general dependencies) and App 
       information (name, version, license, etc..).
      *It also includes the modes of build ( __test__, build-dev, build-prod, start).
       
   ### webpack.dev.js file:
   
      *This file include javascript of the webpage in the development mode.
      
      
   ### webpack.prod.js file:
      
      *This file include javascript of the webpage in the production mode and server worker for the page to run offline.
      
   ### src folder:
   
   #### client folder:
     
     *__test__ folder: To test the handleSubmit function and chechForName function.
     *JS folder: Which contains to js files of the prevoius mentioned functions and exports them to the Client liberary.
     *Styles folder: Which contain .scss files of the webpage style.
     *View folder:  Which contains the HTML file of the webpage.
     *index.js file: Where all the .scss files, handleSubmit function and checkForName function are imported and then exported to Client 
      liberary to be available for all scoops in the project.
      
	 
   #### server folder:
   
     *Istall express(), Cors package and body-Parser package.
     *Require express(), and create an instance of the app using express.
     *Configuring express to use body-parser as middle-ware.
     *Require cors for cross origin allowance.
     *Initialize the main project folder.
     *Setup server port:8080 and 8081.
     *POST route setup on the server side with the first argument '/test', and the second argument a callback function to return 
      the JS object created at the top of server code.
   
	 
     

## Used Languages
    *HTML
    *JavaScript
    *CSS
    *Sass
    

	   
