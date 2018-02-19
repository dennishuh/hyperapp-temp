import { h, app } from 'hyperapp'

export default ({ setCity, submitSearch }) =>
  <div className='search'>
    <input
      onkeyup={
        e => {
          e.keyCode === 13 ? submitSearch() : setCity( e.target.value )
        }
      }
      placeholder='City name'
    />
  </div>
