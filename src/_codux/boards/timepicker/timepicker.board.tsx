import { createBoard } from '@wixc3/react-board';
import Timepicker from '../../../components/timepicker/timepicker';
import React from 'react';

export default createBoard({
    name: 'Timepicker',
    Board: () => <Timepicker valueTime={{
        $H: 0,
        $m: 0,
        $s: 0
    }} setValueTime={function(value: React.SetStateAction<{ $H: number; $m: number; $s: number; }>): void {
        throw new Error('Function not implemented.');
    }} />
});
