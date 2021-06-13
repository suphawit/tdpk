import { useRouter } from 'next/router';

import { SharedHead, PrimaryButton, Container } from '@components';

const NotFound = () => {
  const router = useRouter();
  const handleClick = () => router.push('/');

  return (
    <>
      <SharedHead
        title="True Digital Park"
        metaDescription="True Digital Park is a startup and technology campus, offering a complete ecosystem with an “open innovation” concept that brings together multinational companies, startups, business operators, investors, and R&D centers. This established digital community provides crucial knowledge creation that is supportive to digital innovations."
      />
      <Container extraClasses="grid gap-y-6 lg:py-28 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
        <div className="col-span-7 flex justify-center">
          <img
            src="/404.svg"
            alt="Not Found"
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
        <div className="col-span-5 my-auto">
          <h2 className="font-bold">Error 404</h2>
          <h1 className="text-3xl font-extrabold mt-2">
            Something went Wrong!
          </h1>
          <hr className="w-60 h-1 border-0 bg-bright-green mt-4" />
          <p className="mt-4">
            We are very sorry for the inconvenience. It looks like you are
            trying to access a page that either has been deleted or doesn't
            exist.
          </p>
          <PrimaryButton extraClassNames="mt-6" onClick={handleClick}>
            Back to Home
          </PrimaryButton>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
