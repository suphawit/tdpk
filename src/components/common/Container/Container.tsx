import * as React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  extraClasses?: string;
}

const Container = ({ children, extraClasses = '' }: ContainerProps) => (
  <div
    className={`px-6 py-10 lg:py-20 lg:px-36 2xl:container 2xl:mx-auto ${extraClasses}`}
  >
    {children}
  </div>
);

export default Container;
