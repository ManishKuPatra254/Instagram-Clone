import { Fragment } from 'react';
import styles from './IMainLeftHome.module.css';
import instalogo from '../../assets/insta 1.png'

export function IMainLeftHome() {
    return (
        <Fragment>
            <div className={styles.main_left_home}>
                <img src={instalogo} alt="" />
            </div>
        </Fragment>
    )
}
