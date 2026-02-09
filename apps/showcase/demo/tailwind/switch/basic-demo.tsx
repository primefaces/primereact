import { Switch } from '@/components/ui/switch';

export default function BasicDemo() {
    return (
        <label className="flex justify-center items-center gap-2">
            Off
            <Switch />
            On
        </label>
    );
}
