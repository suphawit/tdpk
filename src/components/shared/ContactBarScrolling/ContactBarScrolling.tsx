import * as React from 'react';

import { ISpaceLayoutContents } from '@models';

interface ContactBarScrollingProps {
  contents: ISpaceLayoutContents[];
}

const ContactBarScrolling = ({ contents }: ContactBarScrollingProps) => {
  const section = (num: number) => contents[num].contents;
  const { image, color } = section(0);
  const { detail } = section(1);
  const [scrolled, setScrolled] = React.useState(false);
  const backgroundColor = color;
  const backgroundImage = image ? `url(${image}) no-repeat 0/cover` : '';
  const isNotRender = !detail;

  if (isNotRender) return <></>;

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return scrolled ? (
    <section
      className="w-full fixed left-0 top-16 z-10 duration-500"
      style={{
        background: backgroundImage || backgroundColor || 'transparent',
      }}
    >
      <div className="py-2 px-6 lg:py-4 lg:px-24 xl:px-36 2xl:container 2xl:mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: detail }}
          className="text-sm font-bold text-center lg:text-right lg:text-lg"
        />
      </div>
    </section>
  ) : null;
};

export default ContactBarScrolling;
