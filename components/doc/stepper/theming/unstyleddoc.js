import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export const UnstyledDoc = (props) => {
    const code = {
        basic: `
<Stepper ref={stepperRef}>
    <StepperPanel header="Step 1">
        <p>Content of Step 1</p>
        <Button label="Next" onClick={() => stepperRef.current.nextCallback()} />
    </StepperPanel>
    <StepperPanel header="Step 2">
        <p>Content of Step 2</p>
        <Button label="Back" onClick={() => stepperRef.current.prevCallback()} className="mr-2" />
        <Button label="Next" onClick={() => stepperRef.current.nextCallback()} />
    </StepperPanel>
    <StepperPanel header="Step 3">
        <p>Content of Step 3</p>
        <Button label="Back" onClick={() => stepperRef.current.prevCallback()} />
    </StepperPanel>
</Stepper>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Theming is implemented with <strong>pass-through properties</strong> in unstyled mode.
                    This allows you to apply your own styling or integrate with Tailwind.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
};
