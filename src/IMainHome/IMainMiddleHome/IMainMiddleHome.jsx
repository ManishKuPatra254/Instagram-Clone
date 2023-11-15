import { Fragment, useEffect, useState } from 'react';
import styles from './IMainMiddleHome.module.css';
import { Avatar } from '@mui/material';
import postData from '../../Firebase/Post.json'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export function IMainMiddleHome() {

    const [dataImg, setDataImg] = useState([])

    useEffect(() => {
        handleClickHere()
    }, [])

    function handleClickHere() {
        fetch('https://api.unsplash.com/photos/?client_id=p9VxBPbNV2q1sWZHDmyib6BjqCK2SV5LKjzwa8rnqgA')
            .then(data => data.json())
            // .then(res => console.log(res))
            .then(res => setDataImg(res.slice(3, 4)))
            .catch(err => console.log(err))
    }


    return (
        <Fragment>
            <div className={styles.main_middle_home}>
                {
                    postData.map((items) => (
                        <div className={styles.data_feed_fins} key={items.id}>
                            <div className={styles.data_id_f}>
                                <Avatar>{items.name.charAt(0).toUpperCase()}</Avatar>
                                <p>{items.name}</p>
                            </div>
                            {
                                dataImg && dataImg.map(item => (
                                    <div key={item.id}>
                                        <img src={item.urls.regular} alt="" />
                                    </div>
                                ))}

                            <div className={styles.icons_ref}>
                                <p><FavoriteBorderIcon /></p>
                                <p><ModeCommentOutlinedIcon /></p>
                                <p><SendOutlinedIcon /></p>
                            </div>
                        </div>
                    ))
                }


            </div>
        </Fragment>
    )
}
