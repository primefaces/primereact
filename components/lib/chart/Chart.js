import * as React from 'react';
import { useUnmountEffect } from '../hooks/Hooks';
import { classNames, ObjectUtils } from '../utils/Utils';

export const Chart = React.memo(React.forwardRef((props, ref) => {
    const chartRef = React.useRef(null);
    const canvasRef = React.useRef(null);

    const initChart = () => {
        import('chart.js/auto').then((module) => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }

            if (module && module.default) {
                chartRef.current = new module.default(canvasRef.current, {
                    type: props.type,
                    data: props.data,
                    options: props.options,
                    plugins: props.plugins
                });
            }
        });
    }

    React.useImperativeHandle(ref, () => ({
        getCanvas: () => canvasRef.current,
        getChart: () => chartRef.current,
        getBase64Image: () => chartRef.current.toBase64Image(),
        generateLegend: () => chartRef.current && chartRef.current.generateLegend(),
        refresh: () => chartRef.current && chartRef.current.update()
    }));

    React.useEffect(() => {
        initChart();
    });

    useUnmountEffect(() => {
        if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
        }
    });

    const otherProps = ObjectUtils.findDiffKeys(props, Chart.defaultProps);
    const className = classNames('p-chart', props.className);
    const style = Object.assign({ width: props.width, height: props.height }, props.style);

    return (
        <div id={props.id} style={style} className={className} {...otherProps}>
            <canvas ref={canvasRef} width={props.width} height={props.height}></canvas>
        </div>
    );
}), (prevProps, nextProps) => prevProps.data === nextProps.data && prevProps.options === nextProps.options && prevProps.type === nextProps.type);

Chart.displayName = 'Chart';
Chart.defaultProps = {
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
