angular.module('petsroomApp').directive('navBar', function (reactDirective) {
    var AppBar = MUI.AppBar;
    var IconButton = MUI.IconButton;
    var NavigationClose = MUI.NavigationClose;
    var IconMenu = MUI.IconMenu;
    var MenuItem = MUI.MenuItem;
    var MoreVertIcon = MUI.MoreVertIcon;
    return reactDirective(React.createClass({
        propTypes: {
            state: React.PropTypes.object.isRequired
        },
        onLogoClick: function(){
            this.props.state.go("home");
        },
        render: function () {
            var that = this;
            return <AppBar
                onLeftIconButtonTouchTap={that.onLogoClick}
                title="pets-room.ru"/>
        }
    }))
});
