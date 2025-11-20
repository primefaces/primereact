'use client';
import { Component } from '@primereact/core/component';
import { useColorPicker } from '@primereact/headless/colorpicker';
import { styles } from '@primereact/styles/colorpicker';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { ColorPickerProvider } from './ColorPicker.context';
import { defaultProps } from './ColorPicker.props';
import { ColorPickerArea } from './area';
import { ColorPickerAreaBackground } from './areabackground';
import { ColorPickerAreaThumb } from './areathumb';
import { ColorPickerEyeDropper } from './eyedropper/ColorPickerEyeDropper';
import { ColorPickerInput } from './input/ColorPickerInput';
import { ColorPickerSlider } from './slider';
import { ColorPickerSliderThumb } from './sliderthumb';
import { ColorPickerSliderTrack } from './slidertrack';
import { ColorPickerSwatch } from './swatch';
import { ColorPickerSwatchBackground } from './swatchbackground';
import { ColorPickerTransparencyGrid } from './transparencygrid';

export const ColorPicker = withComponent({
    name: 'ColorPicker',
    defaultProps,
    styles,
    setup(instance) {
        const colorpicker = useColorPicker(instance.inProps);

        return colorpicker;
    },
    render(instance) {
        const { props, ptmi } = instance;

        const rootProps = mergeProps(ptmi('root'));

        return (
            <ColorPickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} as={React.Fragment} />
            </ColorPickerProvider>
        );
    },
    components: {
        Area: ColorPickerArea,
        AreaBackground: ColorPickerAreaBackground,
        AreaThumb: ColorPickerAreaThumb,
        Slider: ColorPickerSlider,
        SliderThumb: ColorPickerSliderThumb,
        SliderTrack: ColorPickerSliderTrack,
        TransparencyGrid: ColorPickerTransparencyGrid,
        Swatch: ColorPickerSwatch,
        SwatchBackground: ColorPickerSwatchBackground,
        EyeDropper: ColorPickerEyeDropper,
        Input: ColorPickerInput
    }
});
