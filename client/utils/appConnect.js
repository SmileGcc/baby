import shallowEqual from './shallowEqual.js'
import warning from './warning.js'
import wrapActionCreators from './wrapActionCreators.js'

const defaultMapStateToProps = state => ({}) // eslint-disable-line no-unused-vars
const defaultMapDispatchToProps = dispatch => ({dispatch})

function appConnect(mapStateToProps, mapDispatchToProps) {
  const shouldSubscribe = Boolean(mapStateToProps)
  const mapState = mapStateToProps || defaultMapStateToProps
//   const app = getApp();

  let mapDispatch
  if (typeof mapDispatchToProps === 'function') {
    mapDispatch = mapDispatchToProps
  } else if (!mapDispatchToProps) {
    mapDispatch = defaultMapDispatchToProps
  } else {
    mapDispatch = wrapActionCreators(mapDispatchToProps)
  }

  return function wrapWithConnect(appConfig) {
    if(!appConfig.store){
         warning("Store对象不存在!")
    }
    function handleChange(options) {
      if (!this.unsubscribe) {
        return
      }

      const state = this.store.getState()
      const mappedState = mapState(state, options);
      if (!this.data || shallowEqual(this.data, mappedState)) {
        return;
      }
      Object.assign(this.data, mappedState);
    }

    const {
      onLaunch: _onLaunch
      //onLaunch: _onUnload,
    } = appConfig

    function onLaunch() {
    //   this.store = appConfig.store;
    //   if (!this.store) {
    //     warning("Store对象不存在!")
    //   }
      if(shouldSubscribe){
        this.unsubscribe = this.store.subscribe(handleChange.bind(this))
        handleChange.apply(this)
      }
      if (typeof _onLaunch === 'function') {
        _onLaunch.call(this)
      }
    }

    // function onUnload() {
    //   if (typeof _onUnload === 'function') {
    //     _onUnload.call(this)
    //   }
    //   typeof this.unsubscribe === 'function' && this.unsubscribe()
    // }

    return Object.assign({}, appConfig, mapDispatch(appConfig.store.dispatch), {onLaunch})
  }
}

module.exports = appConnect