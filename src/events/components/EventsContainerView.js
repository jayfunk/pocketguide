import React from 'react-native'
import EventsStore from '../EventsStore'
import EventsView from './EventsView'
import { createRoute } from '../../nav/appRoutes'

export default React.createClass({
  propTypes: {
    navigator: React.PropTypes.object,
    dataStore: React.PropTypes.object
  },

  contextTypes: {
    eventChannel: React.PropTypes.object
  },

  getInitialState () {
    return {
      events: [],
      searchTerm: void 0
    }
  },

  componentWillMount () {
    this.context.eventChannel.addListener('dataStore:load:complete', this._onDataStoreLoadComplete)
    this.context.eventChannel.addListener('dataStore:load:error', this._handleDataStoreError)
    this.context.eventChannel.addListener('event:search', this._onEventSearch)
    if (this.props.dataStore.isLoaded()) this._onDataStoreLoadComplete()
  },

  componentWillUmount () {
    this.context.eventChannel.removeListener('dataStore:load:complete', this._onDataStoreLoadComplete)
    this.context.eventChannel.removeListener('dataStore:load:error', this._handleDataStoreError)
    this.context.eventChannel.removeListener('event:search', this._onEventSearch)
  },

  render () {
    return <EventsView
      events = {this._filterEvents(this.state.events)}
      onEventPress = {this._handleEventPress}
    />
  },

  _onDataStoreLoadComplete () {
    const data = this.props.dataStore.getAll()
    this.setState({
      events: data.events
    })
  },

  _handleDataStoreError (context) {
    console.log('_handleDataStoreError', context)
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

  _handleEventPress (selectedEvent) {
    this.setState({
      searchTerm: null
    })
    const eventRoute = createRoute('event', { event: selectedEvent })
    this.props.navigator.push(eventRoute)
  }
})
