import React, { Component } from 'react';
import { Fieldset } from '../../components/fieldset/Fieldset';
import { FieldsetDoc } from './FieldsetDoc';
import { AppInlineHeader } from '../../AppInlineHeader';

export class FieldsetDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="fieldset">
                        <h1>Fieldset</h1>
                        <p>Fieldset is a grouping component with a content toggle feature.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Regular</h5>
                        <Fieldset legend="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Fieldset>

                        <h5>Toggleable</h5>
                        <Fieldset legend="Header" toggleable>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </Fieldset>
                    </div>
                </div>

                <FieldsetDoc />
            </div>
        )
    }
}
