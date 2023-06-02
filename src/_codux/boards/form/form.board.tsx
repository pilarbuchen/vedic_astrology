import { createBoard } from '@wixc3/react-board';
import Form from '../../../components/Form';

export default createBoard({
    name: 'Form',
    Board: () => <Form onSubmit={undefined} />,
    environmentProps: {
        canvasWidth: 760,
        canvasHeight: 331,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
