import { Fragment, useEffect, useState } from 'react';
import styles from './IMainLeftHome.module.css';
import instalogo from '../../assets/insta 1.png'
import { MdHomeFilled } from "react-icons/md"
import { BiSearch } from "react-icons/bi"
import { AiOutlineCompass } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { RiAddBoxLine } from "react-icons/ri"
import { BiSolidVideos } from "react-icons/bi"
import { Avatar } from '@mui/material';
import { AiOutlineMenu } from "react-icons/ai"
import { SiThreads } from "react-icons/si"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../../Firebase/Firebase'
import { logInUser } from '../../UserStoreFeatures/UserStoreFeatures';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function IMainLeftHome() {

    const [open, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function themeToogle() {
        alert('Hi')
    }

    const user = useSelector((state) => state.data.user.user)

    const dispathch = useDispatch();
    const navigateToLogout = useNavigate();

    function handleLogoutPage() {
        dispathch(logInUser());
        signOut(auth)
        navigateToLogout('/');
    }

    const [openLogo, setOpenLogo] = useState(true)

    useEffect(() => {
        setOpenLogo(!openLogo);
    }, [])

    return (
        <Fragment>
            <div className={styles.main_left_home}>
                {
                    openLogo ? (
                        <img src={instalogo} alt="" />
                    ) : (
                        <p className={styles.icons_resp}><InstagramIcon /></p>
                    )
                }

                <div className={styles.sub_btn_part}>
                    <div className={styles.btn1}>
                        <p><MdHomeFilled size={28} /></p>
                        <button>Home</button>
                    </div>

                    <div className={styles.btn1}>
                        <p><BiSearch size={28} /></p>
                        <button>Search</button>
                    </div>

                    <div className={styles.btn1}>
                        <p><AiOutlineCompass size={28} /></p>
                        <button>Explore</button>
                    </div>

                    <div className={styles.btn1}>
                        <p><BiSolidVideos size={28} /></p>
                        <button>Reels</button>
                    </div>

                    <div className={styles.btn1}>
                        <p><MapsUgcOutlinedIcon size={28} /></p>
                        <button>Messages</button>

                    </div>

                    <div className={styles.btn1}>
                        <p><AiOutlineHeart size={28} /></p>
                        <button>Notifications</button>
                    </div>

                    <div className={styles.btn1} >
                        <p onClick={handleOpenModal}><RiAddBoxLine size={28} /></p>
                        <button onClick={handleOpenModal}>Create</button>
                        <div className={style.modal_navigate}>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleCloseModal}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >

                                <Fade in={open}>
                                    <Box sx={style}>
                                        <h2>Create new post</h2>
                                        <input type="file" />
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>

                    <div className={styles.btn3}>
                        <Avatar sx={{
                            width: 32,
                            height: 32,
                            marginRight: '10px',
                        }}>{user ? user.username.charAt(0).toUpperCase() : ''}</Avatar>
                        <button>{user ? user.username : ''}</button>
                    </div>
                </div>

                <div className={styles.account_sync}>
                    <div className={styles.btn2}>
                        <p><SiThreads size={28} /></p>
                        <button>Threads</button>

                    </div>

                    <div className={styles.btn2} onClick={toggleDropdown}>
                        <p><AiOutlineMenu size={28} /></p>
                        <button>More</button>
                        {isDropdownOpen && (
                            <div className={styles.drop_appe_tp}>
                                <p><SettingsOutlinedIcon />Settings</p>
                                <p><InsertChartOutlinedIcon />Your activity</p>
                                <p><TurnedInNotOutlinedIcon />Saved</p>
                                <p onClick={() => themeToogle()}><LightModeOutlinedIcon />Switch appearance</p>
                                <p><ReportGmailerrorredOutlinedIcon />Report a problem</p>
                                <p>Switch accounts</p>
                                <p onClick={handleLogoutPage}>Log out</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
