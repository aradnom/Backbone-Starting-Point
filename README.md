# ~ Backbone Starting Point ~
## v1.0.0

***

## What's all this then

This is a simple starting point JS framework.  It utilizes Underscore/Backbone but has no starting
structures (models/collections/etc.) other than a master view, App.  Its purpose is to break a
monolithic main.js file into more manageable chunks as described below.  It also aims to make it
easier to track down specific functionality as well as debug functionality (all components can be
conveniently accessed right from the console).

### Structure

Including the framework files will result in a global object - App.  App will contain the following:

	App: {
		Config: Object
		Events: Object
		Init: Object
		Page: Object
		Templates: Object
		Timers: Object
		View: Constructor
	}

Each of these is available to all the others.  Individual components:

Config - Contains global app config variables ('# of tweets per page', etc.).
Templates - Contains JS templates to be compiled via Underscore/Handlebars/whatever
__ - Contains "internal functionality," generally utility functions for use by Init, Page, etc.
Init - Contains functions global to the entire site (or at least significant chunks of it)
Events - Contains functions which should be called by bound events.
Page - Contains functions specific to individual pages (or components)
App - The main application.  Calls functionality from everything else.  Events are bound here as well.

### Requirements

Tested with:  
*jQuery 1.9.1* (but should be compatible with v2)  
*Underscore 1.5.1*  
*Backbone 1.0.0*

In case you don't have those handy:

	<script type="text/javascript" src="//code.jquery.com/jquery-1.9.1.js?ver=1.10.1"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"></script>

These are assumed to be included.

### Usage

The framework consists of 7 files.  These can theoretically be included in any order - however, this
is not guaranteed depending on what you add to it.  Preferred include structure is as follows:

	<script type="text/javascript" src="app/config.js"></script>
	<script type="text/javascript" src="app/templates.js"></script>
	<script type="text/javascript" src="app/__.js"></script>		
	<script type="text/javascript" src="app/init.js"></script>
	<script type="text/javascript" src="app/events.js"></script>
	<script type="text/javascript" src="app/page.js"></script>
	<script type="text/javascript" src="app/app.js"></script>

## Todo

* Put Backbone's routes to use
* Add some default models for common cases
* Add a sample collection
* Add localStorage manager
* Add global debug loggin
* Add asynchronous loader for required scripts if they don't exist
* Fail spectacularly if any of the required includes aren't around