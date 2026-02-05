import { Slider } from '@primereact/ui/slider';

export default function SliderPTDemo() {
    return (
        <Slider.Root defaultValue={50} className="w-56">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
        </Slider.Root>
    );
}
