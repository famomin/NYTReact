// Include React
var React = require("react");

//include all of the sub-components
var Form = require("./children/Form");
var Saved = require("./children/Saved");
var Search = require("./children/Search");

// Helper for making AJAX requests to our NYT Api
var helpers = require("./utils/helpers");

// This is the main component. It includes the jumbotron and two sub-components Saved and Search.
var Main = React.createClass({

  //generic state associated with number of clicks
  getInitialState: function () {
    return {
      searchTopic:"",
      results: "",
      savedArticles: []
    };
  },

  //moment page renders, show saved articles
  componentDidMount: function() {
    // Get the latest history.
    helpers.getSavedArticles().then(function(response) {
      console.log(response);
      if (response !== this.state.savedArticles) {
        console.log("Saved Articles", response.data);
        this.setState({ savedArticles: response.data });
      }
    }.bind(this));
  },

  //when component changes, update results
  componentDidUpdate: function () {
    helpers.runQuery(this.state.searchTopic).then(function (data) {
      if (data !== this.state.results) {
        console.log("Results", data);
        this.setState({ results: data });
      }
    }.bind(this));
  },

    // This function allows childrens to update the parent.
  setTopic: function(topic) {
    this.setState({ searchTopic: topic });
  },


  render: function() {
    return (
      <div className="container"> {/* main container for everything */}
        <div className="row"> {/* row for jumbotron */}
          <div className="jumbotron"> {/* jumbotron heading */}
            <h1 className="text-center">New York Times Article Scrubber</h1>
            <p className="text-center">Search for and annotate articles of interest!</p>
          </div> {/* closing jumbotron heading */}
        </div> {/* closing row for jumbotron */}

        {/*form to search */}
        <div className="row"> {/* row for search form */}
          <Form setTerm={this.setTopic} />
        </div>  {/* closing row for search form */}

        {/* To show results */}
        <div className="row"> {/* row for results */}
          <Form setTerm={this.state.results} />
        </div>  {/* closing row for Results*/}

        {/* To show saved articles */}
        <div className="row"> {/* row for results */}
          <Form setTerm={this.state.savedArticles} />
        </div>  {/* closing row for Results*/}


      </div> {/* main container for everything */}
    );
  }
});

//exporting main
module.exports = Main;
