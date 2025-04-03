import { Checkbox } from 'primereact/checkbox';

export default function SizesDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
                <Checkbox inputId="size_small" name="size" value="Small" size="small" />
                <label htmlFor="size_small" className="text-sm">
                    Small
                </label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox inputId="size_normal" name="size" value="Normal" />
                <label htmlFor="size_normal">Normal</label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox inputId="size_large" name="size" value="Large" size="large" />
                <label htmlFor="size_large" className="text-lg">
                    Large
                </label>
            </div>
        </div>
    );
}
