import React from 'react-native'
import EventsStore from '../EventsStore'
import EventsView from './EventsView'
import { createRoute } from '../../nav/appRoutes'

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object
  },

  contextTypes: {
    events: React.PropTypes.object
  },

  getInitialState: function () {
    return {
      eventsStore: new EventsStore(),
      searchTerm: void 0
    }
  },

  componentDidMount () {
    this.context.events.addListener('event:search', this._onEventSearch)
  },

  componentWillUmount () {
    this.context.events.removeListener('event:search', this._onEventSearch)
  },

  render: function () {
    const eventsToDisplay = this._filterEvents(this.state.eventsStore.getAll())

    return <EventsView
      events = {eventsToDisplay}
      onEventPress = {this._handleEventPress}
    />
  },

  _onEventSearch ({searchTerm}) {
    if (!this.isMounted()) return

    this.setState({
      searchTerm
    })
  },

  _filterEvents (events) {
    if (!this.state.searchTerm) return events
    const searchTerm = this.state.searchTerm.trim().toLowerCase()
    if (searchTerm.length === 0) return events

    return events.filter(event => {
      return event.name.toLowerCase().indexOf(searchTerm) > -1
    })
  },

  _handleEventPress: function (selectedEvent) {
    this.setState({
      searchTerm: null
    })
    const eventRoute = createRoute('event', { event: selectedEvent })
    this.props.navigator.push(eventRoute)
  }
})
