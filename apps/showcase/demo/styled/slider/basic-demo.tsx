import { Slider } from '@primereact/ui/slider';

export default function BasicDemo() {
    return (
        <Slider.Root defaultValue={50} className="max-w-3xs mx-auto w-full">
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb />
        </Slider.Root>
    );
}
