import Link from 'next/link';
import { useRouter } from 'next/router';

export function DocSectionNav(props) {
    const router = useRouter();

    return (
        <div className="w-12rem px-3 hidden xl:block" style={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
            <ul className="list-none p-0 m-0 sticky" style={{ top: '7rem' }}>
                {props.docs.map((doc) => (
                    <li key={doc.label}>
                        <Link href={router.basePath + router.pathname + '#' + doc.id}>
                            <button className="p-link block p-1 text-color hover:text-primary" onClick={() => document.getElementById(doc.id).parentElement.scrollIntoView({ block: 'center' })}>
                                {doc.label}
                            </button>
                        </Link>

                        {doc.children && (
                            <ul className="list-none m-0 py-0 pl-3">
                                {doc.children.map((child) => {
                                    return (
                                        <li key={child.label}>
                                            <Link href={router.basePath + router.pathname + '#' + child.id}>
                                                <button
                                                    className="p-link block p-1 text-color text-sm hover:text-primary"
                                                    onClick={() => {
                                                        document.getElementById(child.id).parentElement.scrollIntoView({ block: 'center' });
                                                    }}
                                                >
                                                    {child.label}
                                                </button>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
