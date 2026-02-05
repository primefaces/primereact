import { Slider } from '@primereact/ui/slider';

export default function DisabledDemo() {
    return (
        <div className="max-w-3xs w-full mx-auto space-y-12">
            <div>
                <h5 className="mb-2 text-sm font-medium">Disabled Slider</h5>
                <Slider.Root defaultValue={50} disabled>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumb />
                </Slider.Root>
            </div>

            <div>
                <h5 className="mb-2 text-sm font-medium">Disabled All Thumbs</h5>
                <Slider.Root defaultValue={[20, 80]} disabled>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumb index={0} />
                    <Slider.Thumb index={1} />
                </Slider.Root>
            </div>

            <div>
                <h5 className="mb-2 text-sm font-medium">Disabled Single Thumb</h5>
                <Slider.Root defaultValue={[20, 80]}>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumb index={0} disabled />
                    <Slider.Thumb index={1} />
                </Slider.Root>
            </div>
        </div>
    );
}
