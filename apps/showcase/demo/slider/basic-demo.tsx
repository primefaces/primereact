import { Slider } from 'primereact/slider';

export default function BasicDemo() {
    return (
        <div className="card flex justify-center">
            <Slider defaultValue={50} className="w-56">
                <Slider.Range />
                <Slider.Thumb />
            </Slider>
        </div>
    );
}
