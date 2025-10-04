import mapIcon from '../../../public/assets/img/contact/map-icon.svg';
import Image from 'next/image';
import React from 'react';

const InnerMapArea = () => {
    return (
        <div className="tp-contact-map-ptb p-relative pb-120">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image src={mapIcon} alt="contact image" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.012257026224!2d-88.1274606886225!3d42.06435665361244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa7d835f95247%3A0x3079d2dbc218d58d!2sVillage%20of%20Hoffman%20Estates!5e0!3m2!1sen!2s!4v1759577054387!5m2!1sen!2s" width="800" height="600" style={{ border:0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default InnerMapArea;
