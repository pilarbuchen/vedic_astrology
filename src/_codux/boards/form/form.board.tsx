import { createBoard } from '@wixc3/react-board';
import Form from '../../../components/Form';
import React from 'react';

export default createBoard({
    name: 'Form',
    Board: () => <Form onSubmit={() => {}} />,
    environmentProps: {
        canvasWidth: 760,
        canvasHeight: 331,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
