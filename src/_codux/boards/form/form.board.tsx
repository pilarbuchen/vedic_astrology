import { createBoard } from '@wixc3/react-board';
import Form from '../../../components/Form';

export default createBoard({
    name: 'Form',
    Board: () => <Form onSubmit={undefined} />,
    environmentProps: {
        canvasWidth: 464,
        canvasHeight: 331
    }
});
