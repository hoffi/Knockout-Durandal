define(['services/blog_store', 'durandal/app', 'plugins/router', 'knockout'],
    function(blog, app, router, ko) {
    var vm = function () {
        var self = this;
        this.blog = blog;

        this.new_entry = function () {
            router.navigate('post/new');
        };
    };

    return vm;
});
