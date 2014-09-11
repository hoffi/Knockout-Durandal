define(['knockout', 'durandal/app'], function(ko, app) {
    var vm = function () {
      this.entries = ko.observableArray([{
        id: 1,
        title: 'Test 123',
        body: 'Bla Bla Bla',
        posted_on: new Date(),
        marked: true
      }]);

      this.find_by_id = function (id) {
        return ko.utils.arrayFirst(this.entries(), function (post) {
          return post.id === parseInt(id);
        });
      };

      this.delete = function (post) {
        this.entries.remove(post);
        app.trigger('post:deleted', post);
      };

      this.post = function (title, body, marked) {
        var blog_post = {
          id: this.entries().length + 1,
          title: title,
          body: body,
          posted_on: new Date(),
          marked: marked || false
        };

        this.entries.push(blog_post);
        app.trigger('post:created', blog_post);
      };
    };

    return new vm();
});
