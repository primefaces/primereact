'use client';
import { usePanel } from '@primereact/headless/panel';
import { Panel } from 'primereact/panel';
import { useEffect, useRef } from 'react';

export default function Home() {
    const panelRef = useRef(null);
    const { isVisible, toggle } = usePanel();

    useEffect(() => {
        console.log(panelRef.current);
    }, []);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <section>
                    <h1 className="text-4xl font-bold">usePanel Headless</h1>
                    <div>
                        <div>Header Content</div>
                        <div>
                            <div>Additional Content Here</div>
                        </div>
                        <div>Footer Content</div>
                    </div>
                </section>

                <section>
                    <h1 className="text-4xl font-bold">Panel Component</h1>
                    <Panel ref={panelRef}>
                        <Panel.Header>Header Content</Panel.Header>
                        <Panel.Content>
                            <div>Additional Content Here</div>
                        </Panel.Content>
                        <Panel.Footer>Footer Content</Panel.Footer>
                    </Panel>
                </section>
            </main>
        </div>
    );
}
