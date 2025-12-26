import { allDocs } from 'contentlayer/generated';

export const dynamic = 'force-static';

export async function GET(request: Request, { params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;

    if (!slug || slug.length === 0) {
        let content = '';

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

    const cleanSlug = slug.map((part) => part.replace('.md', ''));
    const slugPath = cleanSlug.join('/');

    if (cleanSlug[0] === 'components') {
        const componentName = cleanSlug[1];

        if (cleanSlug[2]) {
            const componentSlug = cleanSlug.join('/');
            const doc = allDocs.find((d) => d.componentSlug === componentSlug);

            if (doc && doc.llm) {
                return new Response(doc.llm, {
                    headers: {
                        'Content-Type': 'text/plain; charset=utf-8',
                        'Cache-Control': 'public, max-age=3600'
                    }
                });
            }
        } else {
            let featuresLLM = '';
            let apiLLM = '';
            let themingLLM = '';
            let ptLLM = '';

            allDocs.forEach((doc) => {
                if (doc.componentSlug === `components/${componentName}`) {
                    featuresLLM += doc.llm + '\n';
                }

                if (doc.componentSlug === `components/${componentName}/api`) {
                    apiLLM += doc.llm + '\n';
                }

                if (doc.componentSlug === `components/${componentName}/theming`) {
                    themingLLM += doc.llm + '\n';
                }

                if (doc.componentSlug === `components/${componentName}/pt`) {
                    ptLLM += doc.llm + '\n';
                }
            });

            const combinedContent = featuresLLM + '\n' + apiLLM + '\n' + themingLLM + '\n' + ptLLM;

            if (combinedContent.trim()) {
                return new Response(combinedContent, {
                    headers: {
                        'Content-Type': 'text/plain; charset=utf-8',
                        'Cache-Control': 'public, max-age=3600'
                    }
                });
            }
        }
    } else {
        const doc = allDocs.find((d) => {
            return d._raw?.sourceFileDir === slugPath || d._raw?.flattenedPath === slugPath || d.componentSlug === slugPath || d._raw?.sourceFileName?.replace('.mdx', '') === cleanSlug[cleanSlug.length - 1];
        });

        if (doc && doc.llm) {
            return new Response(doc.llm, {
                headers: {
                    'Content-Type': 'text/plain; charset=utf-8',
                    'Cache-Control': 'public, max-age=3600'
                }
            });
        }
    }

    return new Response(`Documentation not found for: ${slugPath}`, {
        status: 404,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8'
        }
    });
}
