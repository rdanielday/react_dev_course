var React = require("react");

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var update = {}
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (message.length > 0) {
      this.refs.message.value = "";
      update.message = message;
    }

    if (name.length > 0) {
      this.refs.name.value = "";
      update.name = name;
    }
    this.props.onUpdate(update);
  },

  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="New name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="New message here" />
        </div>
        <div>
          <button>Update</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;
