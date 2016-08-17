/**
 * Created by Wenwu on 7/19/2016.
 */
requirejs.config({
    baseUrl: 'lib',
    paths: {
        'jquery': 'jquery/dist/jquery.min',
        'vue': 'vue/dist/vue.min',
        'config': '../js/common/config',
        'spinner': '../js/common/spinner',
        'ajax': '../js/common/ajax',
        'utilities': '../js/common/utilities',
        'vue-router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/0.7.10/vue-router.min',
    },
    shim: {
        'ajax': 'spinner',
        'vue-router': 'vue'
    }
});