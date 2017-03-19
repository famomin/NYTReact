// Include React
var React = require("react");

//include all of the sub-components
var Search = require("./Search");
var Saved = require("./Saved");

// This is the main component. It includes the jumbotron and two sub-components Saved and Search.
var Main = React.createClass({
  render: function() {
    return (
      <div className="container"> //main container for everything
        <div className="row"> //row for jumbotron
          <div className="jumbotron"> //jumbotron heading
            <h1 className="text-center">New York Times Article Scrubber</h1>
            <p className="text-center">Search for and annotate articles of interest!</p>
          </div> //closing jumbotron heading
        </div> //closing row for jumbotron

        <div className="row"> //row for children
          {this.props.children}
        </div>  // closing row for children
      </div> // closing  container
    );
  }
});

//exporting main
module.exports = Main;
