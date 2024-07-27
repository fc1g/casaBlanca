import PageNav from '../PageNav/PageNav';
import Footer from '../Footer/Footer';

import Children from '../../../types/Children';

type PageProps = {
  logoStyles: string;
  pageStyles?: string;
} & Children;

function Page({ children, logoStyles, pageStyles }: PageProps) {
  return (
    <div className="h-screen 2xl:container 2xl:mx-auto dark:bg-lightDark">
      <PageNav pageStyles={pageStyles} logoStyles={logoStyles} />

      {children}

      <Footer />
    </div>
  );
}

export default Page;
