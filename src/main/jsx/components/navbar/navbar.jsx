angular.module('petsroomApp').directive('navBar', function (reactDirective) {
    var AppBar = MUI.AppBar;
    return reactDirective(React.createClass({
        render: function () {
            return <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more" />;
        }
    }))
});
