'use client';
import { allDocs } from 'contentlayer/generated';
import { useParams } from 'next/navigation';
import { StyleClass } from 'primereact/styleclass';
import * as React from 'react';

export default function DocCopyMarkdown({ llm, component }: { llm: string; component?: string }) {
    const params = useParams();
    const [isCopied, setIsCopied] = React.useState(false);
    const [isMarkdownLinkCopied, setIsMarkdownLinkCopied] = React.useState(false);

    const [markdownLink, githubLink, chatGPTLink, claudeLink] = React.useMemo(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';

        let link: string;
        let githubSlug: string;
        const slugArray = Array.isArray(params?.slug) ? params.slug : [params?.slug].filter(Boolean);

        if (component) {
            const componentName = params?.slug?.[1];

            githubSlug = `${slugArray.join('/')}${params?.slug?.[2] ? '' : '/features'}`;
            link = `${baseUrl}/docs/components/${componentName}.md`;
        } else {
            githubSlug = slugArray.join('/');
            link = `${baseUrl}/docs/${slugArray.join('/')}.md`;
        }

        const githubLink = `https://github.com/primefaces/primereact/tree/v11/apps/showcase/docs/${githubSlug}.mdx`;
        const urlMessage = `Read ${link}, I want to ask questions about it.`;
        const encodedUrlMessage = encodeURIComponent(urlMessage);
        const chatGPTLink = `https://chatgpt.com/?hints=search&q=${encodedUrlMessage}`;
        const claudeLink = `https://claude.ai/new?q=${encodedUrlMessage}`;

        return [link, githubLink, chatGPTLink, claudeLink];
    }, [component, params]);

    const markdownContent = React.useMemo(() => {
        if (component) {
            const componentName = params?.slug?.[1];

            if (!componentName) {
                return '';
            }

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

            return featuresLLM + '\n' + apiLLM + '\n' + themingLLM + '\n' + ptLLM;
        }

        return llm;
    }, [component, llm, params]);

    const handleCopy = () => {
        window.navigator.clipboard.writeText(markdownContent);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    const handleCopyMarkdownLink = () => {
        window.navigator.clipboard.writeText(markdownLink);
        setIsMarkdownLinkCopied(true);
        setTimeout(() => {
            setIsMarkdownLinkCopied(false);
        }, 2000);
    };

    return (
        <div className="flex items-center gap-4 relative">
            <div className="rounded-border border border-surface flex divide-x divide-(--p-content-border-color) bg-(--p-button-secondary-background) overflow-hidden text-(--p-button-secondary-color) font-(--p-button-label-font-weight)">
                <button onClick={handleCopy} disabled={isCopied} className="px-3 py-2 flex items-center gap-2 hover:bg-(--p-button-secondary-hover-background)/60 transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none">
                    {isCopied ? <i className="pi pi-check"></i> : <i className="pi pi-copy"></i>}
                    Copy Markdown
                </button>
                <StyleClass
                    as="button"
                    type="button"
                    className="px-3 flex items-center justify-center hover:bg-(--p-button-secondary-hover-background)/60 transition-colors cursor-pointer"
                    aria-label="App Configurator"
                    selector=".copy-markdown-dropdown"
                    enterFromClassName="hidden"
                    enterActiveClassName="animate-scalein"
                    leaveToClassName="hidden"
                    leaveActiveClassName="animate-fadeout"
                    hideOnOutsideClick
                >
                    <i className="pi pi-chevron-down text-sm"></i>
                </StyleClass>
            </div>
            <div className="copy-markdown-dropdown hidden absolute top-[calc(100%+4px)] right-0 inset-inline-end-0 w-[13.5rem] p-[0.25rem] bg-(--overlay-background) rounded-[6px] border border-(--border-color) origin-top shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.1),_0_2px_4px_-2px_rgb(0_0_0_/_0.1)] z-50">
                <div className="flex flex-col gap-0.5">
                    <button onClick={handleCopyMarkdownLink} disabled={isMarkdownLinkCopied} className="flex items-center gap-2 pl-3 p-2 rounded-[4px] hover:bg-(--p-button-secondary-hover-background)/60 transition-colors">
                        {isMarkdownLinkCopied ? <i className="pi pi-check"></i> : <i className="pi pi-link text-surface-900 dark:text-surface-0"></i>}
                        <span>Copy Markdown Link</span>
                    </button>
                    <a href={githubLink} target="_blank" className="flex items-center gap-2 pl-3 p-2 rounded-[4px] hover:bg-(--p-button-secondary-hover-background)/60 transition-colors">
                        <i className="pi pi-github text-surface-900 dark:text-surface-0"></i>
                        <span>Open in Github</span>
                        <i className="pi pi-arrow-up-right text-xs opacity-50 ml-auto"></i>
                    </a>
                    <a href={chatGPTLink} target="_blank" className="flex items-center gap-2 pl-3 p-2 rounded-[4px] hover:bg-(--p-button-secondary-hover-background)/60 transition-colors">
                        <span className="w-4 h-4 relative">
                            <svg className="absolute w-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 721 721" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1390_2313" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="721" height="721">
                                    <path d="M720.607 0.0996094H0.607422V720.1H720.607V0.0996094Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1390_2313)">
                                    <mask id="mask1_1390_2313" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="118" y="119" width="485" height="481">
                                        <path d="M602.697 119.957H118.558V599.775H602.697V119.957Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_1390_2313)">
                                        <path
                                            className="fill-surface-900 dark:fill-surface-0"
                                            d="M304.247 294.61V249.027C304.247 245.188 305.688 242.308 309.045 240.391L400.693 187.611C413.168 180.414 428.043 177.057 443.395 177.057C500.972 177.057 537.441 221.681 537.441 269.181C537.441 272.539 537.441 276.378 536.96 280.217L441.955 224.557C436.198 221.2 430.438 221.2 424.681 224.557L304.247 294.61ZM518.246 472.144V363.223C518.246 356.504 515.365 351.706 509.609 348.348L389.175 278.295L428.52 255.742C431.878 253.825 434.758 253.825 438.116 255.742L529.763 308.522C556.155 323.878 573.906 356.504 573.906 388.17C573.906 424.635 552.316 458.224 518.246 472.14V472.144ZM275.938 376.181L236.593 353.151C233.236 351.234 231.795 348.353 231.795 344.514V238.955C231.795 187.616 271.14 148.748 324.401 148.748C344.556 148.748 363.265 155.467 379.103 167.462L284.579 222.163C278.823 225.52 275.943 230.318 275.943 237.038V376.185L275.938 376.181ZM360.627 425.121L304.247 393.454V326.282L360.627 294.615L417.003 326.282V393.454L360.627 425.121ZM396.853 570.988C376.699 570.988 357.99 564.269 342.152 552.275L436.675 497.573C442.432 494.216 445.312 489.418 445.312 482.698V343.551L485.139 366.581C488.496 368.498 489.937 371.378 489.937 375.218V480.777C489.937 532.116 450.11 570.984 396.853 570.984V570.988ZM283.135 463.989L191.487 411.21C165.095 395.853 147.344 363.228 147.344 331.561C147.344 294.615 169.416 261.508 203.481 247.592V356.99C203.481 363.709 206.362 368.507 212.118 371.865L332.075 441.436L292.73 463.989C289.373 465.906 286.492 465.906 283.135 463.989ZM277.86 542.679C223.64 542.679 183.814 501.894 183.814 451.513C183.814 447.674 184.295 443.835 184.772 439.996L279.296 494.697C285.052 498.055 290.813 498.055 296.569 494.697L417.003 425.126V470.709C417.003 474.548 415.563 477.428 412.205 479.345L320.558 532.125C308.082 539.322 293.207 542.679 277.855 542.679H277.86ZM396.853 599.775C454.912 599.775 503.371 558.512 514.411 503.811C568.15 489.895 602.697 439.514 602.697 388.175C602.697 354.586 588.304 321.961 562.393 298.449C564.792 288.372 566.232 278.295 566.232 268.223C566.232 199.61 510.572 148.266 446.275 148.266C433.323 148.266 420.847 150.183 408.371 154.504C386.776 133.391 357.027 119.957 324.401 119.957C266.343 119.957 217.884 161.219 206.844 215.92C153.105 229.836 118.558 280.217 118.558 331.556C118.558 365.145 132.951 397.77 158.862 421.282C156.463 431.359 155.023 441.436 155.023 451.509C155.023 520.122 210.683 571.465 274.979 571.465C287.932 571.465 300.408 569.548 312.884 565.227C334.474 586.34 364.223 599.775 396.853 599.775Z"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </span>

                        <span>Open in ChatGPT</span>
                        <i className="pi pi-arrow-up-right text-xs opacity-50 ml-auto"></i>
                    </a>
                    <a href={claudeLink} target="_blank" className="flex items-center gap-2 pl-3 p-2 rounded-[4px] hover:bg-(--p-button-secondary-hover-background)/60 transition-colors">
                        <span className="w-4 h-4 relative">
                            <svg className="absolute w-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 93 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1391_2325)">
                                    <path d="M66.5 0H52.4L78.1 65H92.2L66.5 0ZM25.7 0L0 65H14.4L19.7 51.4H46.6L51.8 65H66.2L40.5 0H25.7ZM24.3 39.3L33.1 16.5L41.9 39.3H24.3Z" className="fill-surface-900 dark:fill-surface-0" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1391_2325">
                                        <rect width="92.2" height="65" className="fill-surface-900 dark:fill-surface-0" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>

                        <span>Open in Claude</span>
                        <i className="pi pi-arrow-up-right text-xs opacity-50 ml-auto"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
