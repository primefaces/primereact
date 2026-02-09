'use client';
import { ComponentPreviewType } from '@/shared/types/App.types';
import { Button } from '@primereact/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Github } from '@primeicons/react/github';
import { Search } from '@primeicons/react/search';

const TYPES = ['styled', 'tailwind'] as const;

export default function AllComponentPreviews({ components }: { components: ComponentPreviewType[] }) {
    const [search, setSearch] = React.useState('');
    const [type] = React.useState<string | null>(null);

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
            <div className="container">
                <div className="max-w-3xl mx-auto w-full flex flex-col items-center py-8 lg:py-12">
                    <div className="relative p-1 pr-2.5 h-7 inline-flex justify-center gap-1.5 rounded-full w-fit text-sm font-medium select-none border border-surface bg-surface-0 shadow-xs dark:bg-surface-800 before:pointer-events-none before:bg-linear-to-b before:transition-opacity before:from-white/20 before:absolute before:inset-0 before:z-1 before:opacity-25 hover:before:opacity-100 dark:hover:before:opacity-50 before:rounded-full">
                        <span className="uppercase flex items-center justify-center px-1.5 rounded-full bg-primary text-primary-contrast font-bold text-[10px] leading-none">new</span>
                        <span className="leading-none flex items-center justify-center text-surface-800 dark:text-surface-50">PrimeReact is now in alpha.</span>
                    </div>
                    <h1 className={`mt-10 sm:mt-16 font-semibold text-4xl sm:text-5xl lg:text-6xl text-center text-surface-900 dark:text-surface-0 tracking-tight`}>Components</h1>
                    <div className="mt-4 text-surface-900/60 dark:text-surface-0/50 text-base sm:text-lg lg:text-xl text-center max-w-[720px]">
                        Discover <span className="font-medium text-surface-900 dark:text-surface-0">{roundedCount}+</span> accessible UI components in <span className="font-medium text-surface-900 dark:text-surface-0">Styled</span> and{' '}
                        <span className="font-medium text-surface-900 dark:text-surface-0">Tailwind</span> versions — built for easy customization and production use.
                    </div>
                </div>
            </div>
            <div className="my-4 w-full">
                <div className="flex items-center w-full">
                    <span className="h-px flex-1 bg-(--border-color)" />
                    <div className="relative flex items-center rounded-full bg-surface-0 dark:bg-surface-900 border border-(--border-color) shadow-xs max-w-xs w-full has-focus-visible:ring-2 has-focus-visible:ring-(--border-color)">
                        <Search className="text-base absolute top-1/2 -translate-y-1/2 left-4 opacity-50 pointer-events-none"></Search>
                        <input className="flex-1 text-lg pl-10 pr-6 py-2.5 rounded-full outline-none" placeholder="Search components..." value={search} onChange={(e) => setSearch(e.target.value)} autoFocus />
                    </div>
                    <span className="h-px flex-1 bg-(--border-color)" />
                </div>
                <div className="flex items-center justify-center mt-4"></div>
            </div>
            <div className="container py-12 grid grid-cols-1 min-[684px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                {filteredResult.length > 0 ? (
                    filteredResult.map((component) => (
                        <div key={component.title} className="group relative overflow-hidden rounded-xl bg-surface-0 dark:bg-surface-900 border border-(--border-color)/50">
                            <div className="relative p-2 overflow-hidden flex flex-col group-hover:scale-[1.01] transition-transform ease-[cubic-bezier(0,.55,.45,1)] duration-200">
                                <div className="relative aspect-[19.5/11.5625] w-full rounded-lg overflow-hidden bg-neutral-900 dark:bg-surface-950 flex items-center justify-center">
                                    <Image className="mix-blend-" src="/images/background.png" alt="background" objectFit="cover" fill />
                                    <Image className="mix-blend-color-dodge z-2" src="/images/light.png" alt="light" objectFit="cover" fill />
                                    <Image className="opacity-40 z-3" src={`/images/covers/${component.title.toLowerCase().replace(' ', '-')}.png`} alt={component.title} objectFit="cover" fill />
                                </div>
                                <div className="lg:h-14 px-3 pt-2 lg:pb-2 pb-3 bg-surface-0 dark:bg-surface-900">
                                    <h3 className="font-medium">{component.title}</h3>
                                    <p className="text-surface-500 line-clamp-1 text-ellipsis">{component.description}</p>
                                    <div className="mt-2 lg:mt-0 lg:absolute lg:inset-x-0 lg:-bottom-px lg:bg-surface-0 lg:dark:bg-surface-900 flex gap-2 lg:px-4 lg:py-3 lg:h-16 lg:translate-y-[calc(100%+4px)] lg:group-hover:translate-y-0  lg:[&:has(:focus-visible)]:translate-y-0 lg:[&:has(:focus-visible)]:absolute transition-transform duration-200 ease-[cubic-bezier(0,.55,.45,1)]">
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
                            <Github className="text-base" />
                            Request on GitHub
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
