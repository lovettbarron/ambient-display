/*global ambient, Backbone*/

ambient.Models = ambient.Models || {};

(function () {
    'use strict';

    ambient.Models.WeatherModel = Backbone.Model.extend({

        // url: 'http://api.openweathermap.org/data/2.5/weather?q=SanFrancisco,usa',

        initialize: function() {
            console.log('Init weather model');
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response.main;
        }
    });

})();
