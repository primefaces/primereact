import { useState } from "react";
import { Button } from '../../lib/button/Button';
import { classNames } from "../../lib/utils/utils";
import { CodeHighlight } from "./codehighlight";

export function DocSectionCode(props) {
    const [codeMode, setCodeMode] = useState('basic');
    const [codeLang, setCodeLang] = useState('javascript');
    const toggleCodeMode = () => {
        setCodeMode(codeMode === 'basic' ? 'javascript' : 'basic');
    }
    const copyCode = async () => {
        const codeToCopy = codeMode === 'basic' ? props.code.basic : props.code.full;
        await navigator.clipboard.writeText(codeToCopy);
    }

    return (
        <div className="relative doc-section-code">
            <div className="flex surface-card border-round align-items-center justify-content-end absolute z-2" style={{ right: '.75rem', top: '.75rem', gap: '.75rem' }}>
                {
                    codeMode !== 'basic' && !props.hideToggleCode &&
                    <>
                        <Button className={classNames('p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center', {'doc-section-active-active text-primary': codeLang === 'javascript'})} label="JS" onClick={() => setCodeLang('javascript')}></Button>
                        <Button className={classNames('p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center', {'doc-section-active-active text-primary': codeLang === 'typescript'})} label="TS" onClick={() => setCodeLang('typescript')}></Button>
                    </>
                }
                { !props.hideToggleCode &&
                        <Button type="button" onClick={toggleCodeMode} className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center" icon="pi pi-code"
                            tooltip="Toggle Full Code" tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}></Button>
                }
                { !props.hideCodeSandbox &&
                    <Button type="button" className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center"
                        tooltip="Edit in CodeSandbox" tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}>
                        <svg role="img" viewBox="0 0 24 24" width={16} height={16} fill={'var(--text-color-secondary)'} style={{ display: 'block' }}>
                            <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                        </svg>
                    </Button>
                }
                <Button type="button" onClick={copyCode} className="p-button-rounded p-button-text p-button-plain h-2rem w-2rem p-0 inline-flex align-items-center justify-content-center" icon="pi pi-copy"
                    tooltip="Copy Code" tooltipOptions={{ position: 'bottom', className: 'doc-section-code-tooltip' }}></Button>
            </div>
            {codeMode === 'basic' && <div><CodeHighlight>{props.code.basic}</CodeHighlight></div>}
            {codeMode !== 'basic' && codeLang === 'javascript' && <div><CodeHighlight>{props.code.javascript}</CodeHighlight></div>}
            {codeMode !== 'basic' && codeLang === 'typescript' && <div><CodeHighlight>{props.code.typescript}</CodeHighlight></div>}
        </div>
    )
}