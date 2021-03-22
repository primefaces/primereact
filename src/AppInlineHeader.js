import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppInputStyleSwitch } from './AppInputStyleSwitch';
import { Button } from './components/button/Button';
import AppContentContext from './AppContentContext';

export class AppInlineHeader extends Component {

    static defaultProps = {
        changelogText: '',
        showChangelog: true,
        showInputStyle: false
    }

    static propTypes = {
        changelogText: PropTypes.string,
        showChangelog: PropTypes.bool,
        showInputStyle: PropTypes.bool
    }

    render() {
        return (
            <AppContentContext.Consumer>
                {
                    context => (
                        <>
                            <div className="feature-intro">
                                { this.props.children}

                                { this.props.showChangelog && <Button onClick={() => context.onChangelogBtnClick(this.props.changelogText)} className="layout-changelog-button p-button-outlined p-mt-3" icon="pi pi-list" label={context.changelogText}></Button> }
                            </div>

                            { this.props.showInputStyle && <AppInputStyleSwitch value={context.inputStyle} onChange={({value}) => context.onInputStyleChange(value)} /> }
                        </>
                    )
                }
            </AppContentContext.Consumer>
        )
    }
}
