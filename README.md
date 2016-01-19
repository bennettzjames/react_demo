##React##

* React is a javascript library.

* Based on our readings, React is difficult to learn at first, but very effecient once mastered. 

* React was created by Facebook as a way to build large applications with data that changes over time. 

* Built around the the concept of one-way data-binding. Essentially, the view watches the data, and if the data changes, the view knows to only change the updated parts. 

* React is made up of components that make the code reusable, testable, and easier to debug. 

* Currently DOM manipulation is the slowest aspect of loading a webpage. React uses a virtual DOM that only renders once changes have been made. This is especially useful for mobile applications as mobile devices have a less powerful CPU than most desktop computers. 

* React can be written in javascript, however most developers use JSX, which is an enhanced version of JS. To put it simply, JSX is a combination of HTML and Javascript, with slightly ~~confusing~~ different syntax. 

* All of your components will be within the main.js file. You will have one parent component with multiple children components. If the child is receiving data from the parent, you will use 'props'. If you are getting data within the component, you will use 'state'.


##Start Up##

* To start, you can either use React with NPM, but if you take that route, you must also learn Babel, Browerify, or Webpack. Thus, we went the other other route (without npm). React's docs feature a starter kit, which you can download as a zip file, and gives you prebuilt copies of react and reactDOM. 

* Then, you will write all of your code within the root directory of the starter kit. 

* You'll want to include the necessary scripts in the head of the HTML file:

	```<script src="build/react.js"></script>```
	```<script src="build/react-dom.js"></script>```
	```<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>```
* Within the body of the HTML file, you will want to create a div that everything will be appended to. 

* Then, you'll want a script tag within the body as well. This script tag with specify the type, which should be text/babel. Also include the source of your javascript file. 

	-It should look like this:
	```<script type="text/babel" src="main.js"></script>```

* Be sure to create a main.js file, as that is where the logic will be done. 


* FOLLOW THE DOCS!



