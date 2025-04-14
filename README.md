# ACM.org 

This is a redesign of the https://www.acm.org/ website, with improvemments to features such as the navbar, landing page, and profile page. 

# Stack/Technologies
- React – Frontend library
- JavaScript – Core language
- React Router – Client-side routing
- HTML & CSS – Markup and styling
- Bootstrap – Styling Library

# Project Structure
|- backend <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- package-lock.json <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- package.json <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- server.js / ### Node.js/Express server handling backend logic and API routes <br>
|- public <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|-... / ### Static assets (like images and favicons) that get served directly <br> 
|- src <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- components <br> 
 &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;|-... /  ### Contains all reusable React components (.js/.css files) <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- App.css ### Styling for the main App component <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- App.js ### Root component of application <br> 
 &nbsp;&nbsp;&nbsp;&nbsp;|- index.js ### Entry point that renders the App component into the DOM<br> 
|- .gitignore <br> 
|- README.md ### Project documentation and usage instructions <br>
|- package-lock.json <br>  ### Auto-generated file that locks the dependency tree <br>
|- package.json ### Lists frontend project dependencies and scripts <br> 
 
# Requirements
- Node.js (v14 or later recommended)
- npm (comes with Node.js)

# Installation
1. Clone the repository `git clone https://github.com/kpe03/hci-project.git`
2. Navigate to repo: `cd hci-project`

# To Run the code
1. Install and update all dependecies with `npm install`
2. Run the script `npm start` to run the app in developent mode
3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser
4. In a separate terminal, **from the project root directory**, navigate to the backend directory and update dependencies: `cd backend && npm install`
5. Start the server: `node server.js`

# 🌐 Live site

See the published version at: *to be added* 
