import * as React from 'react';
import { ColorPickerAreaProps, ColorPickerEyeDropperProps, ColorPickerInputProps, ColorPickerRootProps, ColorPickerSliderProps, ColorPickerSwatchProps } from '@primereact/types/shared/colorpicker';
import { ColorPicker as ColorPickerPrime } from 'primereact/colorpicker';
import { cn } from '@/components/ui/utils';
import { inputTextVariants } from '@/components/ui/inputtext';

function ColorPicker({ ...props }: ColorPickerRootProps) {
    return <ColorPickerPrime.Root {...props} />;
}

function ColorPickerArea({ className, ...props }: ColorPickerAreaProps) {
    return (
        <ColorPickerPrime.Area className={cn('aspect-4/3 relative rounded-md min-w-3xs', className)} {...props}>
            <ColorPickerPrime.AreaBackground className="[background:var(--area-gradient)] size-full rounded-[inherit] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset]" />
            <ColorPickerPrime.AreaThumb className="[background:var(--thumb-background)] size-4 absolute top-(--thumb-position-top) left-(--thumb-position-left) -translate-y-1/2 -translate-x-1/2 border-2 border-white rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
        </ColorPickerPrime.Area>
    );
}

function ColorPickerSlider({ className, ...props }: ColorPickerSliderProps) {
    return (
        <ColorPickerPrime.Slider className={cn('relative rounded-sm data-[orientation=vertical]:w-4 data-[orientation=horizontal]:h-4', className)} {...props}>
            <ColorPickerTransparencyGrid />
            <ColorPickerPrime.SliderTrack className="rounded-[inherit] [background:var(--slider-background)] absolute top-0 left-0 size-full z-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset]" />
            <ColorPickerPrime.SliderThumb className="absolute aspect-square data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full bg-(--thumb-background) border-2 border-white rounded-full z-3 top-(--thumb-position-top) left-(--thumb-position-left) -translate-x-1/2 -translate-y-1/2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
        </ColorPickerPrime.Slider>
    );
}

function ColorPickerSwatch({ className, ...props }: ColorPickerSwatchProps) {
    return (
        <ColorPickerPrime.Swatch className={cn('relative rounded-sm size-10 bg-white', className)} {...props}>
            <ColorPickerTransparencyGrid />
            <ColorPickerPrime.SwatchBackground className="absolute z-2 rounded-[inherit] size-full top-0 left-0 [background:var(--swatch-background)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.1)_inset]" />
        </ColorPickerPrime.Swatch>
    );
}

function ColorPickerTransparencyGrid({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <ColorPickerPrime.TransparencyGrid
            className={cn(
                'absolute rounded-[inherit] top-0 left-0 size-full z-1 bg-white bg-[conic-gradient(rgb(238,238,238)_0deg,rgb(238,238,238)_25%,transparent_0deg,transparent_50%,rgb(238,238,238)_0deg,rgb(238,238,238)_75%,transparent_0deg)] bg-size-[0.5rem_0.5rem]',
                className
            )}
            {...props}
        />
    );
}

function ColorPickerInput({ className, ...props }: ColorPickerInputProps) {
    return <ColorPickerPrime.Input className={inputTextVariants({ className })} {...props} />;
}

function ColorPickerEyeDropper({ ...props }: ColorPickerEyeDropperProps) {
    return <ColorPickerPrime.EyeDropper {...props} />;
}

export { ColorPicker, ColorPickerArea, ColorPickerEyeDropper, ColorPickerInput, ColorPickerSlider, ColorPickerSwatch, ColorPickerTransparencyGrid };
