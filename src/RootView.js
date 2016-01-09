import EventsContainerView from './events/components/EventsContainerView'
import NavBar from './NavBar'
import React from 'react-native'
const {
  Navigator
} = React

export default RootView = React.createClass({
  render: function () {
    return <Navigator
      initialRoute = {{name: 'Events', component: EventsContainerView}}
      renderScene = {(route, navigator) => {
        if (route.component) {
          return <route.component
            navigator = {navigator}
            {...route.props}
          />
        }
      }}
      navigationBar = {<NavBar/>}
    />
  }
})
