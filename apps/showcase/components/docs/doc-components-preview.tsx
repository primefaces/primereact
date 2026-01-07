'use client';
import { IconField } from '@primereact/ui/iconfield';
import { InputText } from '@primereact/ui/inputtext';
import { allDocs } from 'contentlayer/generated';
import Link from 'next/link';
import * as React from 'react';

const TYPES = ['styled', 'tailwind'] as const;

export default function DocComponentsPreview() {
    const [search, setSearch] = React.useState('');
    const [type, setType] = React.useState<string | undefined>('');
    const styledComponents = allDocs.filter((doc) => /^styled\/components\/[^/]+$/.test(doc.componentSlug));
    const tailwindComponents = allDocs.filter((doc) => /^tailwind\/components\/[^/]+$/.test(doc.componentSlug));

    const allComponents = [...styledComponents, ...tailwindComponents].reduce(
        (acc, doc) => {
            const [type, , name] = doc.componentSlug.split('/');

            if (!name || !type) return acc;

            acc[name] ??= {
                title: doc.title,
                description: doc.description,
                componentSlug: doc.componentSlug,
                styled: false,
                tailwind: false
            };

            acc[name][type as 'styled' | 'tailwind'] = true;

            return acc;
        },
        {} as Record<
            string,
            {
                title: string;
                description: string | undefined;
                componentSlug: string;
                styled: boolean;
                tailwind: boolean;
            }
        >
    );

    const result = Object.values(allComponents);

    const filteredResult = result
        .filter((component) => {
            return search === '' || component.title.toLowerCase().includes(search.toLowerCase()) || (component.description && component.description.toLowerCase().includes(search.toLowerCase()));
        })
        .filter((component) => {
            return type === '' || component[type as 'styled' | 'tailwind'];
        });

    const count = Math.floor(result.length / 5) * 5;
    const roundedCount = count === result.length ? count - 5 : count;

    return (
        <div suppressHydrationWarning>
            <div className="flex flex-wrap gap-4 items-end justify-between">
                <p className="text-surface-500 dark:text-surface-400 text-sm sm:text-base md:text-lg max-w-156 mt-0.5 [&>span]:text-surface-950 [&>span]:dark:text-surface-0 [&>span]:font-medium">
                    Discover <span>{roundedCount}+</span> accessible UI components in <span>Tailwind</span> and <span>Styled</span> versions — built for easy customization and production use.
                </p>
                <div className="flex gap-2">
                    <IconField.Root>
                        <IconField.InputIcon>
                            <i className="pi pi-search" />
                        </IconField.InputIcon>
                        <InputText value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} placeholder="Search components..." />
                    </IconField.Root>
                    <div className="flex items-center w-fit bg-surface-0 dark:bg-surface-950 border border-surface shadow-xs rounded-md p-0.5">
                        {TYPES.map((item) => (
                            <button
                                key={item}
                                onClick={() => setType((prev) => (prev === item ? '' : item))}
                                className={`px-2 h-full capitalize font-medium text-sm cursor-pointer border ${item === type ? ' border-surface bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-surface-0' : 'border-transparent bg-transparent text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-100'} rounded-[0.35rem] transition-colors`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-8 h-px w-full bg-(--p-content-border-color)"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-10">
                {filteredResult.map((component) => (
                    <div key={component.title} className="">
                        <div className="group relative min-h-56 p-4 border border-surface bg-surface-0 dark:bg-surface-900 rounded-lg shadow-xs">
                            <div className="absolute inset-0 p-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                {TYPES.map(
                                    (item) =>
                                        (type === '' || type === item) &&
                                        component[item] && (
                                            <Link
                                                key={component.componentSlug + item}
                                                href={component.componentSlug.replace('styled/', item.toLowerCase() + '/')}
                                                className="capitalize bg-surface-100/50 hover:bg-surface-100 dark:bg-surface-700/50 dark:hover:bg-surface-700 w-full flex-1 flex items-center justify-center font-semibold text-2xl rounded-lg transition-colors"
                                            >
                                                {item}
                                            </Link>
                                        )
                                )}
                            </div>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-lg font-semibold">{component.title}</h3>
                            <p className="mt-1 text-sm text-surface-500 font-medium">{component.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
