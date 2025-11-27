'use client';

import * as React from 'react';
import { InputText } from 'primereact/inputtext';
import styles from './css-modules-demo.module.css';

export default function CSSModulesDemo() {
    return (
        <div className="flex justify-center">
            <InputText className={styles.myinput} placeholder="Search" />
        </div>
    );
}
