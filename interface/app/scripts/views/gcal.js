/*global ambient, Backbone, JST*/

ambient.Views = ambient.Views || {};

(function () {
    'use strict';

    ambient.Views.GcalView = Backbone.View.extend({

        template: JST['app/scripts/templates/gcal.ejs']

    });

})();
