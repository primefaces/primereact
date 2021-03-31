import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from '../../components/inputtext/InputText';
import { Button } from '../../components/button/Button';
import { Dropdown } from '../../components/dropdown/Dropdown';
import { Calendar } from '../../components/calendar/Calendar';
import { Password } from '../../components/password/Password';
import { Checkbox } from '../../components/checkbox/Checkbox';
import { Dialog } from '../../components/dialog/Dialog';
import { Divider } from '../../components/divider/Divider';
import { CountryService } from '../service/CountryService';
import { AppInlineHeader } from '../../AppInlineHeader';
import { classNames } from '../../components/utils/ClassNames';
import './FormDemo.scss';
import { useLiveEditorTabs } from '../liveeditor/LiveEditor';
import { TabView } from '../../components/tabview/TabView';

export const ReactHookFormDemo = () => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { register, control, errors, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div>
            <div className="content-section introduction">
                <AppInlineHeader showInputStyle showChangelog={false}>
                    <h1>React Hook Form</h1>
                    <p>PrimeReact components can be easily used/integrated with <a href="https://react-hook-form.com/">React Hook Form</a>. In this example, a register panel is simulated using React Hook Form.</p>
                </AppInlineHeader>
            </div>

            <div className="content-section implementation form-demo">
                <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                    <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                        <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                        <h5>Registration Successful!</h5>
                        <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                            Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                        </p>
                    </div>
                </Dialog>

                <div className="p-d-flex p-jc-center">
                    <div className="card">
                        <h5 className="p-text-center">Register</h5>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                            <div className="p-field">
                                <span className="p-float-label">
                                    <InputText id="name" name="name" ref={register({ required: 'Name is required.' })} className={classNames({ 'p-invalid': errors.name })} />
                                    <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                                </span>
                                {getFormErrorMessage('name')}
                            </div>
                            <div className="p-field">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText id="email" name="email" ref={register({ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } })}
                                        className={classNames({ 'p-invalid': errors.email })} />
                                    <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                                </span>
                                {getFormErrorMessage('email')}
                            </div>
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Password id="password" name="password" inputRef={register({ required: 'Password is required.' })} toggleMask
                                        className={classNames({ 'p-invalid': errors.password })} header={passwordHeader} footer={passwordFooter} />
                                    <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                                </span>
                                {getFormErrorMessage('password')}
                            </div>
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="date" control={control} defaultValue={null} render={(props) => (
                                        <Calendar id="date" value={props.value} onChange={(e) => props.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                    )} />
                                    <label htmlFor="date">Birthday</label>
                                </span>
                            </div>
                            <div className="p-field">
                                <span className="p-float-label">
                                    <Controller name="country" control={control} defaultValue={null} render={(props) => (
                                        <Dropdown id="country" value={props.value} onChange={(e) => props.onChange(e.value)} options={countries} optionLabel="name" />
                                    )} />
                                    <label htmlFor="country">Country</label>
                                </span>
                            </div>
                            <div className="p-field-checkbox">
                                <Controller name="accept" control={control} defaultValue={false} rules={{ required: true }} render={(props) => (
                                    <Checkbox inputId="accept" onChange={(e) => props.onChange(e.checked)} checked={props.value} className={classNames({ 'p-invalid': errors.accept })} />
                                )} />
                                <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                            </div>

                            <Button type="submit" label="Submit" className="p-mt-2" />
                        </form>
                    </div>
                </div>
            </div>

            <ReactHookFormDoc />
        </div>
    );
}

const ReactHookFormDoc = React.memo(() => {

    const sources = {
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils/ClassNames';
import { CountryService } from '../service/CountryService';
import './FormDemo.css';

export const ReactHookFormDemo = () => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { register, control, errors, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="p-d-flex p-jc-center">
                <div className="card">
                    <h5 className="p-text-center">Register</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="p-field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" ref={register({ required: 'Name is required.' })} className={classNames({ 'p-invalid': errors.name })} />
                                <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" ref={register({ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } })}
                                    className={classNames({ 'p-invalid': errors.email })} />
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Password id="password" name="password" inputRef={register({ required: 'Password is required.' })} toggleMask
                                    className={classNames({ 'p-invalid': errors.password })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="date" control={control} defaultValue={null} render={(props) => (
                                    <Calendar id="date" value={props.value} onChange={(e) => props.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                )} />
                                <label htmlFor="date">Birthday</label>
                            </span>
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="country" control={control} defaultValue={null} render={(props) => (
                                    <Dropdown id="country" value={props.value} onChange={(e) => props.onChange(e.value)} options={countries} optionLabel="name" />
                                )} />
                                <label htmlFor="country">Country</label>
                            </span>
                        </div>
                        <div className="p-field-checkbox">
                            <Controller name="accept" control={control} defaultValue={false} rules={{ required: true }} render={(props) => (
                                <Checkbox inputId="accept" onChange={(e) => props.onChange(e.checked)} checked={props.value} className={classNames({ 'p-invalid': errors.accept })} />
                            )} />
                            <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="p-mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils/ClassNames';
import { CountryService } from '../service/CountryService';
import './FormDemo.css';

export const ReactHookFormDemo = () => {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const countryservice = new CountryService();

    useEffect(() => {
        countryservice.getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { register, control, errors, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="p-d-flex p-jc-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="p-d-flex p-ai-center p-dir-col p-pt-6 p-px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>Registration Successful!</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Your account is registered under name <b>{formData.name}</b> ; it'll be valid next 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="p-d-flex p-jc-center">
                <div className="card">
                    <h5 className="p-text-center">Register</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                        <div className="p-field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" ref={register({ required: 'Name is required.' })} className={classNames({ 'p-invalid': errors.name })} />
                                <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" ref={register({ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } })}
                                    className={classNames({ 'p-invalid': errors.email })} />
                                <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Password id="password" name="password" inputRef={register({ required: 'Password is required.' })} toggleMask
                                    className={classNames({ 'p-invalid': errors.password })} header={passwordHeader} footer={passwordFooter} />
                                <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                            </span>
                            {getFormErrorMessage('password')}
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="date" control={control} defaultValue={null} render={(props) => (
                                    <Calendar id="date" value={props.value} onChange={(e) => props.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                )} />
                                <label htmlFor="date">Birthday</label>
                            </span>
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <Controller name="country" control={control} defaultValue={null} render={(props) => (
                                    <Dropdown id="country" value={props.value} onChange={(e) => props.onChange(e.value)} options={countries} optionLabel="name" />
                                )} />
                                <label htmlFor="country">Country</label>
                            </span>
                        </div>
                        <div className="p-field-checkbox">
                            <Controller name="accept" control={control} defaultValue={false} rules={{ required: true }} render={(props) => (
                                <Checkbox inputId="accept" onChange={(e) => props.onChange(e.checked)} checked={props.value} className={classNames({ 'p-invalid': errors.accept })} />
                            )} />
                            <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                        </div>

                        <Button type="submit" label="Submit" className="p-mt-2" />
                    </form>
                </div>
            </div>
        </div>
    );
}
            `
        }
    };

    const extFiles = {
        'src/demo/FormDemo.css': {
            content: `
.form-demo .card {
    min-width: 450px;
}
.form-demo .card form {
    margin-top: 2rem;
}
.form-demo .card .p-field {
    margin-bottom: 1.5rem;
}
@media screen and (max-width: 960px) {
    .form-demo .card {
        width: 80%;
    }
}
            `
        }
    }

    return (
        <div className="content-section documentation">
            <TabView>
                {
                    useLiveEditorTabs({ name: 'ReactHookFormDemo', sources, service: 'CountryService', data: 'countries', extFiles, dependencies: { 'react-hook-form': '^6.15.5' } })
                }
            </TabView>
        </div>
    )
});
