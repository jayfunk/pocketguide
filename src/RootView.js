import React from 'react-native';
import EventsView from './events/EventsView';
import SplashScreen from './SplashScreen';

export default RootView = React.createClass({

  getInitialState: function(){
    return {
      splashScreenVisible: true
    };
  },

  componentDidMount(){
    setTimeout(() => {
      this.setState({splashScreenVisible: false});
    }, 2500);
  },

  render(){
    if(this.state.splashScreenVisible) return <SplashScreen/>;

    return <EventsView/>;
  }
});