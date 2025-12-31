'use client';

import { Switch } from '@/ui/switch';

export default function TemplateDemo() {
    return (
        <div className="flex justify-center">
            <Switch>
                <i className="pi pi-star-fill text-[11px] text-surface-400 dark:text-surface-500 group-data-[p-checked=true]:text-primary"></i>
            </Switch>
        </div>
    );
}
