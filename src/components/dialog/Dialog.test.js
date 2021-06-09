import React, { useEffect, useState } from 'react'
import { render, fireEvent, screen, getByTestId, waitFor } from '@testing-library/react'
import { Button } from '../button/Button'
import { Dialog } from './Dialog'


const DialogTestComponent = (props) => {

    const [displayBasic, setDisplayBasic] = useState(false);

    return (
        <>
            <Button data-testid="test-button" label="Show" icon="pi pi-external-link" onClick={() => setDisplayBasic(true)}>Click</Button>
            <Dialog header="Dialog Header" appendTo={props.appendTo} visible={displayBasic} style={{ width: '50vw' }} onHide={() => setDisplayBasic(false)}>
                <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Dialog>
        </>
    )
}

describe('Dialog Component', () => {
    test('should display the Dialog in container', () => {
        const { container, getByTestId } = render(<DialogTestComponent appendTo="self" />)

        expect(container.querySelector('.p-dialog')).not.toBeInTheDocument();

        fireEvent.click(getByTestId('test-button'));
        expect(container.querySelector('.p-dialog')).toBeInTheDocument();
    })

    test('should display the Dialog', () => {
        const { container, getByTestId } = render(<DialogTestComponentr />)

        fireEvent.click(getByTestId('test-button'));
        expect(container.parentElement.querySelector(".p-dialog")).toBeInTheDocument();
    })
})