import AllComponentPreviews from '@/shared/components/all-components-previews';
import { ComponentPreviewType } from '@/shared/types/App.types';
import { allDocs } from 'contentlayer/generated';
import type { Metadata } from 'next';

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
            tailwind: false,
            cover: doc?.cover ?? undefined
        };

        acc[name][type as 'styled' | 'tailwind'] = true;

        return acc;
    },
    {} as Record<string, ComponentPreviewType>
);

const result = Object.values(allComponents);

const title = 'Components';

const count = Math.floor(result.length / 5) * 5;
const roundedCount = count === result.length ? count - 5 : count;

const description = `Discover ${roundedCount}+ accessible UI components in Tailwind and Styled versions — built for easy customization and production use.`;

export const metadata: Metadata = {
    title: `${title} - PrimeReact`,
    description: description,
    openGraph: {
        title: `${title} - PrimeReact`,
        description: description,
        type: 'article',
        images: [
            {
                url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description ?? '')}`
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `${title} - PrimeReact`,
        description: description,
        images: [
            {
                url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description ?? '')}`
            }
        ]
    }
};

export default function ComponentPage() {
    return <AllComponentPreviews components={result} />;
}
