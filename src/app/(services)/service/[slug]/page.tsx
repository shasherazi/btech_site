import ServiceFiveMain from "@/pages/services/service-details/ServiceFiveMain";
import { Metadata } from "next";
import React from "react";
import { nonThemeServicesData } from "@/data/nonThemeServicesData";

export const metadata: Metadata = {
  title: "Btech-Group",
};

type ServicesSlug = keyof typeof nonThemeServicesData;

const page = async ({
  params,
}: {
  params: Promise<{ slug: ServicesSlug }>;
}) => {
  const { slug } = await params;
  const data = nonThemeServicesData[slug];

  if (!data) {
    return <div>Service not found</div>;
  }

  return <ServiceFiveMain {...data} />;
};

export default page;
