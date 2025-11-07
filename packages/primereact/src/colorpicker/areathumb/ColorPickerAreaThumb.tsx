'use client';
import { Component } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { useColorPickerContext } from '../ColorPicker.context';
import { defaultAreaThumbProps } from './ColorPickerAreaThumb.props';

export const ColorPickerAreaThumb = withComponent({
    name: 'ColorPickerAreaThumb',
    defaultProps: defaultAreaThumbProps,
    setup() {
        const colorpicker = useColorPickerContext();

        return { colorpicker };
    },
    render(instance) {
        const { props, ptmi, colorpicker } = instance;

        const disabled = colorpicker?.props.disabled;

        const rootProps = mergeProps(
            {
                className: colorpicker?.cx('areaThumb', { disabled }),
                onKeyDown: colorpicker?.handleAreaKeyDown,
                role: 'slider',
                tabIndex: disabled ? -1 : 0,
                'aria-disabled': disabled,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
                'aria-valuenow': colorpicker?.areaValue?.getChannelValue(colorpicker?.areaChannels.xChannel) ?? 0,
                'aria-label': `${colorpicker?.areaChannels.xChannel} and ${colorpicker?.areaChannels.yChannel}`,
                'aria-roledescription': '2d slider',
                'aria-valuetext': `${colorpicker?.areaChannels.xChannel} ${colorpicker?.areaValue.getChannelValue(colorpicker?.areaChannels.xChannel)}, ${colorpicker?.areaChannels.yChannel} ${colorpicker?.areaValue.getChannelValue(colorpicker?.areaChannels.yChannel)}`
            },
            colorpicker?.ptm('areaThumb'),
            ptmi('root')
        );

        return <Component instance={instance} attrs={rootProps} children={props.children} />;
    }
});

// <div data-scope="color-picker" data-part="area-thumb" id="color-picker:_r_0_:area-thumb" dir="ltr" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="52" aria-label="saturation and brightness" aria-roledescription="2d slider" aria-valuetext="saturation 52, brightness 10" class="colorPicker__areaThumb css-u4jt6x" style="position: absolute; left: 52%; top: 90%; transform: translate(-50%, -50%); touch-action: none; forced-color-adjust: none; --color: hsla(51.76, 35.14%, 7.4%, 1); background: rgb(26, 24, 12);"></div>
