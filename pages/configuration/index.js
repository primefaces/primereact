import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AppendToDoc } from '../../components/doc/configuration/appendtodoc';
import { CSSTransitionDoc } from '../../components/doc/configuration/csstransitiondoc';
import { FilterMatchModeDoc } from '../../components/doc/configuration/filtermatchmodedoc';
import { HideOverlaysDoc } from '../../components/doc/configuration/hideoverlaysdoc';
import { InputStyleDoc } from '../../components/doc/configuration/inputstyledoc';
import { NonceDoc } from '../../components/doc/configuration/noncedoc';
import { NullSortOrderDoc } from '../../components/doc/configuration/nullsortorderdoc';
import { RippleDoc } from '../../components/doc/configuration/rippledoc';
import { ZIndexDoc } from '../../components/doc/configuration/zindexdoc';

const InstallationPage = () => {
    const docs = [
        {
            id: 'appendto',
            label: 'AppendTo',
            component: AppendToDoc
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
