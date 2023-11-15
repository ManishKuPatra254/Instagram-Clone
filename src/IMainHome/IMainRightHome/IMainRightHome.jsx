import { Fragment, useState } from 'react';
import styles from './IMainRightHome.module.css';
import { Avatar } from '@mui/material';

export function IMainRightHome() {
    const [buttonFollow, setButtonFollow] = useState(true)

    function handleToggleClick() {
        setButtonFollow(!buttonFollow);
    }
    return (
        <Fragment>
            <div className={styles.main_right_home}>
                <div className={styles.sub_right_bar}>
                    <div className={styles.sub_suggest_bar}>
                        <p>Suggested for you</p>
                        <button>See All</button>
                    </div>
                    <div className={styles.follow_un_bar}>
                        <Avatar>S</Avatar>
                        <p>soumyakashdasmohapatra</p>
                        <button onClick={handleToggleClick}>{buttonFollow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                    <div className={styles.follow_un_bar}>
                        <Avatar>R</Avatar>
                        <p>raj_verma</p>
                        <button onClick={handleToggleClick}>{buttonFollow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                    <div className={styles.follow_un_bar}>
                        <Avatar>S</Avatar>
                        <p>soumya_das</p>
                        <button onClick={handleToggleClick}>{buttonFollow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                    <div className={styles.follow_un_bar}>
                        <Avatar>P</Avatar>
                        <p>panigrahibenudhar_29s</p>
                        <button onClick={handleToggleClick}>{buttonFollow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                    <div className={styles.follow_un_bar}>
                        <Avatar>R</Avatar>
                        <p>iamchiranjeev</p>
                        <button onClick={handleToggleClick}>{buttonFollow ? 'Follow' : 'Unfollow'}</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
