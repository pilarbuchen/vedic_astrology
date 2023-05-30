import { createBoard } from '@wixc3/react-board';
import ResultList from '../../../components/ResultList';

export default createBoard({
    name: 'ResultList - Fixes Results',
    Board: () => <ResultList chart={''} search={false} signs={[]} fixed={true} />
});
