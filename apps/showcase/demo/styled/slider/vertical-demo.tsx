import { Slider } from '@primereact/ui/slider';

export default function VerticalDemo() {
    return (
        <div className="flex justify-center h-56 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <Slider.Root defaultValue={50} orientation="vertical" key={index}>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider.Root>
            ))}
        </div>
    );
}
