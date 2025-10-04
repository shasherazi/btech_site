import { NonThemeServiceData } from '@/data/nonThemeServicesData';
import React from 'react';

const ServiceBenifit = (data:NonThemeServiceData) => {
    return (
        <div className="tp-benefits-ptb pb-100">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-benefits-heading tp_fade_anim" data-delay=".3">
                            <h3 className="tp-career-title fs-60 pb-10">{data.thirdHeading}</h3>
                            <p>{data.thirdDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBenifit;
