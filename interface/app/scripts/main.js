/*global ambient, $*/


window.ambient = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    background: null,
    clock: null,

    // Weather
    weather: null,
    weatherCollection: null,
    WeatherModel: null,
    

    init: function () {
        'use strict';
        
        this.weatherCollection = new this.Collections.WeatherCollection({
                model: new this.Models.WeatherModel()
            });

        this.background = new this.Views.BackgroundView();
        this.background.init();

        this.clock = new this.Views.ClockView();
        this.clock.init();

        this.weather = new this.Views.WeatherView({collection:this.weatherCollection});
        this.weather.init();

    }
};

$(document).ready(function () {
    'use strict';
    ambient.init();
});
