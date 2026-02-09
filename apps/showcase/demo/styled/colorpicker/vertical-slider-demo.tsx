import { ColorPicker } from '@primereact/ui/colorpicker';

function VerticalSliderDemo() {
    return (
        <div className="flex items-center justify-center">
            <ColorPicker.Root format="hsba">
                <div className="flex gap-4 max-w-md w-full mx-auto">
                    <ColorPicker.Area className="flex-1">
                        <ColorPicker.AreaBackground />
                        <ColorPicker.AreaThumb />
                    </ColorPicker.Area>
                    <ColorPicker.Slider orientation="vertical">
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SliderTrack />
                        <ColorPicker.SliderThumb />
                    </ColorPicker.Slider>
                    <ColorPicker.Slider channel="saturation" orientation="vertical">
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SliderTrack />
                        <ColorPicker.SliderThumb />
                    </ColorPicker.Slider>
                    <ColorPicker.Slider channel="brightness" orientation="vertical">
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SliderTrack />
                        <ColorPicker.SliderThumb />
                    </ColorPicker.Slider>
                    <ColorPicker.Slider channel="alpha" orientation="vertical">
                        <ColorPicker.TransparencyGrid />
                        <ColorPicker.SliderTrack />
                        <ColorPicker.SliderThumb />
                    </ColorPicker.Slider>
                </div>
            </ColorPicker.Root>
        </div>
    );
}

export default VerticalSliderDemo;
