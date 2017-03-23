// Include React
var React = require("react");

var Form = React.createClass({
  // generic state for search parameters
  getInitialState: function(){
    return {
      topic: "",
      startYear: "",
      endYear: ""
    };
  },

  // This function will respond to the user input
  handleChange: function(event) {
    this.setState({ topic: event.target.value });
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTopic(this.state.topic);
    this.setState({ topic: "" });
  },

  render: function () {
    <div className="panel panel-default"> {/* div for panel */}
      <div class="panel-heading"> {/* div for panel heading */}
        <h3 class="panel-title">Enter Your Search Parameters</h3>
      </div>{/* closing div for panel heading */}

      {/* form for topic input */}
      <div className="panel-body"> {/* div for panel body with search parameters */}
        <label for="topic">Topic</label>
        <input
          value={this.state.topic}
          type="text"
          className="form-control text-center"
          id="topic"
          onChange={this.handleChange}
          required
        />

        {/* form for start year */}
        <label for="startYear">Start Year</label>
        <input
          value={this.state.startYear}
          type="text"
          className="form-control text-center"
          name="startYear" id="startYear"
        />

        {/* form for end year */}
        <label for="endYear">End Year</label>
        <input
          value={this.state.endYear}
          type="text"
          className="form-control text-center"
          name="endYear" id="endYear"
        />
      </div> {/* div for panel body with search parameters */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </div> // closing div for panel 
  }
});
