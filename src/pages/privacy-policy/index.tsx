import { GetServerSideProps } from 'next';

import { PrivacyPolicyContent, SharedHead } from '@components';
import { IPrivacyPolicy } from '@models';
import { getPrivacyPolicy } from '@services';

interface PrivacyPolicyPops {
  privacyPolicy?: IPrivacyPolicy[];
}

const PrivacyPolicy = ({ privacyPolicy }: PrivacyPolicyPops) => (
  <>
    <SharedHead
      title="Privacy Policy"
      metaDescription="True Digital Park User Privacy Policy 1.0"
    />
    <PrivacyPolicyContent privacyPolicy={privacyPolicy} />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const privacyPolicy = await getPrivacyPolicy();

  return {
    props: {
      privacyPolicy,
    },
  };
};

export default PrivacyPolicy;
