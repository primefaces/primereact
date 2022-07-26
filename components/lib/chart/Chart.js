import * as React from 'react';
import { useUnmountEffect } from '../hooks/Hooks';
import { classNames, ObjectUtils } from '../utils/Utils';

// GitHub #3059 wrapper if loaded by script tag
const ChartJS = function() {try {return Chart;} catch {return null;}}();

const PrimeReactChart = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const chartRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    const initChart = () => {
        destroyChart();

        const configuration = {
            type: props.type,
            data: props.data,
            options: props.options,
            plugins: props.plugins
        };
        if (ChartJS) {
            // GitHub #3059 loaded by script only
            chartRef.current = new ChartJS(canvasRef.current, configuration);
        }
        else {
            import('chart.js/auto').then((module) => {
                destroyChart();
                if (module) {
                    if (module.default) {
                         // WebPack
                        chartRef.current = new module.default(canvasRef.current, configuration);
                    } else {
                        // ParcelJS
                        chartRef.current = new module(canvasRef.current, configuration);
                    }
                }
            });
        }    
    }

    const destroyChart = () => {
        if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
        }
    }

    React.useImperativeHandle(ref, () => ({
        props,
        getCanvas: () => canvasRef.current,
        getChart: () => chartRef.current,
        getBase64Image: () => chartRef.current.toBase64Image(),
        getElement: () => elementRef.current,
        generateLegend: () => chartRef.current && chartRef.current.generateLegend(),
        refresh: () => chartRef.current && chartRef.current.update()
    }));

    React.useEffect(() => {
        initChart();
    });

    useUnmountEffect(() => {
        destroyChart();
    });

    const otherProps = ObjectUtils.findDiffKeys(props, PrimeReactChart.defaultProps);
    const className = classNames('p-chart', props.className);
    const style = Object.assign({ width: props.width, height: props.height }, props.style);

    return (
        <div id={props.id} ref={elementRef} style={style} className={className} {...otherProps}>
            <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
        </div>
    );
}), (prevProps, nextProps) => prevProps.data === nextProps.data && prevProps.options === nextProps.options && prevProps.type === nextProps.type);

PrimeReactChart.displayName = 'Chart';
PrimeReactChart.defaultProps = {
    __TYPE: 'Chart',
    id: null,
    type: null,
    data: null,
    options: null,
    plugins: null,
    width: null,
    height: null,
    style: null,
    className: null
}

export { PrimeReactChart as Chart };
