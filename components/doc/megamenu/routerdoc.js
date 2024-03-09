import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function RouterDoc(props) {
    const code = {
        basic: `
{
    label: 'Log out',
    icon: 'pi pi-signout',
    url: 'https://www.react.dev/',
    command: () => {
        router.push('/installation');
    }
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Items with navigation are defined with <i>command</i> property to be able to use a router link component, an external link or programmatic navigation.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
