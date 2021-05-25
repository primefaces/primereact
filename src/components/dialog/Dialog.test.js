import React, { useState } from 'react'
import { render, fireEvent, getByTestId, getByText } from '@testing-library/react'
import { Button } from '../button/Button'
import { Dialog } from './Dialog'

const TestComponent = () => {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <>
            <Button data-testid="test-b" label="Show" icon="pi pi-external-link" onClick={() => setDisplayBasic(true)}>Click</Button>
            <Button data-testid="test-button" onClick={() => setCount(prevState => prevState + 1)}></Button>
            <p data-testid="test-p">{count}</p>
            {displayBasic && <p data-testid="test">shows</p>}
            <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} onHide={() => setDisplayBasic(false)}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Dialog>
        </>
    )
}


describe('Dialog Component', () => {
    test('should display the Dialog', () => {
        const { container, getByTestId, asFragment, getByText } = render(<TestComponent />)
        const firstRender = asFragment()

        fireEvent.click(getByTestId('test-b'));
        fireEvent.click(getByTestId('test-button'));

        // console.log(getByTestId('test-p').innerHTML);

    })
})