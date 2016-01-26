---
layout: default
title: Final Project
nav-state: "Final Project"
---
<style>
pre {
	display: inline-block;
	padding: 9.5px;
	margin: 0 0 10px;
	font-size: 15px;
	word-break: break-all;
	word-wrap: break-word;
	background-color: rgb(224, 229, 234);	
	color: #001446;
	border-radius: 4px;
	border: none !important;
}

#final h4 {
	font-size:1.2em;
	margin-top: 1.5em;
	text-decoration: underline;
}
</style>
<div class="panel panel-default">
	<div class="panel-heading">Final Project</div>
	<div class="panel-body" markdown="block">
# __Final Project, Due Tuesday, December 8th at 11pm__

## Overview 

Create a web application using Express and MongoDB.

<a name="requirements">

## Project Requirements

* Use Express and MongoDB (or other database)
* Have at least 5 route handers (do not count login/register gets and posts if you're implementing auth)
* Have _around_ 4 Mongoose Schemas  (or other database abstraction library/module)
* Have at least 2 forms: 
	* Minimally, one of the forms must submit data using JavaScript (ajax)
	* Ensure that server side validation occurs
	* Additionally, validation errors should be propagated back to the front end
* Use external CSS files to style your site
* Use external JavaScript files for client-side JavaScript
* __Do not allow user generated content to be displayed directly (allow the default handlebars behavior that converts HTML entities)__


## Additional Requirements, Your Choice

Choose at least __8 points__ worth of these following topics (research and implementation). __This list may change slightly (added items, adjustments to points) as project ideas come in.__ 

* (1 points) Model view controller, laying out your project to conform with MVC architecture 
	* See {{ site.book_web }}
	* Or [express examples](https://github.com/strongloop/express/tree/master/examples)
* (2 points) Unit testing with JavaScript
	* [Jasmine](http://jasmine.github.io/)
	* [Mocha](https://github.com/mochajs/mocha)
	* Any others found through research
* (3 points) Automated functional testing for all of your routes using any of the following:
	* [PhantomJS](http://phantomjs.org/) - headless browser testing
	* [Selenium](http://www.seleniumhq.org/)
	* Any others found through research
* (2 points) Configuration management
	* [nconf](https://github.com/flatiron/nconf)
	* [Node convict](https://github.com/mozilla/node-convict)
	* Any others found through research
* (1 points) Use a CSS preprocesser
	* [Sass](http://sass-lang.com/)
	* [Less](http://lesscss.org/)
	* [Myth](http://www.myth.io/)
* (1 point) Concatenation and minification of CSS  and JavaScript files
* (1 point) Use [grunt](http://gruntjs.com/), [gulp](http://gulpjs.com/), or even make (!) to automate any of the following ... must be used in combination with one or more of the other requirements, such as:
	* Automated minification and concatenation of JavaScript and CSS files
	* Automated compiling of CSS preprocessing language
	* Running your unit or functional tests
* (1 point) Integrate JSHint into your workflow
* (1 point) Using pre-built Express project templates
* (3 points) Integrate user authentication
	* Minimally, implement sign up and registration
	* Or implement sign in with provider, such as FB Connect, Google, etc.
* (3 points) Use a different database and database abstraction layer (!)
* (2 points) Perform client side form validation using a JavaScript library
* (1 point) Use a CSS framework throughout your site, use a reasonable of customization of the framework (don't just use stock Bootstrap):
	* [Bootstrap](http://getbootstrap.com/)
	* [Foundation](http://foundation.zurb.com/)
* (1 point) Use a __server-side__ JavaScript library or module that we did not cover in class (not including any from other requirements) - 1 point per library, maximum of 2
* (1 point) Use a __client-side__ JavaScript library or module that we did not cover in class (not including any from other requirements) - 1 point per library, maximum of 2
* (1 points) Use responsive design to adapt your site to phone and tablet layouts (points cannot be used in conjunction with using a CSS framework)
* (2 points) Per external API used (you can convince me that this is worth more points for a more complex API)
* (1 point) Integrate visual effects 
	* ... By using CSS 3 transitions or a JavaScript library like JQuery
	* Implement at least 3 effects (fade in/out, wiggle, etc.)
* (2 points) Use a client side templating language!

<a name="milestone1"></a>

## Milestones

<a name="proposal"></a>

### __11/12__ (but accepted through 11/17) - Requirements / Specifications and Data Model 

(I'll send a sample repository out)

* Documentation
	* Submit electronically through a supplied GitHub repository
	* Write everything up in your README.md
		* Drop the images into your repository (either under a separate branch or in a folder called documentation)
		* [Link to it based on this SO article](http://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository)
	* A one-paragraph description of your project
	* Requirements
		* Sample documents (JSON / JavaScript literal objects will be fine, or your actualy Schemas) that you will store in your database, and a description of what each document represents
		* Enumerate any references from one document to another
	* Wireframes ([like this one](http://upload.wikimedia.org/wikipedia/commons/4/47/Profilewireframe.png)) 
		* [a great article on wireframes](http://www.onextrapixel.com/2011/03/28/creating-web-design-wireframes-tools-resources-and-best-practices/)
		* some possible tools
			* Hand-drawn
			* Balsamiq
			* Google drawings
			* Omnigraffle
			* Adobe tools such Photoshop (psds), Illustrator (ai) etc.
	* [A Site Map (see examples)](http://creately.com/diagram-community/popular/t/site-map)
	* One of the following to represent what your application will actually do:
		* A list of user stories ([simply a list of sentences in the form of _as a &lt;type of user&gt;, I want &lt;some goal&gt; so that &lt;some reason&gt;_](http://en.wikipedia.org/wiki/User_story#Format))
		* A list/spreadsheet of [use cases (see the end of this article)](http://www.stellman-greene.com/2009/05/03/requirements-101-user-stories-vs-use-cases/)
		* A [Use Case Diagram](https://www.andrew.cmu.edu/course/90-754/umlucdfaq.html)
	* Which modules / concept will you research?
		* List of research topics
		* A brief description of concept (3 or 4 sentence each)
			* What is it?
			* Any theoretical underpinnings worth mentioning?
			* Why use it?
			* List of possible candidate modules or solutions
* Code
	* A skeleton express app
		* Start populating your package.json with required modules
		* Stub a few routes
	* A 1st draft mongoose schema

<div id="final" markdown="block">

<a name="milestone2">

<br>
<br>
<br>

### 11/24 - Prototype With Some Implemented Functionality

* A draft mongoose model
* 2 or more forms and their corresponding route handlers
* Demonstrate that at least a couple of route handlers can read and write from MongoDB
* Proof of concepts for some of your research topics (for example, if you wanted to use sass, I'd expect that you've made some progress integrating it into your project)
* To prep for deploying your app so that it's accessible online... retrieve your password for the cs department's server for undergraduate students (i6)  and ensure that you can log in:
	1. Get the new password that you'll use to log in to i6 by going to https://cims.nyu.edu/webapps/password ...and entering your netid and password
	2. Use the i6 password that you received to log in to a remote server using the commandline tool, ssh (substituting your lowercase net id for your_net_id): <code>ssh your_net_id@i6.cims.nyu.edu</code>
	3. If you're unable to do this, please email me!
* (If you're not using the technologies above, use your best judgement to determine what's an appropriate amount of progress)
* Lastly, bring your laptop to class on Tuesday, the 24th so that we can try deploying a test node application!!! (and potentially deploying your prototype!)

<a name="milestone3">

### __12/4__ - Attempt to Deploy Your Project

See link in assignment description in NYU Classes

<a name="milestone4">

### __12/8__ - _Deployed_ Project


<a name="suggestions">

## Potential Projects

* A project portfolio site
* Create a one-player game with a computer AI - allow logins, saved high scores, saved games
	* Maybe something like Cookie Clicker ...
	* or a Battleship clone
* Or... whatever you can come up with!
</div>
</div>
</div> 
