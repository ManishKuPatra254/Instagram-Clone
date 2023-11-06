import { Fragment, useState } from "react";
import styles from './ISignUp.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Container } from '@mui/material'
import image2 from '../assets/insta 1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link, useNavigate } from "react-router-dom";
import image4 from '../assets/Group 2.png'
import image5 from '../assets/Group 1.png'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';

export function ISignUp() {

    const navigateToLoinPage = useNavigate()

    const [signupEmail, setSignupEmail] = useState('')
    const [signupFullname, setSignupFullname] = useState('')
    const [signupUsername, setSignupUsername] = useState('')
    const [signupPassword, setSignupPassword] = useState('')

    function handleClickSignUp() {
        if (signupEmail && signupFullname && signupUsername && signupPassword) {
            createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
                .then(() => signInWithEmailAndPassword(auth, signupEmail, signupPassword))
                .then(() => updateProfile(auth.currentUser, { displayName: signupUsername }))
                .then(() => {
                    navigateToLoinPage('/');
                })
                .catch((error) => {
                    alert(error);
                });
        } else {
            alert("Please fill in all the required fields.");
        }
    }

    return (
        <Fragment>
            <div className={styles.main_signup_c}>
                <div className={styles.sub_login_insta_1}>
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
                            <p>Sign up to see photos and videos from your friends.</p>
                            <button> <FacebookIcon />Log in with Facebook</button>
                            <p>𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖<strong style={{
                                color: '#818589',
                                fontSize: '12px',
                                padding: '4px'
                            }}>OR</strong>    𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖</p>
                            <div className={styles.input_text_login_f}>

                                <input type='email' placeholder='Mobile number or Email' value={signupEmail} onChange={e => setSignupEmail(e.target.value)} />

                                <input type='text' placeholder='Full Name' value={signupFullname} onChange={e => setSignupFullname(e.target.value)} />

                                <input type='text' placeholder='Username' value={signupUsername} onChange={e => setSignupUsername(e.target.value)} />

                                <input type='password' placeholder='Password' value={signupPassword} onChange={e => setSignupPassword(e.target.value)} />

                                <p>People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                                <p>By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                                <button onClick={handleClickSignUp}>Sign up</button>
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
                                <p>Have an account? <Link to={'/'}>Log in</Link> </p>
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
        </Fragment>
    )
}
