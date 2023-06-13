import { createBoard } from '@wixc3/react-board';
import CityAutoComplete from '../../../components/CityAutoComplete';
import React from 'react';

export default createBoard({
    name: 'CityAutoComplete',
    Board: () => <CityAutoComplete lat={3} lng={1} setLat={() => {}} setLng={() => {}} setTimeZone={() => {}} timeZone={0} />
});
