// import serviceThumb from '../../../public/assets/img/service/service-4-thumb-1.png';
import { NonThemeServiceData } from '@/data/nonThemeServicesData';
import serviceThumb from '../../../public/assets/img/non-theme/webdev/process.jpeg';
import { useVideoModal } from '@/provider/VideoProvider';
import Image from 'next/image';
import React from 'react';

const ServiceFiveProcessArea = (data:NonThemeServiceData) => {
    const { playVideo } = useVideoModal();

    return (
        <div className="tp-service-4-process-ptb pt-140 pb-140">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                            </div>
                            <h3 className="tp-career-title fs-60 pb-40">{data.secondHeading}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="tp-service-4-process-wrap">
                            {data.processSteps.map((step) => (
                                <div key={step.stepNumber} className="tp-service-4-process-list">
                                    <span>{step.stepNumber}</span>
                                    <p>{step.stepDescription}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="tp-service-4-process-wrapper pl-70 p-relative">
                            <p className="pl-200 mb-50">{data.secondDescription}</p>
                            <div className="tp-service-4-process-thumb fix">
                                <div className="tp_img_reveal">
                                    <Image src={data.secondImage} alt="service thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFiveProcessArea;
