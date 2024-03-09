import { DocComponent } from '@/components/doc/common/doccomponent';
import { AppendToDoc } from '@/components/doc/configuration/appendtodoc';
import { CSSTransitionDoc } from '@/components/doc/configuration/csstransitiondoc';
import { FilterMatchModeDoc } from '@/components/doc/configuration/filtermatchmodedoc';
import { HideOverlaysDoc } from '@/components/doc/configuration/hideoverlaysdoc';
import { InputStyleDoc } from '@/components/doc/configuration/inputstyledoc';
import { AddLocaleDoc } from '@/components/doc/configuration/locale/addlocaledoc';
import { ImportDoc } from '@/components/doc/configuration/locale/importdoc';
import { RepositoryDoc } from '@/components/doc/configuration/locale/repositorydoc';
import { SetLocaleDoc } from '@/components/doc/configuration/locale/setlocaledoc';
import { SetupLocaleDoc } from '@/components/doc/configuration/locale/setuplocaledoc';
import { NonceDoc } from '@/components/doc/configuration/noncedoc';
import { NullSortOrderDoc } from '@/components/doc/configuration/nullsortorderdoc';
import { RippleDoc } from '@/components/doc/configuration/rippledoc';
import { StyleContainer } from '@/components/doc/configuration/stylecontainer';
import { ZIndexDoc } from '@/components/doc/configuration/zindexdoc';

const InstallationPage = () => {
    const docs = [
        {
            id: 'appendto',
            label: 'AppendTo',
            component: AppendToDoc
        },
        {
            id: 'stylecontainer',
            label: 'StyleContainer',
            component: StyleContainer
        },
        {
            id: 'csstransition',
            label: 'CSS Transition',
            component: CSSTransitionDoc
        },
        {
            id: 'filtermatchmode',
            label: 'Filter Mode',
            component: FilterMatchModeDoc
        },
        {
            id: 'hideoverlays',
            label: 'Hide Overlays on Viewport Change',
            component: HideOverlaysDoc
        },
        {
            id: 'inputstyle',
            label: 'InputStyle',
            component: InputStyleDoc
        },
        {
            id: 'nonce',
            label: 'Nonce',
            component: NonceDoc
        },
        {
            id: 'nullsortorder',
            label: 'Null Sort Order',
            component: NullSortOrderDoc
        },
        {
            id: 'ripple',
            label: 'Ripple',
            component: RippleDoc
        },
        {
            id: 'zindex',
            label: 'ZIndex',
            component: ZIndexDoc
        },
        {
            id: 'Locale',
            label: 'Locale',
            children: [
                {
                    id: 'setup',
                    label: 'Setup',
                    component: SetupLocaleDoc
                },
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'setlocale',
                    label: 'Set Locale',
                    component: SetLocaleDoc
                },
                {
                    id: 'addlocale',
                    label: 'Add Locale',
                    component: AddLocaleDoc
                },
                {
                    id: 'repositorydoc',
                    label: 'Repository',
                    component: RepositoryDoc
                }
            ]
        }
    ];

    return (
        <DocComponent
            title="Configuration - PrimeReact"
            header="Configuration"
            description="Global configuration options of the components."
            componentDocs={docs}
            apiDocs={['API']}
            apiExclude={{ interfaces: ['PrimeIconsOptions'], types: 'excludeAll' }}
        />
    );
};

export default InstallationPage;
