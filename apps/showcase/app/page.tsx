'use client';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { useEffect, useRef } from 'react';

export default function Home() {
    const panelRef = useRef(null);

    useEffect(() => {
        console.log(panelRef.current);
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Card>
                    <Panel id="parent">
                        <Panel ref={panelRef} id="child">
                            AA
                        </Panel>
                    </Panel>
                </Card>
            </main>
        </div>
    );
}
