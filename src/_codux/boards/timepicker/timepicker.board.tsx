import { createBoard } from '@wixc3/react-board';
import Timepicker from '../../../components/timepicker/timepicker';
import React from 'react';

export default createBoard({
    name: 'Timepicker',
    Board: () => <Timepicker />
});
