export function DocSections(props) {
    return (
        <div className="doc-main">
            {props.docs.map((doc) => {
                const Comp = doc.component;

                return (
                    <section key={doc.label}>
                        <Comp id={doc.id} label={doc.label} />
                    </section>
                );
            })}
        </div>
    );
}
