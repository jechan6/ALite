# AutoLite Coding Challenge

# Setup Instructions
    -  bundle install 
    -  Enter "rails s" on one terminal to start up rails server
    -  Enter "npm start" on another terminal to run webpack
    -  Server will be running on http://localhost:3000

# Items not finished
9. On the “Search Results” page, indicate how many times each result has been viewed on the “Vehicle Details” page. For example each result on the  “Search Results” page could have a text area saying “Viewed X times”

    I rendered "Viewed X times" inside the "Vehicle Details page" but not on the "Search Results" page. To do so, for each search result item, I would have to make a HTTP GET request to my back end and fetch the information on the numbered of times it was viewed.

# Approach
The backend design was fairly trivial because the only information it needed to store was the number of times it was viewed, so I created a table that contains VIN number and the number of times that VIN number was viewed.

In the front end, I created util files to handle my API requests and any time a search result item is clicked, I make an AJAX request to my backend to increment the number of views and render that number on the "Vehical Details page".

The user can filter by price or make but if none was given, it will render all vehicles.