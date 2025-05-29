import { allDocs } from 'contentlayer/generated';

export const dynamic = 'force-static';

export async function GET() {
    let content = '<SYSTEM>Documentation for all components in PrimeReact.</SYSTEM>\n\n';

    const componentDocs = allDocs.filter((doc) => doc.componentSlug.startsWith('components'));

    for (const doc of componentDocs) {
        if (!doc.llm || doc.llm?.length === 0) continue;

        content += `# ${doc.title}\n\n${doc.llm}\n\n`;
    }

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
