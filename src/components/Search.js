import { h, app } from 'hyperapp'

export default ({ setCity, submitSearch, setTempScale }) =>
  <div className='search'>
    <input
      onkeyup={
        e => {
          e.keyCode === 13 ? submitSearch() : setCity( e.target.value )
        }
      }
      placeholder='City name'
    />
    <select onchange={
      e => {
        setTempScale(e.target.value);
      }
    }>
      <option value="F">Fahrenheit</option>
      <option value="C">Celsius</option>
    </select>
  </div>
