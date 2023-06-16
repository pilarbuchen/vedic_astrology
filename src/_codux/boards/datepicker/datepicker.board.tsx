import { createBoard } from '@wixc3/react-board';
import {Datepicker} from '../../../components/datepicker/datepicker';
import React from 'react';

export default createBoard({
    name: 'Datepicker',
    Board: () => <Datepicker valueDate={{
        $M: 0,
        $D: 0,
        $y: 0
    }} setValueDate={function (value: React.SetStateAction<{ $M: number; $D: number; $y: number; }>): void {
        throw new Error('Function not implemented.');
    } }  />
});
