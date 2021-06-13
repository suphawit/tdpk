import React, { useState } from 'react';
import { IoIosShareAlt } from 'react-icons/io';

import { formattedDate } from '@utils';
import SocialTooltip from '@components/common/SocialNetworks/SocialTooltip';

interface ArticleDetailsHeaderProps {
  title: string;
  category: string;
  date: string;
}

const ArticleDetailsHeader = ({
  title,
  category,
  date,
}: ArticleDetailsHeaderProps) => {
  const [openSocial, setOpenSocial] = useState(false);
  return (
    <section className="border-b">
      <div className="py-6 px-6 lg:px-36 2xl:container 2xl:mx-auto">
        <div className="relative flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <ul className="flex mt-2">
              <li>{category}</li>
              <li className="left-separate">
                {formattedDate(date, 'MMMM dd, yyyy')}
              </li>
            </ul>
          </div>
          {openSocial && (
            <div className="absolute -top-9 right-0">
              <SocialTooltip />
            </div>
          )}
          <button
            className="border rounded px-4 py-2"
            onClick={() => setOpenSocial(!openSocial)}
          >
            <IoIosShareAlt size="18" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetailsHeader;
