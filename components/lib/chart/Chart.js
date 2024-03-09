import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useUnmountEffect } from '../hooks/Hooks';
import { ChartBase } from './ChartBase';

// GitHub #3059 wrapper if loaded by script tag
const ChartJS = (function () {
    try {
        return Chart;
    } catch {
        return null;
    }
})();

const PrimeReactChart = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ChartBase.getProps(inProps, context);

        const { ptm, cx, sx, isUnstyled } = ChartBase.setMetaData({
            props
        });

        useHandleStyle(ChartBase.css.styles, isUnstyled, { name: 'chart' });
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
            } else {
                import('chart.js/auto').then((module) => {
                    destroyChart();

                    // In case that the Chart component has been unmounted during asynchronous loading of ChartJS,
                    // the canvasRef will not be available anymore, and no Chart should be created.
                    if (!canvasRef.current) {
                        return;
                    }

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
        };

        const destroyChart = () => {
            if (chartRef.current) {
                chartRef.current.destroy();
                chartRef.current = null;
            }
        };

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

        const title = props.options && props.options.plugins && props.options.plugins.title && props.options.plugins.title.text;
        const ariaLabel = props.ariaLabel || title;
        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: sx('root'),
                className: cx('root')
            },
            ChartBase.getOtherProps(props),
            ptm('root')
        );
        const canvasProps = mergeProps(
            {
                ref: canvasRef,
                width: props.width,
                height: props.height,
                role: 'img',
                'aria-label': ariaLabel
            },
            ptm('canvas')
        );

        return (
            <div {...rootProps}>
                <canvas {...canvasProps}></canvas>
            </div>
        );
    }),
    (prevProps, nextProps) => prevProps.data === nextProps.data && prevProps.options === nextProps.options && prevProps.type === nextProps.type
);

PrimeReactChart.displayName = 'Chart';

export { PrimeReactChart as Chart };
