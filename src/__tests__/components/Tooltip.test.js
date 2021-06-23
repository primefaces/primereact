import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Tooltip } from '../../components/tooltip/Tooltip';


const TooltipTestComponent = (props) => {

    return (
        <>
            <div data-testid="show-tooltip" data-pr-tooltip="This is a div element" data-pr-position="right" style={{ width: '50px', height: '50px', border: '1px solid black' }} />
            <Tooltip appendTo={props.appendTo} target=".customClassName" mouseTrack mouseTrackLeft={10} />
        </>
    )
}

describe('Should Component', () => {
    test('should display the Tooltip in container', async () => {
        const { container, getByTestId } = render(<TooltipTestComponent appendTo="self" />)

        expect(container.querySelector('.p-tooltip p-component')).not.toBeInTheDocument();
        fireEvent.mouseOver(getByTestId('show-tooltip'))
        waitFor(() => expect(container.querySelector('.p-tooltip p-component')).toBeInTheDocument());
    })
})