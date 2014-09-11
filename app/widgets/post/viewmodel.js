define(['plugins/router'], function(router) {
    var vm = function() {
        var self = this;

        this.activate = function(settings) {
            self.settings = settings;
            self.entry = settings.entry;
        };

        this.show = function () {
            router.navigate('post/' + self.entry.id);
        };
    };

    return vm;
});
