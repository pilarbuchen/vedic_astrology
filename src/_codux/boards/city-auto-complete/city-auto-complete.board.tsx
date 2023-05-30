import { createBoard } from '@wixc3/react-board';
import CityAutoComplete from '../../../components/CityAutoComplete';

export default createBoard({
    name: 'CityAutoComplete',
    Board: () => <CityAutoComplete lat={3} lng={1} setLat={undefined} setLng={undefined} setTimeZone={undefined} timeZone={0} />
});
