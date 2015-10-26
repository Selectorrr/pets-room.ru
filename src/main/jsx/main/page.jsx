angular.module('petsroomApp').directive('mainPage', function (reactDirective) {
    var RaisedButton = MUI.RaisedButton;
    return reactDirective(React.createClass({
        propTypes: {
            //fname: React.PropTypes.string.isRequired,
            //lname: React.PropTypes.string.isRequired
        },
        render: function () {
            return <RaisedButton label="Primary" primary={true} />;
        }
    }))
});
