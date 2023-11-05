import { Fragment } from 'react'
import styles from './ILogin.module.css'
import image1 from '../assets/30.png'
import image2 from '../assets/insta 1.png'
import image3 from '../assets/instameta.png'
import image4 from '../assets/Group 2.png'
import image5 from '../assets/Group 1.png'
import { Box, Container } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom'

export function InstaLogin() {
    const navigateHome = useNavigate();

    function handleNavigateHome() {
        navigateHome('/home')
    }
    return (
        <Fragment>
            <div className={styles.main_login_insta_1}>
                <div className={styles.sub_login_insta_1}>
                    <img id={styles.img1} src={image1} alt="" />
                    <Container>
                        <Box sx={{
                            border: '1px solid rgb(229, 228, 226)',
                            height: 'auto',
                            marginTop: '20px',
                            padding: '1px 28px',
                            '@media screen and (max-width: 850px)': {
                                border: 'transparent',
                                width: '100%',
                            },
                        }}>
                            <img className={styles.img2} src={image2} alt="" />
                            <div className={styles.input_text_login_f}>
                                <input type='text' placeholder='Phone number, username, or email' />
                                <input type='password' placeholder='Password' />
                                <button onClick={handleNavigateHome}>Log in</button>
                                <span>𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖<strong style={{
                                    color: '#818589',
                                    fontSize: '12px',
                                    padding: '4px'
                                }}>OR</strong>    𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖</span>
                            </div>

                            <div className={styles.connect_fb_fp}>
                                <p><FacebookIcon sx={{ color: '#1A5276' }} />Log in with Facebook</p>
                                <a href='#12'>Forgot password?</a>
                            </div>
                        </Box>

                        <Box sx={{
                            border: '1px solid rgb(229, 228, 226)',
                            height: 'auto',
                            marginTop: '10px',
                            padding: '25px 30px',
                            '@media screen and (max-width: 850px)': {
                                width: '100%',
                                border: 'transparent',
                            },
                        }}>
                            <div className={styles.signup_insta}>
                                <p>Dont have an account?  <a href="#12">Sign up</a> </p>
                            </div>
                        </Box>


                        <Box sx={{
                            height: 'auto',
                            marginTop: '10px',
                            padding: '25px 30px',
                            '@media screen and (max-width: 850px)': {
                                width: '100%',
                            },
                        }}>
                            <div className={styles.connect_pl_app}>
                                <p>Get the app. </p>
                                <div className={styles.connect_a_p_m}>
                                    <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D9F86E487-E933-48D3-BCE6-6ABFA20DF982%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.instagram.com%2F" target='blank'><img src={image5} alt="" /></a>
                                    <a href="https://explore.skillbuilder.aws/learn/course/134/aws-cloud-practitioner-essentials;lp=82"><img src={image4} alt="" /></a>
                                </div>
                            </div>
                        </Box>
                    </Container>
                </div>
            </div>

            <div className={styles.meta_conf}>
                <a href="#123">Meta</a>
                <a href="#123">About</a>
                <a href="#123">Blog</a>
                <a href="#123">Job</a>
                <a href="#123">Help</a>
                <a href="#123">API</a>
                <a href="#123">Privacy</a>
                <a href="#123">Terms</a>
                <a href="#123">Location</a>
                <a href="#123">Instagram Lite</a>
                <a href="#123">Threads</a>
                <a href="#123">Contact Uploading & Non-Users</a>
                <a href="#123">Meta Verified</a>
            </div>
            <div className={styles.reserved_ref}>
                <button>English <KeyboardArrowDownIcon /></button>
                <p>© 2023 Instagram from Manish</p>
            </div>



            <div className={styles.meta_logo}>
                <p>from</p>
                <img src={image3} alt="" />
            </div>
        </Fragment>
    )
}
