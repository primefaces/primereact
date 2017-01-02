import React, {Component} from 'react';
import {Growl} from '../../components/growl/Growl';
import {FileUpload} from '../../components/fileupload/FileUpload';

export class FileUploadDemo extends Component {
        
    constructor() {
        super();
        this.state = {};
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
                    
                </div>
            </div>
        )
    }
}