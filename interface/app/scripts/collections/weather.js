/*global ambient, Backbone*/

ambient.Collections = ambient.Collections || {};

(function () {
    'use strict';

    ambient.Collections.WeatherCollection = Backbone.Collection.extend({

    	url: 'http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco,usa',
        model: ambient.Models.WeatherModel,

        init: function() {

        },

        getTemp: function() {
			return this.pluck('temp') ? (this.pluck('temp') - 273.15).toFixed(2) : "No temp";
        },

        getInfo: function() {
        	return this.pluck('description') ? this.pluck('description') : "No desc";
        }


    });

})();
