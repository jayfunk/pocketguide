import {loadData} from '../actionCreators'
import sinon from 'sinon'

const dispatch = sinon.spy()

describe('actionCreators', () => {
  describe('loadData thunk', () => {
    afterEach(() => {
      dispatch.reset()
    })

    it('should dispatch data:load action', () => {
      const netInfo = {
        isConnected: {
          fetch: () => { return {then: sinon.stub()} }
        }
      }

      const diskStore = {
        get: () => { return {then: sinon.stub()} }
      }

      loadData()(dispatch, null, {netInfo, diskStore})

      expect(dispatch).to.be.calledOnce
    })

    it('should load data from disk if not connected', (done) => {
      const events = [{
        id: 1
      }]

      const netInfo = {
        isConnected: {
          fetch: () => Promise.resolve(false)
        }
      }

      const diskStore = {
        get: sinon.stub().returns(Promise.resolve({events}))
      }

      const actual = loadData()(dispatch, null, {netInfo, diskStore})

      actual
        .then(() => {
          expect(diskStore.get).to.be.calledWith('LAST_DATA')
          expect(dispatch).to.be.calledWith({
            type: 'data:load:complete',
            events
          })
          done()
        })
        .catch(done)
    })

    it('should load data from server if connected', (done) => {
      const data = {
        events: [{
          id: 1
        }]
      }

      const response = {
        ok: true,
        json: sinon.stub().returns(Promise.resolve(data))
      }

      const fetch = sinon.stub().returns(Promise.resolve(response))

      global.fetch = fetch

      const netInfo = {
        isConnected: {
          fetch: () => Promise.resolve(true)
        }
      }

      const diskStore = {
        get: sinon.stub(),
        save: sinon.stub()
      }

      diskStore.get.withArgs('LAST_MODIFIED_KEY').returns(Promise.resolve(new Date()))

      const actual = loadData()(dispatch, null, {netInfo, diskStore})

      actual
        .then(() => {
          expect(diskStore.get).to.be.calledWith('LAST_MODIFIED_KEY')
          expect(dispatch).to.be.calledWith({
            type: 'data:load:complete',
            events: data.events
          })
          done()
        })
        .catch(done)
    })

    it('should store data from server on disk', () => {})

    it('should load data from disk if server response is 304 Not Modified', () => {})

    it('should dispatch data:load:error when attempting to load from disk', () => {})

    it('should dispatch data:load:error when server response is not "ok"', () => {})
  })
})
