/*global ambient, Backbone, JST*/

ambient.Views = ambient.Views || {};

(function () {
    'use strict';

    ambient.Views.BackgroundView = Backbone.View.extend({
    	el: 'section.background',
        template: JST['app/scripts/templates/background.ejs'],
        timeout: null,
        img: [],
        imgnum: 50,
        path: '/images/bg/',
        init: function() {
        	var _this = this;
        	 for (var i = 1; i < this.imgnum; i++) {
                _this.img.push(this.path+('0' + i).slice(-2) + '.jpg');
                
            }
            this.render();
        },

        render: function() {
        	var index = Math.floor(Math.random() * this.imgnum + 1);
        	$(this.el).append(this.template({image:this.img[index]}))
        }

    });

})();
