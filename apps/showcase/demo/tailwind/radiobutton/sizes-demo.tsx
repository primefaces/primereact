import { RadioButton } from '@/components/ui/radiobutton';
import { Label } from '@primereact/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_small" name="size" size="small" />
                    <Label htmlFor="size_small" className="text-sm">
                        Small
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_normal" name="size" />
                    <Label htmlFor="size_normal" className="">
                        Normal
                    </Label>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_large" name="size" size="large" />
                    <Label htmlFor="size_large" className="text-lg">
                        Large
                    </Label>
                </div>
            </div>
        </div>
    );
}
