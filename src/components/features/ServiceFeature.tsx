// import feature from '../../../public/assets/img/service/service-5/service-5-feature.jpg';
import { NonThemeServiceData } from '@/data/nonThemeServicesData';
import { useVideoModal } from '@/provider/VideoProvider';
import { FeatureArrowIcon } from '@/svg/FeaturesIcons';
import Image from 'next/image';
import React from 'react';

const ServiceFeature = (data:NonThemeServiceData) => {
    const { playVideo } = useVideoModal();

    return (
        <div className="tp-service-5-features-ptb p-relative">
            <div className="container container-1550">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-service-5-feature-wrap p-relative">
                            <div className="tp-service-5-feature-content">
                                <span><FeatureArrowIcon /></span>
                                <h3 className="tp-service-5-feature-title">We provide <br /> special offers for <br />
                                    the best customers</h3>
                            </div>
                            <Image style={{ width: "100%", height: "auto" }} data-speed=".8" src={data.thirdImage} alt="feature image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceFeature;
