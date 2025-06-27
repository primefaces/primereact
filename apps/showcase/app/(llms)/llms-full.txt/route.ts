import { allDocs } from '@/.contentlayer/generated';

export const dynamic = 'force-static';

export async function GET() {
    let content = '# PrimeReact\n\n';

    for (const doc of allDocs) {
        content += `${doc.llm}\n\n`;
    }

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
