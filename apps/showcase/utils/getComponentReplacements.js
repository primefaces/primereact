import fs from 'fs';
import { Store } from '../__store__/index.mjs';
import { getApiDocs, getPTOptions, getStyleOptions, getTokenOptions } from './getComponentOptions';

export function replaceComponentViewer(content) {
    const matches = content.match(/<DocDemoViewer\s+name=\\?"([^"]+)\\?"[^>]*\/>/g);

    if (!matches) return content;

    for (const match of matches) {
        try {
            const nameMatch = match.match(/name=\\?"([^"]+)\\?"/);

            if (!nameMatch) continue;

            const [component, demo] = nameMatch[1].split(':');

            if (!Store[component]?.[demo]) continue;

            const filePath = Store[component][demo].filePath;
            const source = fs.readFileSync(filePath, 'utf8');

            content = content.replace(match, `\`\`\`tsx\n${source}\n\`\`\``);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    }

    return content;
}

export function replaceApiTable(content) {
    const matches = content.match(/<DocTable\s+name=\\?"([^"]+)\\?"[^>]*\/>/g);

    if (!matches) return content;

    for (const match of matches) {
        const nameMatch = match.match(/name=\\?"([^"]+)\\?"/);
        const categoryMatch = match.match(/category=\\?"([^"]+)\\?"/);

        if (!nameMatch || !categoryMatch) continue;

        let data = [];

        switch (categoryMatch[1]) {
            case 'token':
                data = getTokenOptions(nameMatch[1]);
                break;
            case 'pt':
                data = getPTOptions(nameMatch[1]);
                break;
            case 'style':
                data = getStyleOptions(nameMatch[1]);
                break;

            case 'api': {
                const typeMatch = match.match(/type=\\?"([^"]+)\\?"/);

                if (!typeMatch) continue;

                const item = getApiDocs(nameMatch[1])[0]?.children.find((item) => item.label.toLowerCase() === typeMatch[1]);

                if (item) {
                    data = {
                        label: item.label,
                        description: item.description,
                        data: Array.isArray(item.data) ? item.data : []
                    };
                }

                break;
            }

            default:
                continue;
        }

        if (data && typeof data === 'object' && 'data' in data) {
            data = data.data;
        }

        if (!Array.isArray(data) || !data.length) continue;

        const headers = Object.keys(data[0]).filter((header) => !['readonly', 'optional', 'deprecated'].includes(header));

        let mdxTable = '| ' + headers.map((h) => h.charAt(0).toUpperCase() + h.slice(1)).join(' | ') + ' |\n';

        mdxTable += '|:' + headers.map(() => '------').join('|:') + '|\n';

        data.forEach((prop) => {
            const row = headers.map((header) => {
                let value = prop[header];

                if (header === 'type') {
                    value = value
                        .split('|')
                        .map((t) => t.trim())
                        .join(' \\| ');
                } else if (header === 'options') {
                    if (Array.isArray(value)) {
                        value = value.map((opt) => `${opt.name}: ${opt.type}`).join(', ');
                    }
                } else if (header === 'parameters') {
                    if (value.name && value.type) {
                        value = `${value.name}: ${value.type}`;
                    }
                } else if (header === 'default') {
                    value = value === '' || value === undefined ? 'null' : value;
                }

                return (value || '').toString().replace(/\|/g, '\\|');
            });

            mdxTable += '| ' + row.join(' | ') + ' |\n';
        });

        content = content.replace(match, mdxTable);
    }

    return content;
}
