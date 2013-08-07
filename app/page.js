/////////////////////////////////////////////////////////////
// Page functions ///////////////////////////////////////////
/////////////////////////////////////////////////////////////

/**

	Description:
	
	Contains page-specific functionality. Should be namespaced in app so these
	aren't being called on every page.

	Todo: switch to routes so the above happens automatically.

**/

var App = ( function ( app ) {

	app.Page = {

		Home: function () {
			// Do homepage stuff
		}

	}

	return app;

})( App || {} );