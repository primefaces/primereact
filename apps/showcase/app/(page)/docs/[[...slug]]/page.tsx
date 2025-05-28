import { DocMdx } from '@/components/doc/DocMdx';
import DocTabs from '@/components/doc/DocTabs';
import DocToc from '@/components/doc/DocToc';
import { TableOfContents } from '@/lib/utils/getTableOfContents';
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
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

async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const doc = await getDocFromParams({ slug });

    if (!doc) {
        notFound();
    }

    return (
        <>
            <div className="flex-1 flex items-start justify-between gap-16">
                <div className="flex-1 max-w-7xl mx-auto w-full overflow-hidden">
                    <div className="w-full grid grid-cols-[1fr_minmax(0,100%)_1fr] md:grid-cols-[1fr_minmax(0,80%)_1fr] lg:grid-cols-[1fr_minmax(0,85%)_1fr] 2xl:grid-cols-[1fr_minmax(0,65%)_1fr] [&>*]:col-start-2">
                        {doc.component && <DocTabs componentName={doc.component} />}
                        <h1 className="!text-4xl">{doc.title}</h1>
                        <p className="text-xl">{doc.description}</p>
                        <DocMdx code={doc.body.code} />
                    </div>
                </div>
                <DocToc toc={doc.toc as TableOfContents} />
            </div>
        </>
    );
}

export default DocsPage;
