import { useRouter } from 'next/router';

export function DocSections(props) {
    const router = useRouter();

    return (
        <div className="doc-main">
            {props.docs.map((doc) => {
                const Comp = doc.component;

                if (doc.to) {
                    return;
                }

                return (
                    <section key={doc.label}>
                        <Comp id={doc.id} label={doc.label} />
                    </section>
                );
            })}
        </div>
    );
}
