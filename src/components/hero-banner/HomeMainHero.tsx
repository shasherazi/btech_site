import heroVideoImg from "../../../public/assets/img/home-01/hero/hero-video-1.jpg";
import heroAvater from "../../../public/assets/img/home-01/hero/hero-avater.jpg";
import heroSvg from "../../../public/assets/img/home-01/hero/hero-svg-1.svg";
import bannerBg from "../../../public/assets/img/bg-wrap-2.jpg";
import pic1 from "../../../public/assets/img/non-theme/Gemini-1.png";
import { ArrowSvg } from "@/svg";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const HomeMainHero = () => {
    return (
        <div className="tp-hero-area tp-hero-ptb tp-image-distortion p-relative fix z-index-1"
            style={{ backgroundImage: `url(${bannerBg.src})`, backgroundSize: "cover" }}
        >
            <div className="container container-1750">
                <div className="row">
                    <div className="col-xl-9">
                        <div className="tp-hero-title-box">
                            <h2 className="tp-hero-title tp-char-animation">
                                <span>Innovative</span> <br />
                                <span>
                                   Reliable</span> Efficient
                            </h2>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="tp-hero-content-wrap d-flex flex-xl-column justify-content-between pb-20">
                          
                            <div className="tp-hero-more-info-wrap d-inline-flex justify-content-end tp_fade_anim" data-delay="1.5">
                                <div className="tp-hero-more-info p-relative" style={{ backgroundImage: `url(${heroSvg.src})` }}>
                                    <span className="tp-hero-line d-none d-sm-block"></span>
                                    <div className="tp-hero-avater d-flex align-items-center justify-content-between">
                                      
                                        
                                    </div>
                                    <p>Great work. Even greater solutions. See what we offer.</p>
                                    <div className="tp-hero-link text-end">
                                        <Link href="/about-us-light">More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeMainHero;