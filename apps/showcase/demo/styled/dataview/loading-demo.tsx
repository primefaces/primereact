'use client';
import { Table } from '@primeicons/react';
import { Bars } from '@primeicons/react/bars';
import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebuttongroup';
import { Skeleton } from '@primereact/ui/skeleton';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import { DataView } from 'primereact/dataview';
import * as React from 'react';

export default function LayoutDemo() {
    const [value, setValue] = React.useState<string>('grid');

    const listLayout = () => {
        return (
            <div className="flex flex-col">
                {Array.from({ length: 6 }, (_, i) => (
                    <div
                        key={i}
                        className={`flex flex-col xl:flex-row xl:items-start p-6 gap-6 ${i !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                    >
                        <Skeleton className="!w-9/12 sm:!w-64 xl:!w-40 !h-24 mx-auto" />
                        <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-6">
                            <div className="flex flex-col items-center sm:items-start gap-4">
                                <Skeleton width="8rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" />

                                <div className="flex items-center gap-4">
                                    <Skeleton width="6rem" height="1rem" />
                                    <Skeleton width="3rem" height="1rem" />
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2">
                                <Skeleton width="4rem" height="2rem" />
                                <Skeleton size="3rem" shape="circle" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const gridLayout = () => {
        return (
            <div className="grid grid-cols-12 gap-4">
                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className="col-span-12 sm:col-span-6 xl:col-span-4 p-2">
                        <div className="p-6 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <Skeleton width="6rem" height="2rem" />
                                <Skeleton width="3rem" height="1rem" />
                            </div>
                            <div className="flex flex-col items-center gap-4 py-8">
                                <Skeleton width="75%" height="10rem" />
                                <Skeleton width="8rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" />
                            </div>
                            <div className="flex items-center justify-between">
                                <Skeleton width="4rem" height="2rem" />
                                <Skeleton width="6rem" height="1rem" shape="circle" size="3rem" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const list = listLayout();
    const grid = gridLayout();

    return (
        <div>
            <DataView>
                <div className="flex justify-end border-b border-surface-200 dark:border-surface-700 pb-4">
                    <ToggleButtonGroup
                        value={value}
                        onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setValue(e.value as string)}
                        allowEmpty={false}
                    >
                        <ToggleButton.Root value="list">
                            <ToggleButton.Indicator>
                                <Bars></Bars>
                            </ToggleButton.Indicator>
                        </ToggleButton.Root>
                        <ToggleButton.Root value="grid">
                            <ToggleButton.Indicator>
                                <Table />
                            </ToggleButton.Indicator>
                        </ToggleButton.Root>
                    </ToggleButtonGroup>
                </div>
                {value === 'list' ? list : grid}
            </DataView>
        </div>
    );
}
