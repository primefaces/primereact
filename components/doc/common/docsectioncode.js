import React, { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { classNames } from '../../lib/utils/Utils';
import { useCodeEditor } from './codeeditor';
import { CodeHighlight } from './codehighlight';

export function DocSectionCode(props) {
    const [codeMode, setCodeMode] = useState('basic');
    const [codeLang, setCodeLang] = useState(props.code['javascript'] ? 'javascript' : 'basic');
    const codeEditor = useCodeEditor({ ...props, template: 'cra' });

    const toggleCodeMode = (content) => {
        if (codeMode === 'data') {
            setCodeMode('javascript');
        } else {
            setCodeMode(codeMode === 'basic' ? content : 'basic');
        }

        setCodeLang('javascript');
    };

    const copyCode = async () => {
        await navigator.clipboard.writeText(props.code[codeLang]);
    };

    return (
        <div className="relative doc-section-code">
            {codeMode === 'basic' && (
                <div className={props.codeClassName}>
                    <CodeHighlight code {...props}>
                        {props.code.basic}
                    </CodeHighlight>
                </div>
            )}
            {codeMode === 'data' && (
                <div className={props.codeClassName}>
                    <CodeHighlight code lang={'json'}>
                        {props.code.data}
                    </CodeHighlight>
                </div>
            )}
            {codeMode !== 'basic' && codeLang === 'javascript' && (
                <div className={props.codeClassName}>
                    <CodeHighlight code>{props.code.javascript}</CodeHighlight>
                </div>
            )}
            {codeMode !== 'basic' && codeLang === 'typescript' && (
                <div className={props.codeClassName}>
                    <CodeHighlight code lang={'tsx'}>
                        {props.code.typescript}
                    </CodeHighlight>
                </div>
            )}
            <div className="flex surface-card align-items-center justify-content-end absolute" style={{ right: '.75rem', top: '.75rem', gap: '.75rem' }}>
                {codeMode !== 'basic' && !props.hideToggleCode && codeMode !== 'data' && (
                    <>
                        <Button
                            className={classNames('p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center', {
                                'doc-section-code-active text-primary': codeLang === 'javascript' && codeMode !== 'data'
                            })}
                            label="JS"
                            onClick={() => setCodeLang('javascript')}
                            tooltip="JavaScript Code"
                            tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                        ></Button>
                        <Button
                            className={classNames('p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center', { 'doc-section-code-active text-primary': codeLang === 'typescript' })}
                            label="TS"
                            onClick={() => setCodeLang('typescript')}
                            tooltip="TypeScript Code"
                            tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                        ></Button>
                    </>
                )}

                {!props.hideToggleCode && (
                    <Button
                        type="button"
                        onClick={() => toggleCodeMode('javascript')}
                        className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                        icon="pi pi-code"
                        tooltip="Toggle Full Code"
                        tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                    ></Button>
                )}
                {!props.hideToggleCode && props.code.data ? (
                    <Button
                        type="button"
                        onClick={() => setCodeMode('data')}
                        className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                        icon="pi pi-database"
                        tooltip="View Data"
                        tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                    ></Button>
                ) : null}
                {!props.hideCodeSandbox && (
                    <Button
                        type="button"
                        className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                        tooltip="Edit in CodeSandbox"
                        tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                        onClick={() => codeEditor.openCodeSandbox(codeLang)}
                    >
                        <svg role="img" viewBox="0 0 24 24" width={16} height={16} fill={'var(--text-color-secondary)'} style={{ display: 'block' }}>
                            <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                        </svg>
                    </Button>
                )}
                {!props.hideStackBlitz && (
                    <Button
                        type="button"
                        className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                        tooltip="Edit in StackBlitz"
                        tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                        onClick={() => codeEditor.openStackBlitz(codeLang)}
                    >
                        <svg role="img" viewBox="0 0 24 24" width={16} height={16} fill={'var(--text-color-secondary)'} style={{ display: 'block' }}>
                            <path d="M0 15.98H8.15844L3.40299 27.26L19 11.1945H10.7979L15.5098 0L0 15.98Z" />
                        </svg>
                    </Button>
                )}
                <Button
                    type="button"
                    onClick={copyCode}
                    className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                    icon="pi pi-copy"
                    tooltip="Copy Code"
                    tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                ></Button>
            </div>
        </div>
    );
}
