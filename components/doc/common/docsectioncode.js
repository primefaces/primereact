import React, { useEffect, useState } from 'react';
import { Button } from '../../lib/button/Button';
import { classNames } from '../../lib/utils/Utils';
import { useCodeEditor } from './codeeditor';
import { CodeHighlight } from './codehighlight';

export function DocSectionCode(props) {
    const [codeMode, setCodeMode] = useState('basic');
    const [codeLang, setCodeLang] = useState(props.code['javascript'] ? 'javascript' : 'basic');
    const codeEditor = useCodeEditor({ ...props, template: 'cra' });

    useEffect(() => {
        if (props.embedded) {
            codeEditor.openStackBlitz(codeLang);
        }
    }, [codeEditor, codeLang, props.embedded]);

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
        <>
            {!props.embedded && (
                <div className="doc-section-code">
                    <div className="doc-section-code-buttons scalein animation-duration-300">
                        {codeMode !== 'basic' && !props.hideToggleCode && codeMode !== 'data' && (
                            <>
                                <Button
                                    className={classNames('py-0 px-2 border-round h-2rem shadow-none', {
                                        'code-active': codeLang === 'javascript' && codeMode !== 'data'
                                    })}
                                    label="JS"
                                    onClick={() => setCodeLang('javascript')}
                                    tooltip="JavaScript Code"
                                    tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                                ></Button>
                                <Button
                                    className={classNames('py-0 px-2 border-round h-2rem shadow-none', { 'code-active': codeLang === 'typescript' })}
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
                                className="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center shadow-none"
                                tooltip="Toggle Full Code"
                                tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                            >
                                <i className="pi pi-code"></i>
                            </Button>
                        )}
                        {!props.hideToggleCode && props.code.data ? (
                            <Button
                                type="button"
                                onClick={() => setCodeMode('data')}
                                className="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center shadow-none"
                                tooltip="View Data"
                                tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                            >
                                <i className="pi pi-database"></i>
                            </Button>
                        ) : null}
                        {!props.hideCodeSandbox && (
                            <Button
                                type="button"
                                className="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center shadow-none"
                                tooltip="Edit in CodeSandbox"
                                tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                                onClick={() => codeEditor.openCodeSandbox(codeLang)}
                            >
                                <svg role="img" viewBox="0 0 24 24" width={16} height={16} fill={'currentColor'} style={{ display: 'block' }}>
                                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                                </svg>
                            </Button>
                        )}
                        {!props.hideStackBlitz && (
                            <Button
                                type="button"
                                className="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center shadow-none"
                                tooltip="Edit in StackBlitz"
                                tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                                onClick={() => codeEditor.openStackBlitz(codeLang)}
                            >
                                <svg role="img" viewBox="0 0 13 19" width={13} height={18} fill={'currentColor'} style={{ display: 'block' }}>
                                    <path d="M0 10.6533H5.43896L2.26866 18.1733L12.6667 7.463H7.1986L10.3399 0L0 10.6533Z" />
                                </svg>
                            </Button>
                        )}
                        <Button
                            type="button"
                            onClick={copyCode}
                            className="h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center shadow-none"
                            tooltip="Copy Code"
                            tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}
                        >
                            <i className="pi pi-copy"></i>
                        </Button>
                    </div>

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
                </div>
            )}
            {props.embedded && <div id="embed"></div>}
        </>
    );
}
