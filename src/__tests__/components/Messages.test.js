import React, { useRef } from 'react';
import { fireEvent, render} from '@testing-library/react';
import { Messages } from '../../components/messages/Messages';
import { Button } from '../../components/button/Button';

const MessagesTestComponent = () => {

    const messages = useRef(null);

    const showSuccess = () => {
        messages.current.show({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    }

    return (
        <>
            <Button data-testid="show-messages" onClick={showSuccess} label="Success" className="p-button-success" />
            <Messages ref={messages}>Msg</Messages>
        </>
    )
}

describe('Messages Component', () => {
    test('should display the Messages', () => {
        const { container, getByTestId } = render(<MessagesTestComponent />);
        const messages = container.firstChild;

        expect(container).toBeInTheDocument();
        fireEvent.click(getByTestId('show-messages'));

    })
})