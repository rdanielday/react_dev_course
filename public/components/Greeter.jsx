var React          = require("react"),
    GreeterMessage = require("./GreeterMessage"),
    GreeterForm    = require("./GreeterForm");

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: "React",
      message: "This is the default message."
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleUpdate: function (update) {
    this.setState(update);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onUpdate={this.handleUpdate} />
      </div>
    );
  }
});


module.exports = Greeter;
