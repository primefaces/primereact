'use client';
import { usePanel } from '@primereact/headless/panel';
import { cn } from '@primeuix/utils';
import { Panel } from 'primereact/panel';
import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Home() {
    const panelRef = useRef(null);
    const { state, onButtonClick, props } = usePanel({ toggleable: true });

    useEffect(() => {
        console.log(panelRef.current);
    }, []);

    const panelClassNames = {
        root: 'border border-surface-200 dark:border-surface-700 rounded-md bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0',
        header: twMerge(
            cn('flex justify-between items-center p-[1.125rem]', {
                'py-[0.375rem] px-[1.125rem]': props.toggleable
            })
        ),
        content: cn('pt-0 pb-[1.125rem] px-[1.125rem]', {
            hidden: state.collapsed
        }),
        footer: 'pt-0 pb-[1.125rem] px-[1.125rem]'
    };

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <section>
                    <h1 className="text-4xl font-bold">usePanel</h1>
                    <div className={panelClassNames.root}>
                        <div className={panelClassNames.header}>
                            Header Content
                            <button onClick={onButtonClick}>Collapse</button>
                        </div>
                        <div className={panelClassNames.content}>
                            <div>Additional Content Here</div>
                        </div>
                        <div className={panelClassNames.footer}>Footer Content</div>
                    </div>
                </section>

                <section>
                    <h1 className="text-4xl font-bold">Panel Component</h1>
                    <Panel ref={panelRef} toggleable>
                        <Panel.Header>
                            Header Content
                            <Panel.Collapse>Collapse</Panel.Collapse>
                        </Panel.Header>
                        <Panel.Content>
                            <div>Additional Content Here</div>
                        </Panel.Content>
                        <Panel.Footer>Footer Content</Panel.Footer>
                    </Panel>
                </section>
            </main>
            <span className="hidden">Hidden</span>
        </div>
    );
}
