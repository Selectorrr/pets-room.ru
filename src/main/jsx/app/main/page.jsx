angular.module('petsroomApp').directive('mainPage', function (reactDirective) {
    var RaisedButton = MUI.RaisedButton;
    return reactDirective(React.createClass({
        propTypes: {
            //fname: React.PropTypes.string.isRequired,
            //lname: React.PropTypes.string.isRequired
        },
        render: function () {
            return <div className="container_12">
                <div className="grid_12">
                    <p>
                        <RaisedButton label="Primary" primary={true} />
                    </p>
                </div>
                <div className="clear"></div>
                <div className="grid_12">
                    <p>
                        <RaisedButton label="Primary" primary={true} />
                    </p>
                </div>
            </div>;
        }
    }))
});
