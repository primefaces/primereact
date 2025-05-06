import { DocMdx } from '@/components/doc/DocMdx';
import DocTabs from '@/components/doc/DocTabs';
import DocToc from '@/components/doc/DocToc';
import { getTableOfContents } from '@/lib/utils/getTableOfContents';
import { allDocs } from 'contentlayer/generated';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

async function getDocFromParams({ slug }: { slug: string[] }) {
    const doc = allDocs.find((doc) => doc.componentSlug === slug.join('/'));
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
        title: doc.title,
        description: doc.description,
        openGraph: {
            title: doc.title,
            description: doc.description,
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: doc.title,
            description: doc.description
        }
    };
}

export async function generateStaticParams() {
    return allDocs.map((doc) => ({
        slug: doc.slug.split('/')
    }));
}

async function DocsPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    const doc = await getDocFromParams({ slug });

    if (!doc) {
        notFound();
    }

    const toc = await getTableOfContents(doc.body.raw);

    return (
        <>
            {doc.component && <DocTabs componentName={doc.component} />}
            <div className="flex items-start justify-between">
                <div className="flex-1 max-w-6xl">
                    <h1>{doc.title}</h1>
                    <p>{doc.description}</p>
                    <DocMdx code={doc.body.code} />
                </div>
                <DocToc toc={toc} />
            </div>
        </>
    );
}

export default DocsPage;
