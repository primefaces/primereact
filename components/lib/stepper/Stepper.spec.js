import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { snapshot } from '../../test';
import { PrimeReactProvider } from '../api/Api';
import { Stepper } from './Stepper';
import { StepperPanel } from '../stepperpanel/StepperPanel';

function assertSelectedStep(expectedIndex) {
    const selectedStep = screen.getByRole('presentation', { current: 'step' });
    const expectedStep = screen.getByRole('list').children.item(expectedIndex);

    expect(expectedStep).toEqual(selectedStep);
}

describe('Stepper', () => {
    snapshot(
        <PrimeReactProvider>
            <Stepper />
        </PrimeReactProvider>,
        'default'
    );
    snapshot(
        <Stepper>
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>,
        'panels'
    );
    snapshot(
        <Stepper orientation="vertical">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>,
        'vertical'
    );
    snapshot(
        <Stepper headerPosition="top">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
        </Stepper>,
        'header position top'
    );
    snapshot(
        <Stepper headerPosition="right">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
        </Stepper>,
        'header position right'
    );
    snapshot(
        <Stepper headerPosition="bottom">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
        </Stepper>,
        'header position bottom'
    );
    snapshot(
        <Stepper headerPosition="left">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
        </Stepper>,
        'header position left'
    );

    test('Step should have aria step when selected', async () => {
        render(
            <Stepper>
                <StepperPanel header="Header I"></StepperPanel>
                <StepperPanel header="Header II"></StepperPanel>
                <StepperPanel header="Header III"></StepperPanel>
            </Stepper>
        );

        await userEvent.click(screen.getByRole('tab', { name: '3 Header III' }));
        assertSelectedStep(2);
    });

    test('Control active step from outside', async () => {
        render(
            <Stepper activeStep={3}>
                <StepperPanel header="Header I"></StepperPanel>
                <StepperPanel header="Header II"></StepperPanel>
                <StepperPanel header="Header III"></StepperPanel>
                <StepperPanel header="Header IV"></StepperPanel>
                <StepperPanel header="Header VI"></StepperPanel>
            </Stepper>
        );

        assertSelectedStep(3);
    });

    test('Changing step should trigger onChangeStep callback', async () => {
        const onChangeStep = jest.fn();

        render(
            <Stepper onChangeStep={onChangeStep}>
                <StepperPanel header="Header I"></StepperPanel>
                <StepperPanel header="Header II"></StepperPanel>
                <StepperPanel header="Header III"></StepperPanel>
            </Stepper>
        );

        await userEvent.click(screen.getByRole('tab', { name: '2 Header II' }));
        expect(onChangeStep).toHaveBeenCalledTimes(1);

        await userEvent.click(screen.getByRole('tab', { name: '3 Header III' }));
        expect(onChangeStep).toHaveBeenCalledTimes(2);
    });

    test('Change steps with buttons', async () => {
        const stepperRef = React.createRef(null);
        const onChangeStep = jest.fn();

        render(
            <div>
                <Stepper ref={stepperRef} onChangeStep={onChangeStep}>
                    <StepperPanel header="Header I"></StepperPanel>
                    <StepperPanel header="Header II"></StepperPanel>
                    <StepperPanel header="Header III"></StepperPanel>
                </Stepper>
                <button onClick={() => stepperRef.current.nextCallback()}>Next</button>
                <button onClick={() => stepperRef.current.previousCallback()}>Previous</button>
            </div>
        );

        const nextButton = screen.getByRole('button', { name: 'Next' });

        await userEvent.click(nextButton);

        expect(onChangeStep).toHaveBeenCalledTimes(1);

        assertSelectedStep(1);
    });
});
