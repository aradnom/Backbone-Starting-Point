/////////////////////////////////////////////////////////////////
// Main application /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

/**

	Description:
	
	The heart of everything. Can call methods/properties from __, Events, Init, etc. (or
	any other files you add) and handles event bindings via events (see example). Props/methods
	from all files are loaded into the global App object and in theory it doesn't matter what
	order the files are loaded in (though this isn't bulletproof depending on what you do).

	Recommended load order:
	Config --> Templates --> __ --> Init --> Events --> Page --> App

**/

var App = ( function ( app ) {

	var Application = Backbone.View.extend({

		// View attributes loaded from config.js - available internally as this.attributes or
		// externally as App.Config
		attributes: app.Config,

		/////////////////////////////////////////////////////////////////
		// Init /////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////

		// Startup - starter functions for global JS, window/event binding (because the native
		// view can't handle these) + page-specific functionality
		initialize: function () {

			$ = this.jQuery || jQuery || window.jQuery; // In case $.noConflict was called

			// Extend events.js into the view so Backbone can delegate events to them
			_.extend( this, app.Events );

			// Add any necessary extensions/enhancements/bling/spinners to jQuery
			app.Init.jQueryExtensions();

			// Window events - bound outside Backbone events system
			app.Init.WindowEvents();

			// Keyboard events - bound outside Backbone events system
			app.Init.KeyboardEvents();

			// Page-specific functionality ////////////////////////////////////////////
			this.LoadPages();

		},

		LoadPages: function () {

			// General format ////////////////////////////////////////////////
			// Todo: switch to routes
			//if ( $(<page-specific-container>).length ) {
			//	app.Page.<page-name>();
			//}

		},

		////////////////////////////////////////////////////
		// Event bindings //////////////////////////////////
		////////////////////////////////////////////////////

		// Backbone events are always delegated.  Events should be tied to functions in events.js
		events: {

			// Global events /////////////////////////////////////

			//'<event-type> <selector>' 	: '<function-name>',

			// Page events //////////////////////////////////////////

			//'click body a'				: 'ExampleFunction'

		}
		
	});

	///////////////////////////////////////////////////////
	// START THE MUZAK ////////////////////////////////////
	///////////////////////////////////////////////////////

	app.View = new Application({ el: 'body' });

	return app;

})( App || {} );