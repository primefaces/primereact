import { createStyles } from '@primereact/styles/utils';
import type { PasswordInstance } from '@primereact/types/shared/password';
import { style } from '@primeuix/styles/password';
import { isNotEmpty } from '@primeuix/utils';

const theme = `
${style}

.p-password:has(.p-password-strength) {
    flex-direction: column;
}

.p-password-strength {
    display: flex;
    flex-direction: row;
    padding-block: 1rem;
    gap: 0.5rem;
    width: 100%;
}

.p-password-meter {
    flex: 1;
    transition: all 0.3s;
}

.p-password-strength .p-password-meter {
    height: 0.5rem;
    min-width: 2rem;
}

.p-password:has(.p-password-strength) .p-password-meter {
    width: 100%;
    height: 0.5rem;
}
`;

export const styles = createStyles<PasswordInstance>({
    name: 'password',
    style: theme,
    classes: {
        root: ({ props, instance }) => [
            'p-password p-component p-inputwrapper',
            {
                'p-inputwrapper-filled': isNotEmpty(props.value) || isNotEmpty(props.defaultValue),
                'p-inputwrapper-focus': instance.state.focused,
                'p-password-fluid': props.fluid
            }
        ],
        input: 'p-password-input',
        strength: 'p-password-strength',
        meter: 'p-password-meter',
        panel: 'p-password-overlay',
        clearIcon: 'p-password-clear-icon'
    }
});
