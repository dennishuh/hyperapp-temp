import { h, app } from 'hyperapp';
import Search from './Search';

export default ({ temp, city, tempScale }, { getTemperature, submitSearch, setCity, setTempScale }) =>
  <div
    oncreate={() => getTemperature('chicago')}
  >
    <div className='centered-content'>
      <div className='container'>
        <div className="content">
          Current temperature of <strong>{city}</strong> is {temp}&deg; {tempScale}
        </div>

        <Search
          setCity={setCity}
          submitSearch={submitSearch}
          setTempScale={setTempScale}
        />
      </div>
    </div>
  </div>
