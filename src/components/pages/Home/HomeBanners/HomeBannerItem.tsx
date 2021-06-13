import * as React from 'react';
import Link from 'next/link';

import { PrimaryButton } from '@components';
import { BANNER_ORIENTATIONS, IHomeBanner } from '@models';

interface BannerProps {
  banner: IHomeBanner;
  carouselIndicator: React.ReactNode;
}

const HomeBannerItem = ({ banner, carouselIndicator }: BannerProps) => {
  const orientationBoolean = banner.orientation === BANNER_ORIENTATIONS.LEFT;
  const imageSpanClass = orientationBoolean ? 'col-span-4' : 'col-span-6';
  const descriptionSpanClass = orientationBoolean ? 'col-span-6' : 'col-span-4';
  const detailPaddingXAxis = orientationBoolean ? 'lg:pl-8' : 'lg:pr-8';
  const bannerContentPosition = orientationBoolean ? 'left-0' : 'right-0';
  return (
    <div className="lg:grid lg:grid-cols-1 lg:grid-cols-10">
      <img className={`w-full ${imageSpanClass}`} src={banner.image} />
      <div
        className={`relative flex items-center bg-light-gray h-full py-10 lg:py-0 ${descriptionSpanClass} ${detailPaddingXAxis}`}
      >
        <div
          className={`hidden lg:block absolute top-0 w-6 h-1/2 bg-bright-green ${bannerContentPosition}`}
        ></div>
        <div className="text-left px-6 lg:px-12">
          <h1 className="leading-10 lg:leading-12 text-3xl lg:text-4xl font-extrabold line-clamp-2 mb-4">
            {banner.title}
          </h1>
          <p className="mb-4">{banner.detail}</p>
          <Link href={banner.target}>
            <a target="_blank">
              <PrimaryButton>{banner.targetLabel}</PrimaryButton>
            </a>
          </Link>
          <div className="mt-12">{carouselIndicator}</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBannerItem;
