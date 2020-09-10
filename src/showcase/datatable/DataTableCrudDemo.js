import React, { Component } from 'react';
import classNames from 'classnames';
import { DataTable } from '../../components/datatable/DataTable';
import { Column } from '../../components/column/Column';
import ProductService from '../service/ProductService';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { Toast } from '../../components/toast/Toast';
import { Button } from '../../components/button/Button';
import { FileUpload } from '../../components/fileupload/FileUpload';
import { Rating } from '../../components/rating/Rating';
import { Toolbar } from '../../components/toolbar/Toolbar';
import { InputTextarea } from '../../components/inputtextarea/InputTextarea';
import { RadioButton } from '../../components/radiobutton/RadioButton';
import { InputNumber } from '../../components/inputnumber/InputNumber';
import { Dialog } from '../../components/dialog/Dialog';
import { InputText } from '../../components/inputtext/InputText';
import { LiveEditor } from '../liveeditor/LiveEditor';
import { AppInlineHeader } from '../../AppInlineHeader';
import { CodeHighlight } from '../codehighlight/CodeHighlight';

export class DataTableCrudDemo extends Component {

    emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    constructor(props) {
        super(props);

        this.state = {
            products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: this.emptyProduct,
            selectedProducts: null,
            submitted: false,
            globalFilter: null
        };

        this.productService = new ProductService();
        this.leftToolbarTemplate = this.leftToolbarTemplate.bind(this);
        this.rightToolbarTemplate = this.rightToolbarTemplate.bind(this);
        this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        this.openNew = this.openNew.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.exportCSV = this.exportCSV.bind(this);
        this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
        this.deleteSelectedProducts = this.deleteSelectedProducts.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.hideDeleteProductDialog = this.hideDeleteProductDialog.bind(this);
        this.hideDeleteProductsDialog = this.hideDeleteProductsDialog.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    openNew() {
        this.setState({
            product: this.emptyProduct,
            submitted: false,
            productDialog: true
        });
    }

    hideDialog() {
        this.setState({
            submitted: false,
            productDialog: false
        });
    }

    hideDeleteProductDialog() {
        this.setState({ deleteProductDialog: false });
    }

    hideDeleteProductsDialog() {
        this.setState({ deleteProductsDialog: false });
    }

    saveProduct() {
        let state = { submitted: true };

        if (this.state.product.name.trim()) {
            let products = [...this.state.products];
            let product = {...this.state.product};
            if (this.state.product.id) {
                const index = this.findIndexById(this.state.product.id);

                products[index] = product;
                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                product.id = this.createId();
                product.image = 'product-placeholder.svg';
                products.push(product);
                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            state = {
                ...state,
                products,
                productDialog: false,
                product: this.emptyProduct
            };
        }

        this.setState(state);
    }

    editProduct(product) {
        this.setState({
            product: { ...product },
            productDialog: true
        });
    }

    confirmDeleteProduct(product) {
        this.setState({
            product,
            deleteProductDialog: true
        });
    }

    deleteProduct() {
        let products = this.state.products.filter(val => val.id !== this.state.product.id);
        this.setState({
            products,
            deleteProductDialog: false,
            product: this.emptyProduct
        });
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    findIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId() {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    confirmDeleteSelected() {
        this.setState({ deleteProductsDialog: true });
    }

    deleteSelectedProducts() {
        let products = this.state.products.filter(val => !this.state.selectedProducts.includes(val));
        this.setState({
            products,
            deleteProductsDialog: false,
            selectedProducts: null
        });
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    onCategoryChange(e) {
        let product = {...this.state.product};
        product['category'] = e.value;
        this.setState({ product });
    }

    onInputChange(e, name) {
        const val = (e.target && e.target.value) || '';
        let product = {...this.state.product};
        product[`${name}`] = val;

        this.setState({ product });
    }

    onInputNumberChange(e, name) {
        const val = e.value || 0;
        let product = {...this.state.product};
        product[`${name}`] = val;

        this.setState({ product });
    }

    leftToolbarTemplate() {
        return (
            <>
                <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={this.openNew} />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={this.confirmDeleteSelected} disabled={!this.state.selectedProducts || !this.state.selectedProducts.length} />
            </>
        )
    }

    rightToolbarTemplate() {
        return (
            <>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={this.exportCSV} />
            </>
        )
    }

    imageBodyTemplate(rowData) {
        return <img src={`showcase/demo/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readonly cancel={false} />;
    }

    statusBodyTemplate(rowData) {
        return <span className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}>{rowData.inventoryStatus}</span>;
    }

    actionBodyTemplate(rowData) {
        return (
            <>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => this.editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.confirmDeleteProduct(rowData)} />
            </>
        );
    }

    render() {
        const header = (
            <div className="table-header">
                <h5 className="p-m-0">Manage Products</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Search..." />
                </span>
            </div>
        );
        const productDialogFooter = (
            <>
                <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={this.hideDialog} />
                <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={this.saveProduct} />
            </>
        );
        const deleteProductDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteProduct} />
            </>
        );
        const deleteProductsDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductsDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteSelectedProducts} />
            </>
        );

        return (
            <div>
                <div className="content-section introduction">
                    <AppInlineHeader changelogText="dataTable">
                        <h1>DataTable <span>Crud</span></h1>
                        <p>This samples demonstrates a CRUD implementation using various PrimeReact components.</p>
                    </AppInlineHeader>
                </div>

                <div className="content-section implementation datatable-crud-demo">
                    <Toast ref={(el) => this.toast = el} />

                    <div className="card">
                        <Toolbar className="p-mb-4" left={this.leftToolbarTemplate} right={this.rightToolbarTemplate}></Toolbar>

                        <DataTable ref={(el) => this.dt = el} value={this.state.products} selection={this.state.selectedProducts} onSelectionChange={(e) => this.setState({ selectedProducts: e.value })}
                            dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                            globalFilter={this.state.globalFilter}
                            header={header}>

                            <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                            <Column field="code" header="Code" sortable></Column>
                            <Column field="name" header="Name" sortable></Column>
                            <Column header="Image" body={this.imageBodyTemplate}></Column>
                            <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                            <Column field="category" header="Category" sortable></Column>
                            <Column field="rating" header="Reviews" body={this.ratingBodyTemplate} sortable></Column>
                            <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} sortable></Column>
                            <Column body={this.actionBodyTemplate}></Column>
                        </DataTable>
                    </div>

                    <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={this.hideDialog}>
                        {this.state.product.image && <img src={`showcase/demo/images/product/${this.state.product.image}`} alt={this.state.product.image} className="product-image" />}
                        <div className="p-field">
                            <label htmlFor="name">Name</label>
                            <InputText id="name" value={this.state.product.name} onChange={(e) => this.onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} />
                            {this.state.submitted && !this.state.product.name && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="p-field">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                        </div>

                        <div className="p-field">
                            <label className="p-mb-3">Category</label>
                            <div className="p-formgrid p-grid">
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category1" name="category" value="Accessories" onChange={this.onCategoryChange} checked={this.state.product.category === 'Accessories'} />
                                    <label htmlFor="category1">Accessories</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category2" name="category" value="Clothing" onChange={this.onCategoryChange} checked={this.state.product.category === 'Clothing'} />
                                    <label htmlFor="category2">Clothing</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category3" name="category" value="Electronics" onChange={this.onCategoryChange} checked={this.state.product.category === 'Electronics'} />
                                    <label htmlFor="category3">Electronics</label>
                                </div>
                                <div className="p-field-radiobutton p-col-6">
                                    <RadioButton inputId="category4" name="category" value="Fitness" onChange={this.onCategoryChange} checked={this.state.product.category === 'Fitness'} />
                                    <label htmlFor="category4">Fitness</label>
                                </div>
                            </div>
                        </div>

                        <div className="p-formgrid p-grid">
                            <div className="p-field p-col">
                                <label htmlFor="price">Price</label>
                                <InputNumber id="price" value={this.state.product.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className="p-field p-col">
                                <label htmlFor="quantity">Quantity</label>
                                <InputNumber id="quantity" value={this.state.product.quantity} onValueChange={(e) => this.onInputNumberChange(e, 'quantity')} integeronly />
                            </div>
                        </div>
                    </Dialog>

                    <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={this.hideDeleteProductDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                            {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
                        </div>
                    </Dialog>

                    <Dialog visible={this.state.deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={this.hideDeleteProductsDialog}>
                        <div className="confirmation-content">
                            <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                            {this.state.product && <span>Are you sure you want to delete the selected products?</span>}
                        </div>
                    </Dialog>
                </div>

                <DataTableCrudDoc />

            </div>
        );
    }
}

export class DataTableCrudDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import classNames from 'classnames';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ProductService from '../service/ProductService';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';

export class DataTableCrudDemo extends Component {

    emptyProduct = {
        id: null,
        name: '',
        image: null,
        description: '',
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: 'INSTOCK'
    };

    constructor(props) {
        super(props);

        this.state = {
            products: null,
            productDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: this.emptyProduct,
            selectedProducts: null,
            submitted: false,
            globalFilter: null
        };

        this.productService = new ProductService();
        this.leftToolbarTemplate = this.leftToolbarTemplate.bind(this);
        this.rightToolbarTemplate = this.rightToolbarTemplate.bind(this);
        this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
        this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
        this.ratingBodyTemplate = this.ratingBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        this.openNew = this.openNew.bind(this);
        this.hideDialog = this.hideDialog.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.confirmDeleteProduct = this.confirmDeleteProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.exportCSV = this.exportCSV.bind(this);
        this.confirmDeleteSelected = this.confirmDeleteSelected.bind(this);
        this.deleteSelectedProducts = this.deleteSelectedProducts.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.hideDeleteProductDialog = this.hideDeleteProductDialog.bind(this);
        this.hideDeleteProductsDialog = this.hideDeleteProductsDialog.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    formatCurrency(value) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    openNew() {
        this.setState({
            product: this.emptyProduct,
            submitted: false,
            productDialog: true
        });
    }

    hideDialog() {
        this.setState({
            submitted: false,
            productDialog: false
        });
    }

    hideDeleteProductDialog() {
        this.setState({ deleteProductDialog: false });
    }

    hideDeleteProductsDialog() {
        this.setState({ deleteProductsDialog: false });
    }

    saveProduct() {
        let state = { submitted: true };

        if (this.state.product.name.trim()) {
            let products = [...this.state.products];
            let product = {...this.state.product};
            if (this.state.product.id) {
                const index = this.findIndexById(this.state.product.id);

                products[index] = product;
                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            }
            else {
                product.id = this.createId();
                product.image = 'product-placeholder.svg';
                products.push(product);
                this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            state = {
                ...state,
                products,
                productDialog: false,
                product: this.emptyProduct
            };
        }

        this.setState(state);
    }

    editProduct(product) {
        this.setState({
            product: { ...product },
            productDialog: true
        });
    }

    confirmDeleteProduct(product) {
        this.setState({
            product,
            deleteProductDialog: true
        });
    }

    deleteProduct() {
        let products = this.state.products.filter(val => val.id !== this.state.product.id);
        this.setState({
            products,
            deleteProductDialog: false,
            product: this.emptyProduct
        });
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    }

    findIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.state.products.length; i++) {
            if (this.state.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId() {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    confirmDeleteSelected() {
        this.setState({ deleteProductsDialog: true });
    }

    deleteSelectedProducts() {
        let products = this.state.products.filter(val => !this.state.selectedProducts.includes(val));
        this.setState({
            products,
            deleteProductsDialog: false,
            selectedProducts: null
        });
        this.toast.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    }

    onCategoryChange(e) {
        let product = {...this.state.product};
        product['category'] = e.value;
        this.setState({ product });
    }

    onInputChange(e, name) {
        const val = (e.target && e.target.value) || '';
        let product = {...this.state.product};
        product[\`\${name}\`] = val;

        this.setState({ product });
    }

    onInputNumberChange(e, name) {
        const val = e.value || 0;
        let product = {...this.state.product};
        product[\`\${name}\`] = val;

        this.setState({ product });
    }

    leftToolbarTemplate() {
        return (
            <>
                <Button label="New" icon="pi pi-plus" className="p-button-success p-mr-2" onClick={this.openNew} />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={this.confirmDeleteSelected} disabled={!this.state.selectedProducts || !this.state.selectedProducts.length} />
            </>
        )
    }

    rightToolbarTemplate() {
        return (
            <>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="p-mr-2 p-d-inline-block" />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={this.exportCSV} />
            </>
        )
    }

    imageBodyTemplate(rowData) {
        return <img src={\`showcase/demo/images/product/\${rowData.image}\`} alt={rowData.image} className="product-image" />
    }

    priceBodyTemplate(rowData) {
        return this.formatCurrency(rowData.price);
    }

    ratingBodyTemplate(rowData) {
        return <Rating value={rowData.rating} readonly cancel={false} />;
    }

    statusBodyTemplate(rowData) {
        return <span className={\`product-badge status-\${rowData.inventoryStatus.toLowerCase()}\`}>{rowData.inventoryStatus}</span>;
    }

    actionBodyTemplate(rowData) {
        return (
            <>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-mr-2" onClick={() => this.editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => this.confirmDeleteProduct(rowData)} />
            </>
        );
    }

    render() {
        const header = (
            <div className="table-header">
                <h5 className="p-m-0">Manage Products</h5>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Search..." />
                </span>
            </div>
        );
        const productDialogFooter = (
            <>
                <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={this.hideDialog} />
                <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={this.saveProduct} />
            </>
        );
        const deleteProductDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteProduct} />
            </>
        );
        const deleteProductsDialogFooter = (
            <>
                <Button label="No" icon="pi pi-times" className="p-button-text" onClick={this.hideDeleteProductsDialog} />
                <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={this.deleteSelectedProducts} />
            </>
        );

        return (
            <div className="datatable-crud-demo">
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <Toolbar className="p-mb-4" left={this.leftToolbarTemplate} right={this.rightToolbarTemplate}></Toolbar>

                    <DataTable ref={(el) => this.dt = el} value={this.state.products} selection={this.state.selectedProducts} onSelectionChange={(e) => this.setState({ selectedProducts: e.value })}
                        dataKey="id" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={this.state.globalFilter}
                        header={header}>

                        <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                        <Column field="code" header="Code" sortable></Column>
                        <Column field="name" header="Name" sortable></Column>
                        <Column header="Image" body={this.imageBodyTemplate}></Column>
                        <Column field="price" header="Price" body={this.priceBodyTemplate} sortable></Column>
                        <Column field="category" header="Category" sortable></Column>
                        <Column field="rating" header="Reviews" body={this.ratingBodyTemplate} sortable></Column>
                        <Column field="inventoryStatus" header="Status" body={this.statusBodyTemplate} sortable></Column>
                        <Column body={this.actionBodyTemplate}></Column>
                    </DataTable>
                </div>

                <Dialog visible={this.state.productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={this.hideDialog}>
                    {this.state.product.image && <img src={\`showcase/demo/images/product/\${this.state.product.image}\`} alt={this.state.product.image} className="product-image" />}
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText id="name" value={this.state.product.name} onChange={(e) => this.onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': this.state.submitted && !this.state.product.name })} />
                        {this.state.submitted && !this.state.product.name && <small className="p-invalid">Name is required.</small>}
                    </div>
                    <div className="p-field">
                        <label htmlFor="description">Description</label>
                        <InputTextarea id="description" value={this.state.product.description} onChange={(e) => this.onInputChange(e, 'description')} required rows={3} cols={20} />
                    </div>

                    <div className="p-field">
                        <label className="p-mb-3">Category</label>
                        <div className="p-formgrid p-grid">
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton id="category1" name="category" value="Accessories" onChange={this.onCategoryChange} checked={this.state.product.category === 'Accessories'} />
                                <label htmlFor="category1">Accessories</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton id="category2" name="category" value="Clothing" onChange={this.onCategoryChange} checked={this.state.product.category === 'Clothing'} />
                                <label htmlFor="category2">Clothing</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton id="category3" name="category" value="Electronics" onChange={this.onCategoryChange} checked={this.state.product.category === 'Electronics'} />
                                <label htmlFor="category3">Electronics</label>
                            </div>
                            <div className="p-field-radiobutton p-col-6">
                                <RadioButton id="category4" name="category" value="Fitness" onChange={this.onCategoryChange} checked={this.state.product.category === 'Fitness'} />
                                <label htmlFor="category4">Fitness</label>
                            </div>
                        </div>
                    </div>

                    <div className="p-formgrid p-grid">
                        <div className="p-field p-col">
                            <label htmlFor="price">Price</label>
                            <InputNumber id="price" value={this.state.product.price} onValueChange={(e) => this.onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <div className="p-field p-col">
                            <label htmlFor="quantity">Quantity</label>
                            <InputNumber id="quantity" value={this.state.product.quantity} onValueChange={(e) => this.onInputNumberChange(e, 'quantity')} integeronly />
                        </div>
                    </div>
                </Dialog>

                <Dialog visible={this.state.deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={this.hideDeleteProductDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.product && <span>Are you sure you want to delete <b>{this.state.product.name}</b>?</span>}
                    </div>
                </Dialog>

                <Dialog visible={this.state.deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={this.hideDeleteProductsDialog}>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={{ fontSize: '2rem'}} />
                        {this.state.product && <span>Are you sure you want to delete the selected products?</span>}
                    </div>
                </Dialog>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';

const DataTableCrudDemo = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [car, setCar] = useState(null);
    const [displayDialog, setDisplayDialog] = useState(false);
    const carservice = new CarService();
    let newCar = false;

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSave = () => {
        let _cars = [...cars];
        if (newCar)
            _cars.push(car);
        else
            _cars[findSelectedCarIndex()] = car;

        setCars(cars);
        setSelectedCar(null);
        setCar(null);
        setDisplayDialog(false);
    };

    const onDelete = () => {
        let index = findSelectedCarIndex();

        setCars(cars.filter((val,i) => i !== index));
        setSelectedCar(null);
        setCar(null);
        setDisplayDialog(false);
    };

    const findSelectedCarIndex = () => {
        return cars.indexOf(selectedCar);
    };

    const updateProperty = (property, value) => {
        car[property] = value;
        setCar(car);
    }

    const onCarSelect = (e) => {
        newCar = false;

        setCar(Object.assign({}, e.data));
        setDisplayDialog(true);
    };

    const addNew = () => {
        newCar = true;

        setCar({vin:'', year: '', brand: '', color: ''});
        setDisplayDialog(true);
    };

    const header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;

    const footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="Add" icon="pi pi-plus" onClick={addNew}/>
    </div>;

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Delete" icon="pi pi-times" onClick={onDelete}/>
            <Button label="Save" icon="pi pi-check" onClick={onSave}/>
        </div>;

    return (
        <div>
            <DataTable value={cars} paginator rows={15}  header={header} footer={footer}
                        selectionMode="single" selection={selectedCar} onSelectionChange={e => setSelectedCar(e.value)}
                        onRowSelect={onCarSelect}>
                <Column field="vin" header="Vin" sortable />
                <Column field="year" header="Year" sortable />
                <Column field="brand" header="Brand" sortable />
                <Column field="color" header="Color" sortable />
            </DataTable>

            <Dialog visible={displayDialog} style={{width: '300px'}} header="Car Details" modal footer={dialogFooter} onHide={() => setDisplayDialog(false)}
                blockScroll={false}>
                {
                    car &&

                    <div className="p-grid p-fluid">
                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="vin">Vin</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="vin" onChange={(e) => {updateProperty('vin', e.target.value)}} value={car.vin}/>
                        </div>

                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="year">Year</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="year" onChange={(e) => {updateProperty('year', e.target.value)}} value={car.year}/>
                        </div>

                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="brand">Brand</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="brand" onChange={(e) => {updateProperty('brand', e.target.value)}} value={car.brand}/>
                        </div>

                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="color">Color</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="color" onChange={(e) => {updateProperty('color', e.target.value)}} value={car.color}/>
                        </div>
                    </div>
                }
            </Dialog>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CarService} from '../service/CarService';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';

const DataTableCrudDemo = () => {
    const [cars, setCars] = useState<any>([]);
    const [selectedCar, setSelectedCar] = useState<any>(null);
    const [car, setCar] = useState<any>(null);
    const [displayDialog, setDisplayDialog] = useState(false);
    const carservice = new CarService();
    let newCar = false;

    useEffect(() => {
        carservice.getCarsSmall().then(data => setCars(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSave = () => {
        let _cars: any = [...cars];
        if (newCar)
            _cars.push(car);
        else
            _cars[findSelectedCarIndex()] = car;

        setCars(cars);
        setSelectedCar(null);
        setCar(null);
        setDisplayDialog(false);
    };

    const onDelete = () => {
        let index = findSelectedCarIndex();

        setCars(cars.filter((val: any, i: number) => i !== index));
        setSelectedCar(null);
        setCar(null);
        setDisplayDialog(false);
    };

    const findSelectedCarIndex = () => {
        return cars.indexOf(selectedCar);
    };

    const updateProperty = (property: any, value: any) => {
        car[property] = value;
        setCar(car);
    }

    const onCarSelect = (e: any) => {
        newCar = false;

        setCar(Object.assign({}, e.data));
        setDisplayDialog(true);
    };

    const addNew = () => {
        newCar = true;

        setCar({vin:'', year: '', brand: '', color: ''});
        setDisplayDialog(true);
    };

    const header = <div className="p-clearfix" style={{lineHeight:'1.87em'}}>CRUD for Cars </div>;

    const footer = <div className="p-clearfix" style={{width:'100%'}}>
        <Button style={{float:'left'}} label="Add" icon="pi pi-plus" onClick={addNew}/>
    </div>;

    const dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
            <Button label="Delete" icon="pi pi-times" onClick={onDelete}/>
            <Button label="Save" icon="pi pi-check" onClick={onSave}/>
        </div>;

    return (
        <div>
            <DataTable value={cars} paginator rows={15}  header={header} footer={footer}
                        selectionMode="single" selection={selectedCar} onSelectionChange={e => setSelectedCar(e.value)}
                        onRowSelect={onCarSelect}>
                <Column field="vin" header="Vin" sortable />
                <Column field="year" header="Year" sortable />
                <Column field="brand" header="Brand" sortable />
                <Column field="color" header="Color" sortable />
            </DataTable>

            <Dialog visible={displayDialog} style={{width: '300px'}} header="Car Details" modal footer={dialogFooter} onHide={() => setDisplayDialog(false)}
                blockScroll={false}>
                {
                    car &&

                    <div className="p-grid p-fluid">
                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="vin">Vin</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="vin" onChange={(e) => {updateProperty('vin', (e.target as HTMLInputElement).value)}} value={car.vin}/>
                        </div>

                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="year">Year</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="year" onChange={(e) => {updateProperty('year', (e.target as HTMLInputElement).value)}} value={car.year}/>
                        </div>

                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="brand">Brand</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="brand" onChange={(e) => {updateProperty('brand', (e.target as HTMLInputElement).value)}} value={car.brand}/>
                        </div>

                        <div className="p-col-4" style={{padding:'.75em'}}><label htmlhtmlFor="color">Color</label></div>
                        <div className="p-col-8" style={{padding:'.5em'}}>
                            <InputText id="color" onChange={(e) => {updateProperty('color', (e.target as HTMLInputElement).value)}} value={car.color}/>
                        </div>
                    </div>
                }
            </Dialog>
        </div>
    );
}

                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Source">
                        <LiveEditor name="DataTableCrudDemo" sources={this.sources} service="CarService" data="cars-small" />
<CodeHighlight lang="scss">
{`
.datatable-crud-demo {
    .table-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .product-image {
        width: 100px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
    }

    .confirmation-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
