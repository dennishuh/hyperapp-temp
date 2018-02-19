import { h, app } from 'hyperapp';
import Search from './Search';

export default ({ temp, city, tempScale }, { getTemperature, submitSearch, setTemperature, setCity }) =>
  <div
    oncreate={() => getTemperature('chicago')}
  >
    <div className='centered-content'>
      <div className='container'>
        Current temperature of {city} is {temp}&deg; {tempScale}
        <Search
          setCity={setCity}
          submitSearch={submitSearch}
        />
      </div>
    </div>
  </div>
