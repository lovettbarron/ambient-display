/*global ambient, Backbone, JST*/

ambient.Views = ambient.Views || {};

(function () {
    'use strict';

    ambient.Views.TrelloView = Backbone.View.extend({

        template: JST['app/scripts/templates/trello.ejs']

    });

})();
