import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { ObjectUtils } from '../utils/Utils';
import { StepperPanelBase } from './StepperPanelBase';

export const StepperPanel = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = StepperPanelBase.getProps(inProps, context);
        const elementRef = React.useRef(ref);
        const { isUnstyled } = StepperPanelBase.setMetaData({
            props
        });

        useHandleStyle(StepperPanelBase.css.styles, isUnstyled, { name: 'StepperPanel' });

        React.useEffect(() => {
            ObjectUtils.combinedRefs(elementRef, ref);
        }, [elementRef, ref]);

        return <span ref={ref}>{props.children}</span>;
    })
);

StepperPanel.displayName = 'StepperPanel';
