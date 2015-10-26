var React = require('react-native');
var EventsView = require('./events/EventsView');
var SplashScreen = require('./SplashScreen');

module.exports = RootView = React.createClass({

  getInitialState: function(){
    return {
      splashScreenVisible: true
    };
  },

  componentDidMount: function(){
    _this = this;
    setTimeout(function(){
      _this.setState({splashScreenVisible: false});
    }, 2500);
  },

  render: function(){
    if(this.state.splashScreenVisible) return <SplashScreen/>;

    return <EventsView/>;
  }

});

