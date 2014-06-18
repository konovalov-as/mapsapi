DG.Geoclicker.Handler.Default = DG.Class.extend({

    includes: DG.Locale,

    statics: {
        Dictionary: {}
    },

    _eventHandlers: {},

    initialize: function (controller, view, map, options) { // (Object, Object, Object)
        this._controller = controller;
        this._view = view;
        this._map = map;
        this._view._popup.on('click', this._runEventHandlers, this);
    },

    handle: function () { // (Object, String) -> Promise
        return Promise.resolve({
            tmpl: 'popupHeader',
            data: {'title': this.t('we_have_not')}
        });
    },

    _addEventHandler: function (el, handler) { // (String, Function)
        this._eventHandlers[el] = handler;
    },

    _runEventHandlers: function(e) {
        var target = e.originalEvent.target;

        for (eventClass in this._eventHandlers) {
            if (this._eventHandlers.hasOwnProperty(eventClass) && target.className.indexOf(eventClass) > -1) {
                this._eventHandlers[eventClass].call(this, target);
                return;
            }
        }
    },

    _clearEventHandlers: function () {
        this._eventHandlers = {};
    },

    _getDirectionsUrl: function (name) {
        return DG.Util.template('__PPNOT_LINK__', {
            'code': this._map.projectDetector.getProject().code,
            'name': encodeURIComponent(name),
            'point': 'POINT(' + this._popup._latlng.lng + ' ' + this._popup._latlng.lat + ')'
        });
    }

});


DG.Geoclicker.Handler.HandlerExample = DG.Geoclicker.Handler.Default.extend({

    handle: function (results, type) { // (Object, String) -> Promise
        return Promise.resolve({
            tmpl: type + ':<br/>' + results[type].id
        });
    }
});
