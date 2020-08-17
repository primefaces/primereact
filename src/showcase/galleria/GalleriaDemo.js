import React, { Component } from 'react';
import { PhotoService } from '../service/PhotoService';
import { Galleria } from '../../components/galleria/Galleria';
import { AppInlineHeader } from '../../AppInlineHeader';
import { GalleriaDoc } from './GalleriaDoc';

export class GalleriaDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: null
        };

        this.galleriaService = new PhotoService();
        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
    }

    componentDidMount() {
        this.galleriaService.getImages().then(data => this.setState({ images: data }));
    }

    itemTemplate(item) {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="galleria">
                        <h1>Galleria</h1>
                        <p>Galleria is a content gallery component.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <Galleria value={this.state.images} responsiveOptions={this.responsiveOptions} numVisible={5} style={{maxWidth: '640px'}}
                            item={this.itemTemplate} thumbnail={this.thumbnailTemplate} />
                    </div>
                </div>

                <GalleriaDoc />
            </div>
        );
    }
}
