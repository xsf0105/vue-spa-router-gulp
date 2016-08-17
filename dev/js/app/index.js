/**
 * Created by AllanXu on 08/17/2016.
 */
define(function(require) {
    var Vue = require('vue'),
        Config = require('config'),
        utilities = require('utilities'),
        VueRouter = require('vue-router'),
        _ = require('ajax');

    Vue.use(VueRouter);
    var router = new VueRouter();

    var Dir = Vue.extend({
        template:
        '<div class="list">' +
        '<h2>Welcome to List Page!</h2>' +
        '<router-view></router-view>' + // <- nested outlet
        '</div>'
    })

    var Match = Vue.extend({
        template:
        '<div class="foo">' +
        '<h2>This is match!</h2>' +
        '<router-view></router-view>' + // <- nested outlet
        '</div>'
    })

    var Jobwanted = Vue.extend({
        template:
        '<div class="foo">' +
        '<h2>This is Foo!</h2>' +
        '<router-view></router-view>' + // <- nested outlet
        '</div>'
    })

    var Recruit = Vue.extend({
        template:
        '<div class="list">' +
        '<ul>' +
            '<li>' +
                '<a>' +
                    '{{allan}}' +
                '</a>'+
            '</li>'+
        '</ul>' +
        '<h2>This is match!</h2>'+
        '</div>'
    })


    var Bar = Vue.extend({
        template: '<p>This is bar!</p>'
    })

    router.map({
        '/dir': {
            component: Dir
        },
        'match': {
            component: Match
        },
        '/jobwanted': {
            component: Jobwanted
        },
        'recruit': {
            component: Recruit
        }
    })

    var App = Vue.extend({})
    router.start(App, '#index')
});
