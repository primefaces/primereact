'use client';

import { Button } from 'primereact/button';

export default function ButtonDemo() {
    return (
        <div className="flex justify-center">
            <Button
                unstyled
                pt-root-className="bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2 text-white text-lg font-bold"
            >
                Search
                <i className="pi pi-search !text-lg !font-bold" />
            </Button>
        </div>
    );
}
