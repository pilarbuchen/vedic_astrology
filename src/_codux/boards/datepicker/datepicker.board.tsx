import { createBoard } from '@wixc3/react-board';
import Datepicker from '../../../components/datepicker/datepicker';
import React from 'react';

export default createBoard({
    name: 'Datepicker',
    Board: () => <Datepicker
        setValueDate={() => {}} valueDate={null}   />
});
