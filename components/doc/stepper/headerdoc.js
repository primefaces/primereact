import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Stepper } from '@/components/lib/stepper/Stepper';
import { StepperPanel } from '@/components/lib/stepperpanel/StepperPanel';
import { useRef } from 'react';

export function HeaderDoc(props) {
    const stepperRef = useRef([]);

    const code = {
        basic: `
<h5>Position top</h5>
<Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="top">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
<h5>Position right</h5>
<Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="right">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
<h5>Position left</h5>
<Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="left">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
<h5>Position bottom</h5>
<Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="bottom">
    <StepperPanel header="Header I"></StepperPanel>
    <StepperPanel header="Header II"></StepperPanel>
    <StepperPanel header="Header III"></StepperPanel>
</Stepper>
        `,
        javascript: `
import { useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
        <h5>Position top</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="top">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position right</h5>
        <Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="right">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position left</h5>
        <Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="left">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position bottom</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="bottom">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
    );
}
        `,
        typescript: `
import { useRef } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const stepperRef = useRef(null);

    return (
        <h5>Position top</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="top">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position right</h5>
        <Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="right">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position left</h5>
        <Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="left">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
        <h5>Position bottom</h5>
        <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="bottom">
            <StepperPanel header="Header I"></StepperPanel>
            <StepperPanel header="Header II"></StepperPanel>
            <StepperPanel header="Header III"></StepperPanel>
        </Stepper>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Header position of the stepper can be customized using the <i>headerPosition</i> property. Default value is <i>right</i>.
                </p>
            </DocSectionText>
            <div className="card flex flex-column justify-content-center">
                <h5>Position top</h5>
                <Stepper ref={(ref) => (stepperRef.current[0] = ref)} headerPosition="top">
                    <StepperPanel header="Header I"></StepperPanel>
                    <StepperPanel header="Header II"></StepperPanel>
                    <StepperPanel header="Header III"></StepperPanel>
                </Stepper>
                <h5>Position right</h5>
                <Stepper ref={(ref) => (stepperRef.current[1] = ref)} headerPosition="right">
                    <StepperPanel header="Header I"></StepperPanel>
                    <StepperPanel header="Header II"></StepperPanel>
                    <StepperPanel header="Header III"></StepperPanel>
                </Stepper>
                <h5>Position left</h5>
                <Stepper ref={(ref) => (stepperRef.current[2] = ref)} headerPosition="left">
                    <StepperPanel header="Header I"></StepperPanel>
                    <StepperPanel header="Header II"></StepperPanel>
                    <StepperPanel header="Header III"></StepperPanel>
                </Stepper>
                <h5>Position bottom</h5>
                <Stepper ref={(ref) => (stepperRef.current[3] = ref)} headerPosition="bottom">
                    <StepperPanel header="Header I"></StepperPanel>
                    <StepperPanel header="Header II"></StepperPanel>
                    <StepperPanel header="Header III"></StepperPanel>
                </Stepper>
                <div className="flex pt-4 justify-content-between">
                    <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.forEach((ref) => ref.prevCallback())} />
                    <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.forEach((ref) => ref.nextCallback())} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
