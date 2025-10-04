import { NonThemeServiceData } from '@/data/nonThemeServicesData';
import teamBgImg from '../../../public/assets/img/team/team-bg.png';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import { CareerShape } from '@/svg/HeroShape';
import React from 'react';

const ServiceFiveHero = (data:NonThemeServiceData) => {
    return (
        <div className="ar-hero-area p-relative pt-190 pb-100" style={{ backgroundImage: `url(${teamBgImg.src})` }}>
            <div className="career-shape-style">
                <span><CareerShape /></span>
            </div>
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="ar-hero-title-box service-5-heading tp_fade_anim mb-80" data-delay=".3">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                <span className="tp-section-subtitle pre tp_fade_anim">{data.smallHeading}</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h3 className="tp-career-title">{data.bigHeading}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">
                        <div className="tp-service-5-text tp_fade_anim" data-delay=".5">
                            <p>{data.description}</p>
                        </div>
                        <div className="tp-service-5-list tp_fade_anim " data-delay=".7">
                            <ul>
                                {data.subServices.map((service, index) => (
                                    <li key={index}>+ {service}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFiveHero;
