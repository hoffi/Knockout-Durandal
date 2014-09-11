define(['plugins/router', 'durandal/app', 'knockout'], function (router, app, ko) {
    return {
        router: router,
        notification: ko.observable(),
        activate: function () {
            router.map([
                { route: '', title:'Übersicht', moduleId: 'viewmodels/overview', nav: true },
                { route: 'post/new', title: 'Neuer Post', moduleId: 'viewmodels/new_post', nav: true },
                { route: /post\/(\d)/, moduleId: 'viewmodels/post_detail' }
            ]).mapUnknownRoutes('viewmodels/notfound', 'not-found')
              .buildNavigationModel();

            router.updateDocumentTitle = this.updateDocumentTitle;

            var that = this;
            app.on('post:deleted', function (data) {
                that.notification({
                    message: data.title + ' wurde erfolgreich gelöscht!'
                });
            });
            app.on('post:created', function (data) {
                that.notification({
                    message: data.title + ' wurde erfolgreich erstellt!'
                });
            });

            return router.activate();
        },
        updateDocumentTitle: function (instance, instruction) {
            if (instance.setTitle)
                document.title = instance.setTitle();
            else if (instruction.config.title) {
                document.title = instruction.config.title;
            }

            if (app.title) {
                document.title = document.title + " | " + app.title;
            }
        }
    };
});
