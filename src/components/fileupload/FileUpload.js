import React, {Component} from 'react';
import {Button} from '../button/Button';
import classNames from 'classnames';

export class FileUpload extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        var className = classNames('ui-fileupload ui-widget', this.props.className);
        return (
            <div className={className} style={this.props.style}>

            </div>
        );
    }
}

FileUpload.defaultProps = {
    name: null,
    url: null,
    multiple: false,
    accept: null,
    disabled: false,
    auto: false,
    maxFileSize: null,
    invalidFileSizeMessageSummary: '{0}: Invalid file size, ',
    invalidFileSizeMessageDetail: 'maximum upload size is {0}.',
    style: null,
    className: null,
    previewWidth: 50,
    chooseLabel: 'Choose',
    uploadLabel: 'Upload',
    cancelLabel: 'Cancel',
    onBeforeUpload: null,
    onBeforeSend: null,
    onUpload: null,
    onError: null,
    onClear: null,
    onSelect: null
}

FileUpload.propTypes = {
    name: React.PropTypes.string,
    url: React.PropTypes.string,
    multiple: React.PropTypes.bool,
    accept: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    auto: React.PropTypes.bool,
    maxFileSize: React.PropTypes.number,
    invalidFileSizeMessageSummary: React.PropTypes.string,
    invalidFileSizeMessageDetail: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    previewWidth: React.PropTypes.number,
    chooseLabel: React.PropTypes.string,
    uploadLabel: React.PropTypes.string,
    cancelLabel: React.PropTypes.string,
    onBeforeUpload: React.PropTypes.func,
    onBeforeSend: React.PropTypes.func,
    onUpload: React.PropTypes.func,
    onError: React.PropTypes.func,
    onClear: React.PropTypes.func,
    onSelect: React.PropTypes.func
};