'use client';
import { Switch } from '@/components/ui/switch';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Switch className="group">
                <i className="pi pi-times text-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-surface-400 dark:text-surface-600 group-data-checked:opacity-0 opacity-100 transition-opacity duration-200" />
                <i className="pi pi-check text-[10px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-primary group-data-checked:opacity-100 opacity-0 transition-opacity duration-200" />
            </Switch>
        </div>
    );
}
