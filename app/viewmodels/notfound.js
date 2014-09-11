define(['knockout'], function(ko) {
    var vm = function () {
        this.errorMessage = ko.observable('');

        this.activate = function (view) {
            this.errorMessage('URL "' + view + '" wurde nicht gefunden!');
        };
    };

    return vm;
});
