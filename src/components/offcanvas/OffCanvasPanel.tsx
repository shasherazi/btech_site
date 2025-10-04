// import offcanvas1 from "../../../public/assets/img/offcanvas/offcanvas-1.jpg";
import offcanvas1 from "../../../public/assets/img/non-theme/about/product1.jpeg";
// import offcanvas2 from "../../../public/assets/img/offcanvas/offcanvas-2.jpg";
import offcanvas2 from "../../../public/assets/img/non-theme/about/product2.jpeg";
// import offcanvas3 from "../../../public/assets/img/offcanvas/offcanvas-3.jpg";
import offcanvas3 from "../../../public/assets/img/non-theme/about/product3.jpeg";
// import offcanvas4 from "../../../public/assets/img/offcanvas/offcanvas-4.jpg";
import offcanvas4 from "../../../public/assets/img/non-theme/about/product4.jpeg";
// import logoBlack from '../../../public/assets/img/logo/logo-black.png';
import logoBlack from '../../../public/assets/img/non-theme/black-logo.png';
// import logoWhite from '../../../public/assets/img/logo/logo-white.png';
import logoWhite from '../../../public/assets/img/non-theme/white-logo.png';
import PhotoProviderWrapper from '../shared/PhotoProviderWrapper';
import { CrossIconTwo, DribbleTwo, FacebookTwo, InstagramSvg, InstagramTwo, TwitterTwo } from '@/svg';
import MainMobileMenu from "../../layouts/subComponents/MainMobileMenu";
import { BehanceTwoSvg } from "@/svg/social-icons/Behance";
import { YouTubeSvg } from "@/svg/social-icons/YouTube";
import { PhotoView } from 'react-photo-view';
import { ImageDT } from '@/types/custom-d-t';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const galleryImages: ImageDT[] = [
    { id: 1, imgSrc: offcanvas1 },
    { id: 2, imgSrc: offcanvas2 },
    { id: 3, imgSrc: offcanvas3 },
    { id: 4, imgSrc: offcanvas4 }
];

// prop type
type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};


const OffCanvasPanel: React.FC<IProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    return (
        <>
            <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
                <div className="tp-offcanvas-wrapper @@class offcanvas-white-bg">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo">
                            <Link href="/">
                                <Image className="logo-1" width={120} src={logoBlack} alt="logo-black" />
                                <Image className="logo-2" width={120} src={logoWhite} alt="logo-white" />
                            </Link>
                        </div>
                        <div className="tp-offcanvas-close">
                            <button onClick={() => setOpenOffcanvas(false)} className="tp-offcanvas-close-btn">
                                <CrossIconTwo />
                            </button>
                        </div>
                    </div>
                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content d-none d-xl-block">
                            <h3 className="tp-offcanvas-title">Hello There!</h3>
                            <p>Driven by a passion for innovation, we specialize in delivering top-quality design solutions</p>
                        </div>
                        <div className="tp-offcanvas-menu d-xl-none">
                            <nav><MainMobileMenu /></nav>
                        </div>
                        <div className="tp-offcanvas-gallery d-none d-xl-block">
                            <div className="row gx-2">
                                <PhotoProviderWrapper>
                                    {galleryImages.map((image: ImageDT) => (
                                        <div className="col-md-3 col-3" key={image.id}>
                                            <div className="tp-offcanvas-gallery-img fix">
                                                <PhotoView src={image.imgSrc.src}>
                                                    <Image style={{ width: "100%", height: "auto" }} src={image.imgSrc} alt={`Gallery image${image.id}`} />
                                                </PhotoView>
                                            </div>
                                        </div>
                                    ))}
                                </PhotoProviderWrapper>
                            </div>
                        </div>
                        <div className="tp-offcanvas-contact">
                            <h3 className="tp-offcanvas-title sm">Information</h3>
                            <ul>
                                <li><Link href="mailto:Info@btech-group.com">Info@btech-group.com</Link></li>
                                <li> <Link href="tel:+(847) 737-7065">(847) 737-7065</Link> </li>
                                <li>
                                    <Link href="https://www.google.com/maps/dir//1900+Hassell+Rd,+Hoffman+Estates,+IL+60169,+United+States/@42.0692932,-88.2816106,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880fa7d835f95247:0x3079d2dbc218d58d!2m2!1d-88.1248804!2d42.0643527?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank"> Hoffman Estates, IL
                                    </Link>
</li>
                            </ul>
                        </div>
                        <div className="tp-offcanvas-social">
                            <h3 className="tp-offcanvas-title sm">Follow Us</h3>
                            <ul>
                                <li>
                                    <Link href="https://www.facebook.com/BtechGroupOfficial?mibextid=wwXIfr&rdid=as3zkCMiu2A7N4VU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B8JsuSdzL%2F%3Fmibextid%3DwwXIfr">
                                        <span><FacebookTwo /></span>
                                    </Link></li>
                                <li>
                                    <Link href="https://x.com/B_Tech_Group">
                                        <span><TwitterTwo /></span>
                                    </Link></li>
                                <li>
                                    <Link href="https://www.instagram.com/b_tech_group/?igsh=MTQ2dzRpaXJrMjFhdQ%3D%3D">
                                        <span><InstagramTwo /></span>
                                    </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setOpenOffcanvas(false)}
                className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
            ></div>
        </>
    );
};

export default OffCanvasPanel;
