import { GetServerSideProps } from 'next';

import { TermConditionContent, ScrollToTop, SharedHead } from '@components';
import { ITermCondition } from '@models';
import { getTermCondition } from '@services';

interface TermConditionPops {
  termCondition?: ITermCondition[];
}

const TermCondition = ({ termCondition }: TermConditionPops) => (
  <>
    <SharedHead
      title="Terms and Conditions"
      metaDescription="True Digital Park Membership Agreement Terms & Conditions"
    />
    <TermConditionContent termCondition={termCondition} />
    <ScrollToTop />
  </>
);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const termCondition = await getTermCondition();

  return {
    props: {
      termCondition,
    },
  };
};

export default TermCondition;
