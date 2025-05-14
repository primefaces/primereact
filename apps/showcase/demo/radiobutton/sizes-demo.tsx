import { RadioButton } from 'primereact/radiobutton';

export default function SizesDemo() {
    return (
        <div className="card flex justify-center">
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_small" size="small" />
                    <label htmlFor="size_small" className="text-sm">
                        Small
                    </label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_normal" />
                    <label htmlFor="size_normal">Normal</label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_large" size="large" />
                    <label htmlFor="size_large" className="text-lg">
                        Large
                    </label>
                </div>
            </div>
        </div>
    );
}
