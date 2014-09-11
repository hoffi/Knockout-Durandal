define(['services/blog_store', 'durandal/app', 'plugins/router', 'knockout'],
    function (blog, app, router, ko) {
    var vm = function() {
        var self = this;

        self.post = ko.observable();

        self.activate = function (id) {
            self.post(blog.find_by_id(id));

            return true;
        };

        self.setTitle = function() {
            return self.post().title;
        };
    };

    return vm;
});
