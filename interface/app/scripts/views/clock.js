/*global ambient, Backbone, JST*/

ambient.Views = ambient.Views || {};

(function () {
    'use strict';

    ambient.Views.ClockView = Backbone.View.extend({
    	el: 'section.clock',
        template: JST['app/scripts/templates/clock.ejs'],
        daytime: null,
        init: function() {
        	_.bindAll(this,'render')
        	this.render();
			setInterval(this.render, 1000);        	
        },


        render: function() {
        	var time = new Date();

			this.daytime = ("0" + time.getHours()).slice(-2)   + ":" + 
			    ("0" + time.getMinutes()).slice(-2)

        	$(this.el).html(this.template({time: this.daytime}))
        },

    });

})();
