import { createBoard } from '@wixc3/react-board';
import ResultList from '../../../components/ResultList';

export default createBoard({
    name: 'ResultList - Fixes Results',
    Board: () => <ResultList chart={''} search={true} signs={[]} fixed={true} />,
    environmentProps: {
        canvasWidth: 1899,
        windowWidth: 1024,
        windowHeight: 768
    }
});
