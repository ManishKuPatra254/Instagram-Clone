import { Fragment, useState } from 'react';
import styles from './IMainLeftHome.module.css';
import instalogo from '../../assets/insta 1.png'
import { MdHomeFilled } from "react-icons/md"
import { BiSearch } from "react-icons/bi"
import { AiOutlineCompass } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { RiAddBoxLine } from "react-icons/ri"
import { BiSolidVideos } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { AiOutlineMenu } from "react-icons/ai"
import { SiThreads } from "react-icons/si"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';


export function IMainLeftHome() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function themeToogle() {
        alert('Hi')
    }

    return (
        <Fragment>
            <div className={`${styles.main_left_home} ${styles.responsive_layout}`}>
                <img src={instalogo} alt="" />
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

                    <div className={styles.btn1}>
                        <p><RiAddBoxLine size={28} /></p>
                        <button>Create</button>
                    </div>

                    <div className={styles.btn1}>
                        <p><CgProfile size={28} /></p>
                        <button>Profile</button>
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
                                <p>Log out</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
