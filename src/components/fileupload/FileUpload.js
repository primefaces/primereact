import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../button/Button';
import {Messages} from '../messages/Messages';
import {ProgressBar} from '../progressbar/ProgressBar';
import DomHandler from '../utils/DomHandler';
import classNames from 'classnames';

export class FileUpload extends Component {

    static defaultProps = {
        id: null,
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

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        url: PropTypes.string,
        multiple: PropTypes.bool,
        accept: PropTypes.string,
        disabled: PropTypes.bool,
        auto: PropTypes.bool,
        maxFileSize: PropTypes.number,
        invalidFileSizeMessageSummary: PropTypes.string,
        invalidFileSizeMessageDetail: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        previewWidth: PropTypes.number,
        chooseLabel: PropTypes.string,
        uploadLabel: PropTypes.string,
        cancelLabel: PropTypes.string,
        onBeforeUpload: PropTypes.func,
        onBeforeSend: PropTypes.func,
        onUpload: PropTypes.func,
        onError: PropTypes.func,
        onClear: PropTypes.func,
        onSelect: PropTypes.func
    };
    
    constructor(props) {
        super(props);
        this.state = {files:[], msgs: []};
        this.upload = this.upload.bind(this);
        this.clear = this.clear.bind(this);
        this.onChooseClick = this.onChooseClick.bind(this);
        this.onFileSelect = this.onFileSelect.bind(this);
        this.onDragEnter = this.onDragEnter.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    hasFiles() {
        return this.state.files && this.state.files.length > 0;
    }

    isImage(file) {
        return /^image\//.test(file.type);
    }

    remove(index) {
        var currentFiles = [...this.state.files];
        currentFiles.splice(index, 1);
        this.setState({files: currentFiles});
    }

    formatSize(bytes) {
        if(bytes === 0) {
            return '0 B';
        }
        let k = 1000,
        dm = 3,
        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
        
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    onChooseClick(event) {
        this.fileInput.value = null;
        this.fileInput.click();
    }

    onFileSelect(event) {
        this.setState({msgs:[]});
        var selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for(let i = 0; i < selectedFiles.length; i++) {
            let file = selectedFiles[i];
            if(this.validate(file)) {
                if(this.isImage(file)) {
                    file.objectURL = window.URL.createObjectURL(file);
                }
                
                this.setState({files: [...this.state.files, file]});
            }
        }
        
        if(this.props.onSelect) {
            this.props.onSelect({originalEvent: event, files: this.state.files});
        }
        
        if(this.hasFiles() && this.props.auto) {
            this.upload();
        }
    }

    validate(file) {
        if(this.props.maxFileSize && file.size > this.props.maxFileSize) {
            var messages = this.state.msgs.slice();
            messages.push({
                severity: 'error', 
                summary: this.props.invalidFileSizeMessageSummary.replace('{0}', file.name), 
                detail: this.props.invalidFileSizeMessageDetail.replace('{0}', this.formatSize(this.props.maxFileSize))
            });
            this.setState({msgs:messages});
            return false;
        }
        
        return true;
    }

    upload() {
        this.setState({msgs:[]});
        var xhr = new XMLHttpRequest();
        var formData = new FormData();

        if(this.props.onBeforeUpload) {
            this.props.onBeforeUpload({
                'xhr': xhr,
                'formData': formData 
            });
        }
		
        for(var file of this.state.files) {
            formData.append(this.props.name, file, file.name);
        }

        xhr.upload.addEventListener('progress', (event) => {
            if(event.lengthComputable) {
              this.setState({progress: Math.round((event.loaded * 100) / event.total)});
            }
          }, false);

        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
               this.setState({progress: 0});
                
                if(xhr.status >= 200 && xhr.status < 300) {
                    if(this.props.onUpload)
                        this.props.onUpload({xhr: xhr, files: this.files});
                }
                else {
                    if(this.props.onError)
                        this.props.onError.emit({xhr: xhr, files: this.files});
                }

                this.clear();
            }
        };
        
        xhr.open('POST', this.props.url, true);
		
        if(this.props.onBeforeSend) {
            this.props.onBeforeSend({
                'xhr': xhr,
                'formData': formData 
            });
        }
        
        xhr.send(formData);
    }

    clear() {
        this.setState({files:[]});

        if(this.props.onClear) {
            this.props.onClear();
        }
    }

    onDragEnter(event) {
        if(!this.props.disabled) {
            event.stopPropagation();
            event.preventDefault();
        }
    }
    
    onDragOver(event) {
        if(!this.props.disabled) {
            DomHandler.addClass(this.content, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
        }
    }
    
    onDragLeave(event) {
        if(!this.props.disabled) {
            DomHandler.removeClass(this.content, 'ui-fileupload-highlight');
        }
    }
    
    onDrop(event) {
        if(!this.props.disabled) {
            DomHandler.removeClass(this.content, 'ui-fileupload-highlight');
            event.stopPropagation();
            event.preventDefault();
            
            this.onFileSelect(event);
        }
    }

    render() {
        var className = classNames('ui-fileupload ui-widget', this.props.className);
        var chooseButton = <Button iconPos="left" label={this.props.chooseLabel} icon="fa-plus" className="ui-fileupload-choose" onClick={this.onChooseClick} disabled={this.props.disabled}>
                                <input type="file" onChange={this.onFileSelect} multiple={this.props.multiple} accept={this.props.accept} disabled={this.props.disabled} ref={(el) => {this.fileInput = el;}}/>
                            </Button>;

        if(!this.props.auto) {
            var uploadButton = <Button iconPos="left" label={this.props.uploadLabel} icon="fa-upload" onClick={this.upload} disabled={this.props.disabled} />;
            var cancelButton = <Button iconPos="left" label={this.props.cancelLabel }icon="fa-close" onClick={this.clear} disabled={this.props.disabled} />;
        }

        if(this.hasFiles()) {
            var filesList = <div className="ui-fileupload-files">
                                {
                                    this.state.files.map((file,index) => {
                                        var preview = this.isImage(file) ? <div><img alt={file.name} role="presentation" src={file.objectURL} width={this.props.previewWidth} /></div> : null;
                                        var fileName = <div>{file.name}</div>;
                                        var size = <div>{this.formatSize(file.size)}</div>;
                                        var removeButton = <div><Button type="button" icon="fa-close" onClick={(event) => this.remove(index)} /></div>

                                        return <div className="ui-fileupload-row" key={file.name + file.type}>
                                                 {preview}
                                                 {fileName}
                                                 {size}
                                                 {removeButton}
                                            </div>
                                    })
                                }
                            </div>;

            var progressBar = <ProgressBar value={this.state.progress} showValue={false} />;
        }
        

        return (
            <div id={this.props.id} className={className} style={this.props.style}>
                <div className="ui-fileupload-buttonbar ui-widget-header ui-corner-top">
                    {chooseButton}
                    {uploadButton}
                    {cancelButton}
                </div>
                <div className="ui-fileupload-content ui-widget-content ui-corner-bottom" onDragEnter={this.onDragEnter} onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} onDrop={this.onDrop}
                    ref={(el) => {this.content = el;}}>
                    {progressBar}
                    <Messages value={this.state.msgs} />
                    {filesList}
                </div>
            </div>
        );
    }
}