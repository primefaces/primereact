import chokidar from 'chokidar';
import fs from 'fs/promises';
import { globSync } from 'glob';
import path from 'path';
import * as prettier from 'prettier';

const INPUT_DIR = 'doc/**/demo.tsx';
const OUTPUT_FILE = 'source.auto.ts';

/**
 * @example
 * ```ts
 *  @code-section-start: preview
 *       @code-section-start: basic
 *       ...
 *      @code-section-end: basic
 *  @code-section-end: preview
 * ```
 */

function extractCodeSections(content) {
    const sections = {};
    let stack = [];
    let currentCode = '';

    const regex = /{\s*\/\*\s*@code-section-(start|end):\s*([\w-]+)\s*\*\/\s*}\s*\n?/g;
    let match;
    let lastIndex = 0;

    while ((match = regex.exec(content)) !== null) {
        const [fullMatch, type, name] = match;
        const sectionStart = regex.lastIndex - fullMatch.length;

        if (sectionStart > lastIndex) {
            currentCode += content.slice(lastIndex, sectionStart);
        }

        if (type === 'start') {
            if (stack.length > 0) {
                stack[stack.length - 1].code += currentCode;
            }

            stack.push({ name, code: '' });
            currentCode = '';
        } else if (type === 'end' && stack.length > 0) {
            const section = stack.pop();
            if (section && section.name === name) {
                sections[section.name] = (section.code + currentCode).trim();
                currentCode = '';
            }
        }

        lastIndex = regex.lastIndex;
    }

    if (lastIndex < content.length) {
        currentCode += content.slice(lastIndex);
    }

    return sections;
}

async function generate(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf8');
        const OUTPUT_PATH = path.join(path.dirname(filePath), OUTPUT_FILE);
        const regex = /{\s*\/\*\s*(@code-section-start|@code-section-end):\s*([\w-]+)\s*\*\/\s*}/g;

        const prettierConfig = await prettier.resolveConfig(__dirname);

        const source = Object.fromEntries(
            await Promise.all(
                Object.entries({
                    ...extractCodeSections(content),
                    code: content
                        .replaceAll(regex, (_, code) => code.trim())
                        .replaceAll(/\n?\s*(@code-section-start|@code-section-end)/g, '')
                        .trim()
                }).map(async ([name, code]) => {
                    const formattedCode = await prettier.format(code, { ...prettierConfig, parser: 'babel-ts' });
                    return [name, formattedCode.replaceAll(/>;/g, '>')];
                })
            )
        );

        const sourceContent = `/****************************************************************************
****************** PrimeReact Demo Source (Auto-Generated) ******************
*****************************************************************************/

export const source = ${JSON.stringify(source, null, 4)};
`;

        await fs.writeFile(OUTPUT_PATH, sourceContent, 'utf8');
    } catch (error) {
        console.error(`\x1b[31m🛑${error}`, '\x1b[0m');
    }
}

export function run() {
    globSync(INPUT_DIR).forEach(async (filePath) => {
        const watcher = chokidar.watch(filePath, { ignored: /^\./, persistent: true });

        watcher
            .on('add', async function (path) {
                //console.info('✅File\x1b[32m', path, '\x1b[0m has been added');

                await generate(path);
            })
            .on('change', async function (path) {
                //console.info('🔄File\x1b[34m', path, '\x1b[0m has been changed');

                await generate(path);
            })
            .on('unlink', function (path) {
                //console.warn('🈁File\x1b[90m', path, '\x1b[0m has been removed');
            })
            .on('error', function (error) {
                //console.error('⛔Error happened', error);
            });
    });
}

run();
