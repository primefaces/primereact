import DocCopyMarkdownMenu from '@/shared/components/docs/doc-copy-markdown-menu';
import DocMdx from '@/shared/components/docs/doc-mdx';
import DocTabMenu from '@/shared/components/docs/doc-tab-menu';
import DocToc from '@/shared/components/docs/doc-toc';
import { allDocs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getDocFromParams({ slug }: { slug: string[] }) {
    const doc = allDocs.find((doc) => {
        return doc.componentSlug === slug.join('/');
    });

    if (!doc) {
        return null;
    }

    return doc;
}

type PageProps = {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const doc = await getDocFromParams({ slug });

    if (!doc) {
        return {};
    }

    return {
        title: doc.title + ' - PrimeReact',
        description: doc.description,
        openGraph: {
            title: doc.title + ' - PrimeReact',
            description: doc.description,
            type: 'article',
            images: [
                {
                    url: `/og?title=${encodeURIComponent(doc.title)}&description=${encodeURIComponent(doc.description ?? '')}`
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: doc.title + ' - PrimeReact',
            description: doc.description,
            images: [
                {
                    url: `/og?title=${encodeURIComponent(doc.title)}&description=${encodeURIComponent(doc.description ?? '')}`
                }
            ]
        }
    };
}

export async function generateStaticParams() {
    return allDocs.map((doc) => ({
        slug: doc.componentSlug.split('/')
    }));
}

async function DocsPage({ params }: PageProps) {
    const { slug } = await params;
    const doc = await getDocFromParams({ slug });

    if (!doc) {
        notFound();
    }

    return (
        <div className="flex flex-col pt-(--docs-layout-spacing)">
            {doc.component && <DocTabMenu componentName={doc.component} />}
            <div className="flex-1 flex items-stretch w-full gap-(--docs-layout-gap)">
                <div className="flex-1 min-w-0 pb-12">
                    <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
                        <h1 className="text-[2rem] leading-tight font-semibold text-(--high-contrast-text-color)">{doc.title}</h1>
                        {!(doc.hideCopyPage === true) && <DocCopyMarkdownMenu className="row-start-3 sm:row-start-1 sm:col-start-2" llm={doc.llm} component={doc.component} />}
                        <p className="text-lg col-span-2 opacity-50 text-surface-900 dark:text-surface-0">{doc.description}</p>
                    </div>
                    <DocMdx code={doc.body.code} siteUrl={doc.siteUrl} />
                </div>
                <DocToc toc={doc.toc} />
            </div>
        </div>
    );
}

export default DocsPage;
