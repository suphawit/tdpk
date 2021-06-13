import { GetServerSideProps } from 'next';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { PrimaryButton, Container } from '@components';

const FormSuccess = ({ message }) => {
  const { lang } = useTranslation();

  return (
    <Container>
      <div className="lg:w-1/2 lg:mx-auto">
        <h2 className="text-2xl lg:text-center mb-4 font-extrabold lg:text-3xl">
          Thank you for reaching out to us.
        </h2>
        <hr className="w-64 h-1 border-0 bg-bright-green mt-4 mb-0 lg:mx-auto" />
        <div
          className="mt-4 ContentContainer text-lg lg:text-center"
          dangerouslySetInnerHTML={{ __html: decodeURIComponent(message) }}
        />
        <img className="mt-8 lg:mt-12" src="/form.svg" alt="form-success" />
        <div className="text-center mt-8">
          <Link href="/" locale={lang}>
            <a>
              <PrimaryButton>Back to Home</PrimaryButton>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { message } = context.query;
  return {
    props: {
      message,
    },
  };
};

export default FormSuccess;
