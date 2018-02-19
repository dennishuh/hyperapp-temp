import request from '../config/request'

export default {
  getTemperature: temp => (state, actions) => request.getQuery(state.city).then(actions.setTemperature),
  submitSearch: city => (state, actions) => request.getQuery(state.city).then(actions.setTemperature),
  setCity: (city) => ({ city }),
  setTemperature: res => {
    const temp = (res.data.main.temp * 9/5 - 459.67).toFixed(0);
    return {
      temp
    }
  }
};
