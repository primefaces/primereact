import React, {Component} from 'react';
import {Growl} from '../../components/growl/Growl';
import {FileUpload} from '../../components/fileupload/FileUpload';

export class FileUploadDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
        this.onUpload = this.onUpload.bind(this);
    }

    onUpload(event) {

    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Growl value={this.state.msgs} />

                    <FileUpload name="demo[]" url="http://localhost:4000/upload" onUpload={this.onUpload} 
                                multiple={true} accept="image/*" maxFileSize={1000000}></FileUpload>
                </div>
            </div>
        )
    }
}