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
                    The <i>command</i> property of a menuitem defines the callback to run when an item is activated by click or a key event.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
