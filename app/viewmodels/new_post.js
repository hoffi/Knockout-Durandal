define(['services/blog_store', 'knockout', 'plugins/router'], function(blog, ko, router) {
  var vm = function () {
    self = this;
    this.title = ko.observable();
    this.body = ko.observable();
    this.marked = ko.observable(false);

    this.save = function () {
      blog.post(self.title(), self.body(), self.marked());

      router.navigateBack();
    };

    this.back = function () {
      router.navigateBack();
    };
  };

  return vm;
});
