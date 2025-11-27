'use client';

import { Switch } from 'primereact/switch';

export default function ScopedTokensDemo() {
    const amberSwitch = {
        handle: {
            borderRadius: '4px'
        },
        colorScheme: {
            light: {
                root: {
                    checkedBackground: '{amber.500}',
                    checkedHoverBackground: '{amber.600}',
                    borderRadius: '4px'
                },
                handle: {
                    checkedBackground: '{amber.50}',
                    checkedHoverBackground: '{amber.100}'
                }
            },
            dark: {
                root: {
                    checkedBackground: '{amber.400}',
                    checkedHoverBackground: '{amber.300}',
                    borderRadius: '4px'
                },
                handle: {
                    checkedBackground: '{amber.900}',
                    checkedHoverBackground: '{amber.800}'
                }
            }
        }
    };

    return (
        <div className="flex justify-center gap-4">
            <Switch defaultChecked>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>
            <Switch defaultChecked dt={amberSwitch}>
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
            </Switch>
        </div>
    );
}
