import { Slider } from '@primereact/ui/slider';

export default function SliderPTDemo() {
    return (
        <Slider.Root defaultValue={50} className="w-56">
            <Slider.Range />
            <Slider.Thumb />
        </Slider.Root>
    );
}
