import { CrossIcon, CrossIconTwo, DribbleTwo, FacebookTwo, InstagramSvg, InstagramTwo, TwitterTwo } from "@/svg";
import logoWhite from "../../../public/assets/img/logo/logo-white.png";
import logoBlack from "../../../public/assets/img/logo/logo-black.png";
import MobileMenus from "../../layouts/subComponents/MobileMenus";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import React from 'react';

// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileOffcanvas: React.FC<IProps> = (
    {
        openOffcanvas,
        setOpenOffcanvas
    }) => {

    const pathName = usePathname();

    const darkPaths = [
        "/portfolio-wrapper-slider",
        "/portfolio-webgl-showcase",
        "/portfolio-creative-thumb-slider",
        "/portfolio-creative-skew-slider",
        "/portfolio-creative-text-slider",
        "/portfolio-parallax-slider",
        "/portfolio-showcase-light",
        "/portfolio-interactive-with-hover",
        "/portfolio-interactive-with-scroll",
    ];

    const isDarkPath = pathName && darkPaths.includes(pathName);

    return (
        <div className={`tp-offcanvas-2-area p-relative 
               ${isDarkPath ? "offcanvas-2-black-bg" : "offcanvas-2-white-bg"}
                ${openOffcanvas ? "opened" : ""}`}>
            <div className="tp-offcanvas-2-bg is-left left-box"></div>
            <div className="tp-offcanvas-2-bg is-right right-box d-none d-md-block"></div>
            <div className="tp-offcanvas-2-wrapper">
                <div className="tp-offcanvas-2-left left-box">
                    <div className="tp-offcanvas-2-left-wrap d-flex justify-content-between align-items-center">
                        <div className="tp-offcanvas-2-logo">
                            <Link href="/">
                                <Image className="logo-1" width={140} src={logoWhite} alt="logo-white" />
                                <Image className="logo-2" width={140} src={logoBlack} alt="logo-black" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-close d-md-none text-end">
                            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
                                <span className="text">
                                    <span>close</span>
                                </span>
                                <span className="d-inline-block">
                                    <span><CrossIcon /></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-menu counter-row">
                        <nav><MobileMenus /></nav>
                    </div>
                </div>
                <div className="tp-offcanvas-2-right right-box d-none d-md-block p-relative">
                    <div className="tp-offcanvas-2-close text-end">
                        <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-2-close-btn">
                            <span className="text"><span>close</span></span>
                            <span className="d-inline-block">
                                <span><CrossIconTwo /></span>
                            </span>
                        </button>
                    </div>
                    <div className="tp-offcanvas-2-right-info-box mt-160">
                        <h4 className="tp-offcanvas-2-right-info-title">Get In Touch</h4>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Phone</label>
                            <Link className="tp-line-white" href="tel:+(847)737-7065">(847) 737-7065</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Email</label>
                            <Link className="tp-line-white" href="mailto:Info@btech-group.com">Info@btech-group.com</Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-10">Address</label>
                            <Link className="tp-line-white" href="https://www.google.com/maps/dir//1900+Hassell+Rd,+Hoffman+Estates,+IL+60169,+United+States/@42.0692932,-88.2816106,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fa7d835f95247:0x3079d2dbc218d58d!2m2!1d-88.1248804!2d42.0643527?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                                Hoffman Estates, IL
                            </Link>
                        </div>
                        <div className="tp-offcanvas-2-right-info-item">
                            <label className="mb-15">Follow us</label>
                            <div className="tp-offcanvas-2-right-social">
                                <Link href="https://www.facebook.com/BtechGroupOfficial?mibextid=wwXIfr&rdid=as3zkCMiu2A7N4VU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B8JsuSdzL%2F%3Fmibextid%3DwwXIfr">
                                    <span><FacebookTwo /></span>
                                </Link>{" "}
                                <Link href="https://x.com/B_Tech_Group">
                                    <span><TwitterTwo /></span>
                                </Link>{" "}
                                <Link href="https://www.instagram.com/b_tech_group/?igsh=MTQ2dzRpaXJrMjFhdQ%3D%3D">
                                    <span><InstagramTwo /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileOffcanvas;
