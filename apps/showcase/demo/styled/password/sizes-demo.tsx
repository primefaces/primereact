import { Password } from '@primereact/ui/password';

export default function SizesDemo() {
    return (
        <div className="flex flex-col items-center gap-4">
            <Password size="small" placeholder="Small" />
            <Password placeholder="Normal" />
            <Password size="large" placeholder="Large" />
        </div>
    );
}
