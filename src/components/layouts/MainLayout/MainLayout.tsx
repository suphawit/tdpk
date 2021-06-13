import { Header } from '../Header';
import { Footer } from '../Footer';

import { ScrollToTop } from '@components';

const MainLayout = (props) => (
  <>
    <Header />
    {props.children}
    <ScrollToTop />
    <Footer />
  </>
);

export default MainLayout;
