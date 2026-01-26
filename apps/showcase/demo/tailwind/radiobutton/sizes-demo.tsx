import { RadioButton } from '@/components/ui/radiobutton';
import { Label } from '@primereact/ui/label';

export default function SizesDemo() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_small" name="size" size="small" />
                    <Label.Root htmlFor="size_small" className="text-sm">
                        Small
                    </Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_normal" name="size" />
                    <Label.Root htmlFor="size_normal" className="">
                        Normal
                    </Label.Root>
                </div>
                <div className="flex items-center gap-2">
                    <RadioButton inputId="size_large" name="size" size="large" />
                    <Label.Root htmlFor="size_large" className="text-lg">
                        Large
                    </Label.Root>
                </div>
            </div>
        </div>
    );
}
