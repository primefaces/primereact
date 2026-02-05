import { Slider } from '@primereact/ui/slider';

export default function ThumbsDistanceDemo() {
    return (
        <Slider.Root defaultValue={[20, 80]} className="max-w-3xs mx-auto w-full" minStepsBetweenThumbs={20}>
            <Slider.Track>
                <Slider.Range />
            </Slider.Track>
            <Slider.Thumb index={0} />
            <Slider.Thumb index={1} />
        </Slider.Root>
    );
}
