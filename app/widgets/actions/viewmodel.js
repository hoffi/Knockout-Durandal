define(['durandal/app', 'services/blog_store', 'plugins/router'],
    function(app, blog, router) {
    var vm = function() {
        var self = this;

        this.activate = function(settings) {
            self.settings = settings;
            self.entry = settings.entry;
        };

        this.destroy = function () {
            var post = self.entry;
            var confirmMessage = 'Wollen Sie "' + post.title + '" wirklich löschen?';
            var buttons = [{ text: 'Ja', value: true }, { text: 'Nein', value: false }];

            app.showMessage(confirmMessage, 'Löschen', buttons).done(function (result) {
                if (result) {
                    blog.delete(post);

                    if (self.settings.in_detail) {
                        self.back();
                    }
                }
            });
        };

        self.back = function () {
            router.navigateBack();
        };
    };

    return vm;
});
