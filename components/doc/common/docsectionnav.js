import Link from 'next/link';

export function DocSectionNav(props) {
    return (
        <div className="w-12rem px-3 hidden xl:block" style={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
            <ul className="list-none p-0 m-0 sticky" style={{ top: '7rem' }}>
                {props.docs.map((doc) => (
                    <li className="doc-external-link" key={doc.label}>
                        {doc.to ? (
                            <Link href={doc.to}>
                                <a target={'_blank'} className="flex doc-external-link p-link block p-1 text-color hover:text-primary">
                                    {doc.label}
                                    <i className="pi pi-link text-xs"></i>
                                </a>
                            </Link>
                        ) : (
                            <button className="p-link block p-1 text-color hover:text-primary" onClick={() => document.getElementById(doc.id).parentElement.scrollIntoView({ block: 'center', behavior: 'smooth' })}>
                                {doc.label}
                            </button>
                        )}

                        {doc.children && (
                            <ul className="list-none m-0 py-0 pl-3">
                                {doc.children.map((child) => {
                                    return (
                                        <li key={child.label}>
                                            <button className="p-link block p-1 text-color text-sm hover:text-primary" onClick={() => document.getElementById(child.id).parentElement.scrollIntoView({ block: 'center', behavior: 'smooth' })}>
                                                {child.label}
                                            </button>
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
