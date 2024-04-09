import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps } from '../hooks/Hooks';
import { ObjectUtils, classNames } from '../utils/Utils';
import { MeterGroupBase } from './MeterGroupBase';

export const MeterGroup = (inProps) => {
    const context = React.useContext(PrimeReactContext);
    const props = MeterGroupBase.getProps(inProps, context);
    const { values, min, max, orientation, labelPosition, start, end, meter, labelList } = props;

    const mergeProps = useMergeProps();
    const { ptm, cx, isUnstyled } = MeterGroupBase.setMetaData({
        props,
        ...props.__parentMetadata,
        context: {
            disabled: props.disabled
        }
    });

    useHandleStyle(MeterGroupBase.css.styles, isUnstyled, { name: 'progressbar' });

    let totalPercent = 0;
    let precentages = [];

    values.map((item) => {
        totalPercent = totalPercent + item.value;
        precentages.push(Math.round((item.value / totalPercent) * 100));
    });

    const calculatePercentage = (meterValue = 0) => {
        const percentageOfItem = ((meterValue - min) / (max - min)) * 100;

        return Math.round(Math.max(0, Math.min(100, percentageOfItem)));
    };

    const rootProps = mergeProps(
        {
            className: classNames(props.className, cx('root', { orientation }))
        },
        MeterGroupBase.getOtherProps(props),
        ptm('root')
    );

    const createMeters = () => {
        const meters = values.map((item, index) => {
            const calculatedPercantage = calculatePercentage(item.value);
            const meterInlineStyles = {
                backgroundColor: item.color,
                width: orientation === 'horizontal' ? calculatedPercantage + '%' : 'auto',
                height: orientation === 'vertical' ? calculatedPercantage + '%' : 'auto'
            };

            const meterProps = mergeProps(
                {
                    className: cx('meter'),
                    style: meterInlineStyles
                },
                ptm('meter')
            );

            if (meter || item.meterTemplate) {
                const meterTemplateProps = mergeProps(
                    {
                        className: cx('meter')
                    },
                    ptm('meter')
                );

                return ObjectUtils.getJSXElement(item.meterTemplate || meter, { ...item, percentage: calculatedPercantage, index }, meterTemplateProps);
            }

            return <span key={index} {...meterProps} />;
        });

        const meterContainerProps = mergeProps(
            {
                className: cx('metercontainer')
            },
            ptm('metercontainer')
        );

        return <div {...meterContainerProps}>{meters}</div>;
    };

    const createLabelList = () => {
        const labelListProps = mergeProps(
            {
                className: cx('labellist')
            },
            ptm('labellist')
        );

        const labelItemProps = mergeProps(
            {
                className: cx('labellistitem')
            },
            ptm('labellistitem')
        );

        const labelProps = mergeProps(
            {
                className: cx('label')
            },
            ptm('label')
        );

        return (
            <ol {...labelListProps}>
                {values.map((item, index) => {
                    const labelIconProps = mergeProps(
                        {
                            className: classNames(cx('labelicon'), item.icon),
                            style: { color: item.color }
                        },
                        ptm('labelicon')
                    );

                    const labelListIconProps = mergeProps(
                        {
                            className: cx('labellisttype'),
                            style: { backgroundColor: item.color }
                        },
                        ptm('labellisttype')
                    );

                    const labelIcon = item.icon ? <i {...labelIconProps} /> : <span {...labelListIconProps} />;

                    return (
                        <li key={index} {...labelItemProps}>
                            {labelIcon}
                            <span {...labelProps}>
                                {item?.label} {item?.value && `(${item?.value}%)`}
                            </span>
                        </li>
                    );
                })}
            </ol>
        );
    };

    const templateProps = {
        totalPercent,
        precentages,
        values
    };

    const labelListContent = labelList || createLabelList();
    const labelElement = ObjectUtils.getJSXElement(labelListContent, { values, totalPercent });

    return (
        <div {...rootProps} role="meter" aria-valuemin={min} aria-valuemax={max} aria-valuenow={totalPercent}>
            {labelPosition === 'start' && labelElement}
            {start && ObjectUtils.getJSXElement(start, templateProps)}
            {createMeters()}
            {end && ObjectUtils.getJSXElement(end, templateProps)}
            {labelPosition === 'end' && labelElement}
        </div>
    );
};
