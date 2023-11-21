import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function SemanticHTMLDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    HTML offers various element to organize content on a web page that screen readers are aware of. Preferring Semantic HTML for good semantics provide out of the box support for reader which is not possible when regular <i>div</i>{' '}
                    elements with classes are used. Consider the following example that do not mean too much for readers.
                </p>
            </DocSectionText>

            <CodeHighlight>
                {`
<div className="header">
    <div className="header-text">Header</div>
</div>

<div className="nav"></div>

<div className="main">
    <div className="content">
    </div>

    <div className="sidebar">
    </div>
</div>

<div className="footer">
</div>
`}
            </CodeHighlight>

            <p className="doc-section-description">Same layout can be achieved using the semantic elements with screen reader support built-in.</p>
            <CodeHighlight>
                {`
<header>
    <h1>Header</h1>
</header>

<nav></nav>

<main>
    <article></article>

    <aside></aside>
</main>

<footer>
</footer>
`}
            </CodeHighlight>
        </>
    );
}
