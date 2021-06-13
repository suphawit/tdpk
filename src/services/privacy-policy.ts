
// TODO: mock data
import { IPrivacyPolicy } from '@models';

export function getPrivacyPolicy(): Promise<IPrivacyPolicy[]> {
  return new Promise<IPrivacyPolicy[]>((resolve) => {
    resolve([
      {
        id: 1,
        title: 'privacyPolicy.purposeAndScope.header',
        description: 'privacyPolicy.purposeAndScope.description',
      },
      {
        id: 2,
        title: 'privacyPolicy.policyMayBeRevised.header',
        description: 'privacyPolicy.policyMayBeRevised.description'
      },
      {
        id: 3,
        title: 'privacyPolicy.whichPersonalDataCollected.header',
        description: 'privacyPolicy.whichPersonalDataCollected.description'
      },
      {
        id: 4,
        title: 'privacyPolicy.howTDPKStoreData.header',
        description: 'privacyPolicy.howTDPKStoreData.description',
      },
      {
        id: 5,
        title: 'privacyPolicy.howTDPKUseData.header',
        description: 'privacyPolicy.howTDPKUseData.description',
      },
      {
        id: 6,
        title: 'privacyPolicy.sensitiveData.header',
        description: 'privacyPolicy.sensitiveData.description',
      },
      {
        id: 7,
        title: 'privacyPolicy.cookies.header',
        description: 'privacyPolicy.cookies.description',
      },
      {
        id: 8,
        title: 'privacyPolicy.usageOfPersonalDataWithExtThird.header',
        description: 'privacyPolicy.usageOfPersonalDataWithExtThird.description',
      },
      {
        id: 9,
        title: 'privacyPolicy.transferDataToForeign.header',
        description: 'privacyPolicy.transferDataToForeign.description',
      },
      {
        id: 10,
        title: 'privacyPolicy.securityMeasures.header',
        description: 'privacyPolicy.securityMeasures.description',
      },
      {
        id: 11,
        title: 'privacyPolicy.timePeriodOfData.header',
        description: 'privacyPolicy.timePeriodOfData.description',
      },
      {
        id: 12,
        title: 'privacyPolicy.userPersonalData.header',
        description: 'privacyPolicy.userPersonalData.description',
      },
      {
        id: 13,
        title: 'privacyPolicy.contactUs.header',
        description: 'privacyPolicy.contactUs.description',
      },
      {
        id: 14,
        title: 'privacyPolicy.policyRevision.header',
        description: 'privacyPolicy.policyRevision.description',
      },
    ]);
  });
}
