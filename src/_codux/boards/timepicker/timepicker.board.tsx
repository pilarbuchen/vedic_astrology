import { createBoard } from '@wixc3/react-board';
import { Timepicker } from '../../../components/timepicker/timepicker';

export default createBoard({
    name: 'Timepicker',
    Board: () => <Timepicker />
});
