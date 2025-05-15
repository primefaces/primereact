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
            {doc.component && <DocTabs componentName={doc.component} />}
            <div className="flex-1 flex items-start justify-between gap-10 xl:gap-20">
                <div className="flex-1 overflow-hidden">
                    <h1>{doc.title}</h1>
                    <p>{doc.description}</p>
                    <DocMdx code={doc.body.code} />
                </div>
                <DocToc toc={doc.toc as TableOfContents} />
            </div>
        </>
    );
}

export default DocsPage;
