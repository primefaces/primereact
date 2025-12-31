import { ColorPickerAreaProps, ColorPickerEyeDropperProps, ColorPickerInputProps, ColorPickerProps, ColorPickerSliderProps, ColorPickerSwatchProps } from '@primereact/types/shared/colorpicker';
import { cn } from '@primeuix/utils';
import { ColorPicker as ColorPickerPrime } from 'primereact/colorpicker';
import * as React from 'react';
import { inputTextVariants } from '../inputtext';

function ColorPicker({ ...props }: ColorPickerProps) {
    return <ColorPickerPrime.Root {...props} />;
}

function ColorPickerArea({ className, ...props }: ColorPickerAreaProps) {
    return (
        <ColorPickerPrime.Area className={cn('aspect-4/3 max-w-96 relative rounded-lg', className)} {...props}>
            <ColorPickerPrime.AreaBackground className="[background:var(--area-gradient)] size-full rounded-lg shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px_inset]" />
            <ColorPickerPrime.AreaThumb className="[background:var(--thumb-background)] size-5 absolute top-(--thumb-position-top) left-(--thumb-position-left) -translate-y-1/2 -translate-x-1/2 border-2 border-white rounded-full" />
        </ColorPickerPrime.Area>
    );
}

function ColorPickerSlider({ className, ...props }: ColorPickerSliderProps) {
    return (
        <ColorPickerPrime.Slider className={cn('h-5 w-full relative rounded-md  ', className)} {...props}>
            <ColorPickerPrime.TransparencyGrid
                className="absolute rounded-md top-0 left-0 size-full z-1 "
                style={{
                    backgroundColor: 'white',
                    background: 'conic-gradient(rgb(238, 238, 238) 0deg, rgb(238, 238, 238) 25%, transparent 0deg, transparent 50%, rgb(238, 238, 238) 0deg, rgb(238, 238, 238) 75%, transparent 0deg)',
                    backgroundSize: '0.5rem 0.5rem'
                }}
            />
            <ColorPickerPrime.SliderTrack className="rounded-md [background:var(--slider-background)] absolute top-0 left-0 size-full z-2 shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px_inset]" />
            <ColorPickerPrime.SliderThumb className="absolute aspect-square h-full bg-(--thumb-background) border-2 border-white rounded-full z-3 top-(--thumb-position-top) left-(--thumb-position-left) -translate-x-1/2 -translate-y-1/2" />
        </ColorPickerPrime.Slider>
    );
}

function ColorPickerSwatch({ className, ...props }: ColorPickerSwatchProps) {
    return (
        <ColorPickerPrime.Swatch className={cn('relative rounded-md size-10', className)} {...props}>
            <ColorPickerPrime.TransparencyGrid
                className="absolute rounded-md top-0 left-0 size-full z-1 "
                style={{
                    backgroundColor: 'white',
                    background: 'conic-gradient(rgb(238, 238, 238) 0deg, rgb(238, 238, 238) 25%, transparent 0deg, transparent 50%, rgb(238, 238, 238) 0deg, rgb(238, 238, 238) 75%, transparent 0deg)',
                    backgroundSize: '0.5rem 0.5rem'
                }}
            />
            <ColorPickerPrime.SwatchBackground className="absolute z-2 rounded-md size-full top-0 left-0 [background:var(--swatch-background)] shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px_inset]" />
        </ColorPickerPrime.Swatch>
    );
}

function ColorPickerInput({ className, ...props }: ColorPickerInputProps) {
    return <ColorPickerPrime.Input className={inputTextVariants({ className })} {...props} />;
}

function ColorPickerEyeDropper({ ...props }: ColorPickerEyeDropperProps) {
    return <ColorPickerPrime.EyeDropper {...props} />;
}

export { ColorPicker, ColorPickerArea, ColorPickerEyeDropper, ColorPickerInput, ColorPickerSlider, ColorPickerSwatch };
