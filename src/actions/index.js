import request from '../config/request'

export default {
  getTemperature: temp => (state, actions) => request.getQuery(state.city).then(actions.setTemperature),
  submitSearch: (city = "Chicago") => (state, actions) => request.getQuery(state.city).then(actions.setTemperature),
  setCity: (city = 'Chicago') => ({ city }),
  setTempScale: (tempScale) => (state) => {
    const temp =  tempScale === 'F' ? (state.kelvinTemp * 9/5 - 459.67).toFixed(0) : (state.kelvinTemp - 273.15).toFixed(0);
    return {
      temp,
      tempScale
    }
  },
  setTemperature: res => (state, actions) => {
    const temp = state.tempScale === 'F' ? (res.data.main.temp * 9/5 - 459.67).toFixed(0) : (res.data.main.temp - 273.15).toFixed(0);
    return {
      kelvinTemp: res.data.main.temp,
      temp
    }
  },
  updateTemp: (state) => {
    const temp =  state.tempScale === 'F' ? (res.data.main.temp * 9/5 - 459.67).toFixed(0) : (res.data.main.temp - 273.15).toFixed(0);
    return {
      temp
    }
  }
};
