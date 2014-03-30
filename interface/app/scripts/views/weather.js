/*global ambient, Backbone, JST*/

ambient.Views = ambient.Views || {};

(function () {
    'use strict';

    ambient.Views.WeatherView = Backbone.View.extend({
    	el: 'section.weather',
        template: JST['app/scripts/templates/weather.ejs'],
        errorTemplate: JST['app/scripts/templates/err/weather.ejs'],

        init: function() {

        	var _this = this;

        	this.collection.fetch({
        		success: function() {
                    console.log(JSON.stringify(_this.collection));

                    console.log(_this.collection.getTemp())

        			_this.render();
        		},
        		error: function() {
        			_this.renderError();
        		}
        	})


        },

        render: function() {
            console.log("Rendering weather")
            $(this.el).html(this.template({
                weather: this.collection.getInfo(),
                temp: this.collection.getTemp()
            }));
        }

    });

})();
