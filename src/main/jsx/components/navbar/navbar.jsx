angular.module('petsroomApp').directive('navBar', function (reactDirective) {
    var AppBar = MUI.AppBar;
    var IconButton = MUI.IconButton;
    var NavigationClose = MUI.NavigationClose;
    var IconMenu = MUI.IconMenu;
    var MenuItem = MUI.MenuItem;
    var MoreVertIcon = MUI.MoreVertIcon;
    return reactDirective(React.createClass({
        render: function () {
            return <AppBar
                title="Title"
                iconElementLeft={<IconButton>x</IconButton>}
                iconElementRight={
    <IconMenu iconButtonElement={
      <IconButton>o</IconButton>
    }>
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
} />
        }
    }))
});
