import { Slider } from '@primereact/ui/slider';

export default function StepDemo() {
    return (
        <Slider.Root defaultValue={20} step={20} className="max-w-3xs mx-auto w-full">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
        </Slider.Root>
    );
}
