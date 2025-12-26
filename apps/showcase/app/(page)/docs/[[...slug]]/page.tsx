import DocMdx from '@/components/docs/doc-mdx';
import DocTabMenu from '@/components/docs/doc-tab-menu';
import DocToc from '@/components/docs/doc-toc';
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
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: doc.title + ' - PrimeReact',
            description: doc.description
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
        <>
            {doc.component && <DocTabMenu componentName={doc.component} />}
            <div className="flex-1 flex items-start justify-between gap-10 xl:gap-20">
                <div className="flex-1 overflow-hidden pb-12">
                    <div className="grid grid-cols-[1fr_auto] gap-2 items-start">
                        <h1 className="text-4xl font-semibold leading-[1.2] text-(--high-contrast-text-color)">{doc.title}</h1>
                        {/*<DocCopyMarkdownMenu className="row-start-3 sm:row-start-1 sm:col-start-2" llm={doc.llm} component={doc.component} />*/}
                        <p className="text-xl leading-6.5 col-span-2">{doc.description}</p>
                    </div>

                    <DocMdx code={doc.body.code} />
                </div>
                <DocToc toc={doc.toc} />
            </div>
        </>
    );
}

export default DocsPage;
