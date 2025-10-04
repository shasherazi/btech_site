import { FacebookSvg, FacebookTwo, InstagramSvg, InstagramTwo, LinkedinSvg, TwitterSvg, TwitterTwo } from '@/svg';
import Link from 'next/link';
import React from 'react';

export const FooterSocialIcons = ({ className }: { className: string }) => {
    return (
        <div className={className}>
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
    );
};
export const FooterSocialIconsTwo = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.facebook.com/BtechGroupOfficial?mibextid=wwXIfr&rdid=as3zkCMiu2A7N4VU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B8JsuSdzL%2F%3Fmibextid%3DwwXIfr#">
                <span><FacebookSvg /></span>
            </Link>{" "}
            <Link href="https://x.com/B_Tech_Group">
                <span><TwitterSvg /></span>
            </Link>{" "}
            <Link href="https://www.linkedin.com/company/btech-group/">
                <span><LinkedinSvg /></span>
            </Link>{" "}
            <Link href="https://www.instagram.com/b_tech_group/?igsh=MTQ2dzRpaXJrMjFhdQ%3D%3D">
                <span><InstagramSvg /></span>
            </Link>
        </div>
    );
};

