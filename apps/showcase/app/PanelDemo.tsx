'use client';
import { usePanel } from '@primereact/headless/panel';
import { cn } from '@primeuix/utils';
import { Panel } from 'primereact/panel';
import { twMerge } from 'tailwind-merge';

export const twCn = (...args: unknown[]) => twMerge(cn(...args));

export default function PanelDemo() {
    const { state, onButtonClick, props } = usePanel({ toggleable: true });

    const classNames = {
        root: 'border border-surface-200 dark:border-surface-700 rounded-md bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0',
        header: twCn('flex justify-between items-center p-[1.125rem]', {
            'py-[0.375rem] px-[1.125rem]': props.toggleable
        }),
        content: twCn('pt-0 pb-[1.125rem] px-[1.125rem]', {
            hidden: state.collapsed
        }),
        footer: 'pt-0 pb-[1.125rem] px-[1.125rem]'
    };

    return (
        <>
            <section className="w-full">
                <h1 className="text-4xl font-bold">usePanel</h1>

                <div className={classNames.root}>
                    <div className={classNames.header}>
                        Header Content
                        <button type="button" onClick={onButtonClick}>
                            Collapse
                        </button>
                    </div>
                    <div className={classNames.content}>
                        <div>Additional Content Here</div>
                    </div>
                    <div className={classNames.footer}>Footer Content</div>
                </div>
            </section>

            <section>
                <h1 className="text-4xl font-bold">Panel Component</h1>

                <Panel toggleable>
                    <Panel.Header>
                        <Panel.Title>Header Content</Panel.Title>
                        <Panel.HeaderActions>
                            <Panel.Collapse>Collapse</Panel.Collapse>
                        </Panel.HeaderActions>
                    </Panel.Header>
                    <Panel.Content>
                        <div>Additional Content Here</div>
                    </Panel.Content>
                    <Panel.Footer>Footer Content</Panel.Footer>
                </Panel>
            </section>
        </>
    );
}
