import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import classNames from 'classnames';

import { IBreadcrumbArray } from '@models';

interface IBreadcrumbs {
  breadcrumbArray: IBreadcrumbArray[];
}

const Breadcrumbs = ({ breadcrumbArray = [] }: IBreadcrumbs) => (
  <nav aria-label="breadcrumbs" className="border-b h-11 lg:h-14">
    <ol className="flex items-center px-6 py-2 lg:px-36 lg:py-4 h-full 2xl:container 2xl:mx-auto">
      <li>
        <a href="/">Home</a>
      </li>
      {breadcrumbArray.map((breadcrumb, index) => {
        return (
          <li key={breadcrumb.name} className="flex items-center">
            <IoIosArrowForward className="text-xl mx-2" />
            <Link href={breadcrumb.pathName}>
              <a
                className={classNames({
                  'font-bold': index === breadcrumbArray.length - 1,
                })}
              >
                {breadcrumb.name}
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
