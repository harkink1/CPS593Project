# Social Media app
## Author <br/>
Kyle Harkin <br/>
## Purpose <br/>
This app is the final project for CPS593 Web and Database Programming for the Spring 2022 semester at SUNY New Paltz, developed using both class notes/examples and original code <br/>

## Description of App <br/>
This app is an unfinished simple social media website <br/>
## Capabilities of Current App <br/>
The app has the following current capabilities: <br/>
* Users can register, login, edit, and delete their account <br/>
* The app utilizes local storage to remember who is logged in and adjust the navigation bar accordingly <br/>
* Has windows for the user to add a post, see posts, delete posts, add comments, add followers <br/>
* Node server running to track and update website <br/>
* mySQL database creation with tables for respective entities <br/>
* Adds null entries into the mySQL database for posts, comments, and follows <br/>
## Future App Implementations <br/>
Further work can be done on the app via the following: <br/>
* Comments should be related to posts as well as users! (forgot to implement this)
* Adding actual post, comment, and follower data to be posted to database, not just current null values <br/>
* Having it so a user can search for another's username and add follower <br/>
* Have a follower/following counter working <br/>
* Ability to see and delete posts and comments from database <br/>
* User password should be hidden on the database -> for security 
## Bugs and Issues
The current version has the following:
* When attempting to edit a freshly registered user, the edit profile window does not display pertinent information -> displays undefined <br/>
* To resolve fresh user edit, logout and login again -> edit now displays user info <br/>
* mySQL database entries for posts, comments, and followers are null/undefined -> entries will add but without information <br/>
## Languages and Technologies <br/>
### Front End <br/>
* HTML
* Javascript
* JSON
* CSS
* Local Storage
### Back End <br/>
* HTTP
* Javascript
* JSON
* Node Server: Express, Nodemon
* mySQL
## Entity Relationship Diagram <br/>
![](images/edited_erd.PNG) <br/>
### Description of Entities: <br/>
1. User -> this is the user profile for the site -> contains a unique ID number, username and password
2. Post -> this is an entity that a single user can create many of -> contains a unique ID number, contents, and is related to the userID
3. Comment -> this is an entity that a single user can create many of 


## How to Use <br/>
1. Download all files from the github 
2. Download nad install Node.js and mySQL 
3. Run the following commands: npm init, npm install express, npm install nodemon, npm install --save-dev 
4. Change the package.json under "scripts" -> add "dev:" "nodemon index.js" -> (above "test:")
5. Run mySQL database -> create my_db
6. Run the command: npm run dev 
7. Go to any website HTML file -> start at Login or Register
## Screenshots <br/>
Below are screenshots from the website in operation: <br/>
![](images/register_page.PNG)
![](images/login_page.PNG)
![](images/profile_page.PNG)
![](images/edit_profile%20page.PNG)
![](images/post_page.PNG)
![](images/posts_page.PNG)
![](images/comment_page.PNG)
![](images/following_page.PNG)
Below are screenshots from the mySQL database attached to the website: <br/>
![](images/users_table.PNG)
![](images/posts_table.PNG)
![](images/comments_table.PNG)
![](images/following_table.PNG)
