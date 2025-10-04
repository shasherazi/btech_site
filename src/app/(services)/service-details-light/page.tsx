import ServiceFiveMain from '@/pages/services/service-details/ServiceFiveMain';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Btech-Group",
};

const page = () => {
    return (
        <ServiceFiveMain />
    );
};

export default page;
