import Link from 'next/link';
import { useRouter } from 'next/router';

export function DocSectionText(props) {
    const router = useRouter();

    return (
        <>
            {props.level === '2' ? (
                <h3 className="doc-section-label">
                    {props.label}
                    <Link href={router.basePath + router.pathname + '#' + props.id} target="_self">
                        <a id={props.id}>#</a>
                    </Link>
                </h3>
            ) : (
                <h2 className="doc-section-label">
                    {props.label}
                    <Link href={router.basePath + router.pathname + '#' + props.id} target="_self">
                        <a id={props.id}>#</a>
                    </Link>
                </h2>
            )}
            <div className="doc-section-description">{props.children}</div>
        </>
    );
}
