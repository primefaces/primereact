import { DocSectionText } from '@/components/doc/common/docsectiontext';

export const Wireframe = (props) => {
    return (
        <>
            <DocSectionText {...props} />
            <div>
                <img className="w-full" src="https://primefaces.org/cdn/primevue/images/pt/wireframe-placeholder.jpg" alt="pt_image" />
            </div>
        </>
    );
};
