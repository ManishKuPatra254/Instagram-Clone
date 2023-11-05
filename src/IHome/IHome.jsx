import { Fragment } from 'react';
import styles from './IHome.module.css';
import { IMainLeftHome } from '../IMainHome/IMainLeftHome/IMainLeftHome'
import { IMainMiddleHome } from '../IMainHome/IMainMiddleHome/IMainMiddleHome'
import { IMainRightHome } from '../IMainHome/IMainRightHome/IMainRightHome'

export function IHome() {
    return (
        <Fragment>
            <div className={styles.main_home}>
                <IMainLeftHome />
                <IMainMiddleHome />
                <IMainRightHome />
            </div>
        </Fragment>
    )
}
