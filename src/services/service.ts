import { IBanner } from '@models';

// TODO: mock data
export function getServiceInfo() {
  return new Promise((resolve) => {
    resolve({
      title: 'oneStopServiceForStartups.servicesInfo.header',
      description: `oneStopServiceForStartups.servicesInfo.description`,
      videoUrl: 'https://www.youtube.com/embed/rADC2oOKQjg',
    });
  });
}

export function getServiceHeroBanner(): Promise<Partial<IBanner>> {
  return new Promise<Partial<IBanner>>((resolve) => {
    resolve({
      id: 1,
      title: 'oneStopServiceForStartups.universalBanner.header',
      imageUrl: '/services/BannerImage.png',
      bgUrl: '/services/BackgroundImage.png',
    });
  });
}
