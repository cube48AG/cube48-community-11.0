odoo.define('toggle_debug_mode.custom_js', function (require) {
    "use strict";

    var UserMenu = require('web.UserMenu');

    UserMenu.include({
        init: function () {
            this._super.apply(this, arguments);
            var self = this;
            var session = this.getSession();
            var lang_list = '';
        },

        start: function () {
            var self = this;
            return this._super.apply(this, arguments).then(function () {
                var mMode = 'normal';
                if (window.location.href.indexOf('debug') != -1)
                    mMode = 'debug';
                if (mMode == 'normal')
                    $('[data-menu="quitdebug"]').parent().hide();
                if (mMode == 'debug')
                    $('[data-menu="debug"]').parent().hide();
            });
        },
        _onMenuDebug: function () {
            window.location = $.param.querystring(window.location.href, 'debug');
        },
        _onMenuQuitdebug: function () {
            window.location.search = "?";
        },
    })

});
