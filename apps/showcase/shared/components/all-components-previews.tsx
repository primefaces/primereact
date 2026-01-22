'use client';
import { ComponentPreviewType } from '@/shared/types/App.types';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { ToggleButton } from '@primereact/ui/togglebutton';
import Link from 'next/link';
import * as React from 'react';
import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebutton';
import { Button } from '@primereact/ui/button';

const TYPES = ['styled', 'tailwind'] as const;

export default function AllComponentPreviews({ components }: { components: ComponentPreviewType[] }) {
    const [search, setSearch] = React.useState('');
    const [type, setType] = React.useState<string | null>(null);

    const filteredResult = components
        .filter((component) => {
            return search === '' || component.title.toLowerCase().includes(search.toLowerCase()) || (component.description && component.description.toLowerCase().includes(search.toLowerCase()));
        })
        .filter((component) => {
            return type === null || component[type as 'styled' | 'tailwind'];
        });

    const count = Math.floor(components.length / 5) * 5;
    const roundedCount = count === components.length ? count - 5 : count;

    const issueUrl =
        `https://github.com/primefaces/primereact/issues/new` +
        `?template=BLANK_ISSUE` +
        `&labels=Type%3A%20New%20Feature` +
        `&title=${encodeURIComponent(`Component request: ${search || ''}`)}` +
        `&body=${encodeURIComponent(`### Component Request\n\n` + `**Component name:** \n` + `**Use case:** \n` + `**Design reference (optional):** \n` + `ref=website`)}`;

    return (
        <div suppressHydrationWarning className="h-full flex flex-col flex-1">
            <div className="container pt-4 xl:pt-10 pb-8">
                <h1 className="text-2xl md:text-3xl font-semibold text-surface-900 dark:text-surface-0">Components</h1>
                <div className="mt-0.5 flex flex-wrap gap-4 items-end justify-between">
                    <p className="text-surface-500 dark:text-surface-400 text-base md:text-lg max-w-156 mt-0.5 [&>span]:text-surface-950 [&>span]:dark:text-surface-0 [&>span]:font-medium">
                        Discover <span>{roundedCount}+</span> accessible UI components in <span>Tailwind</span> and <span>Styled</span> versions — built for easy customization and production use.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <ToggleButton.Group value={type} onValueChange={(e: ToggleButtonGroupValueChangeEvent) => setType(e.value as 'tailwind' | 'styled')} allowEmpty={true}>
                            {TYPES.map((item) => (
                                <ToggleButton.Root key={item} value={item}>
                                    <ToggleButton.Indicator className="capitalize">{item}</ToggleButton.Indicator>
                                </ToggleButton.Root>
                            ))}
                        </ToggleButton.Group>

                        <IconField.Root>
                            <IconField.InputIcon>
                                <i className="pi pi-search" />
                            </IconField.InputIcon>
                            <InputText value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} placeholder="Search components..." />
                        </IconField.Root>
                    </div>
                </div>
            </div>
            <div className="border-t border-(--border-color) py-12 flex-1 h-full">
                <div className="container grid grid-cols-1 min-[684px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {filteredResult.length > 0 ? (
                        filteredResult.map((component) => (
                            <div key={component.title} className="group relative overflow-hidden rounded-lg border border-(--border-color) ">
                                <div className="relative aspect-5/4 overflow-hidden flex flex-col group-hover:scale-[1.01] transition-transform ease-[cubic-bezier(0,.55,.45,1)] duration-200">
                                    <div className="flex-1"></div>
                                    <div className=" lg:h-16 px-4 pt-2 lg:pb-2 pb-3 border-t border-(--border-color) bg-surface-0 dark:bg-surface-900">
                                        <h3 className="font-medium">{component.title}</h3>
                                        <p className="text-surface-500 line-clamp-1 text-ellipsis">{component.description}</p>
                                        <div
                                            className="mt-2 lg:mt-0 lg:absolute lg:inset-x-0 lg:-bottom-px lg:bg-surface-100 lg:dark:bg-surface-800 flex gap-2 lg:px-4 lg:py-3 lg:h-16 lg:translate-y-[calc(100%+4px)] lg:group-hover:translate-y-0  lg:[&:has(:focus-visible)]:translate-y-0
    lg:[&:has(:focus-visible)]:absolute transition-transform duration-200 ease-[cubic-bezier(0,.55,.45,1)]"
                                        >
                                            {TYPES.map(
                                                (item) =>
                                                    (type === null || type === item) &&
                                                    component[item] && (
                                                        <Link
                                                            key={component.componentSlug + item}
                                                            href={'/docs/' + component.componentSlug.replace('styled/', item.toLowerCase() + '/')}
                                                            className="capitalize text-color font-medium py-2 lg:py-0 lg:text-base text-sm flex-1 flex items-center justify-center bg-surface-0 dark:bg-surface-900 hover:bg-primary hover:text-primary-contrast hover:border-primary transition-colors duration-150 rounded-lg border border-(--border-color)"
                                                        >
                                                            {item}
                                                        </Link>
                                                    )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center flex-wrap pt-24">
                            <div className="aspect-5/4 max-w-3xs w-full rounded-lg border border-(--border-color) flex flex-col overflow-hidden">
                                <div className="flex-1 p-3">
                                    <div className="bg-surface-100 dark:bg-surface-900 size-full rounded-md flex items-center justify-center">
                                        <i className="pi pi-ticket leading-none! text-3xl text-surface-300 dark:text-surface-600 mb-3" />
                                    </div>
                                </div>
                                <div className="px-3 py-1.5 border-t border-(--border-color) bg-surface-0 dark:bg-surface-900">
                                    <h3 className="font-medium ">{search}</h3>
                                    <div className="mt-0.5 h-5 bg-surface-100 dark:bg-surface-800 rounded-md w-3/4"></div>
                                </div>
                            </div>
                            <h3 className="mt-8 text-xl font-medium text-surface-800 dark:text-surface-100 text-center">Oops.. Component not found</h3>
                            <p className="mt-1 text-surface-500 max-w-xs text-center">The component you’re looking for isn’t available yet. You can request it on GitHub if you’d like.</p>
                            <Button as={Link} href={issueUrl} target="_blank" className="mt-6 " severity="secondary" variant="outlined">
                                <i className="pi pi-github text-base" />
                                Request on GitHub
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
