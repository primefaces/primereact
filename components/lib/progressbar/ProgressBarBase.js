import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const classes = {
    root: ({ props }) => (props.mode === 'indeterminate' ? classNames('p-progressbar p-component p-progressbar-indeterminate') : classNames('p-progressbar p-component p-progressbar-determinate')),
    value: 'p-progressbar-value p-progressbar-value-animate',
    label: 'p-progressbar-label',
    container: 'p-progressbar-indeterminate-container'
};

const styles = `
@layer primereact {
  .p-progressbar {
      position: relative;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-value {
      height: 100%;
      width: 0%;
      position: absolute;
      display: none;
      border: 0 none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
  }
  
  .p-progressbar-determinate .p-progressbar-label {
      display: inline-flex;
  }
  
  .p-progressbar-determinate .p-progressbar-value-animate {
      transition: width 1s ease-in-out;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background-color: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
                animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
  }
  
  .p-progressbar-indeterminate .p-progressbar-value::after {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
              animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      -webkit-animation-delay: 1.15s;
              animation-delay: 1.15s;
  }
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}
@keyframes p-progressbar-indeterminate-anim {
  0% {
    left: -35%;
    right: 100%; }
  60% {
    left: 100%;
    right: -90%; }
  100% {
    left: 100%;
    right: -90%; }
}

@-webkit-keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
@keyframes p-progressbar-indeterminate-anim-short {
  0% {
    left: -200%;
    right: 100%; }
  60% {
    left: 107%;
    right: -8%; }
  100% {
    left: 107%;
    right: -8%; }
}
`;

const inlineStyles = {
    value: ({ props }) => {
        const valueWidth = Math.max(props.value, 2); // min 2 to display full label of 0% and 1%
        const valueColor = props.value ? props.color : 'transparent';

        return props.mode === 'indeterminate' ? { backgroundColor: props.color } : { width: valueWidth + '%', display: 'flex', backgroundColor: valueColor };
    }
};

export const ProgressBarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'ProgressBar',
        __parentMetadata: null,
        id: null,
        value: null,
        showValue: true,
        unit: '%',
        style: null,
        className: null,
        mode: 'determinate',
        displayValueTemplate: null,
        color: null,
        children: undefined
    },
    css: {
        classes,
        styles,
        inlineStyles
    }
});
