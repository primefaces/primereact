import React, {Component} from 'react';
import {Paginator} from '../../components/paginator/Paginator';

export class PaginatorDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Paginator</h1>
                        <p>Paginator is a generic widget to display content in paged format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Paginator rows={10} totalRecords={120} rowsPerPageOptions={[10,20,30]}></Paginator>
                </div>
            </div>
        );
    }
}