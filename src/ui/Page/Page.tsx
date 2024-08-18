import PageNav from '../PageNav/PageNav';
import Footer from '../Footer/Footer';
import Children from '../../types/Children';

type PageProps = {
  logoStyles: string;
  navStyles: string;
} & Children;

function Page({ logoStyles, navStyles, children }: PageProps) {
  return (
    <>
      <PageNav logoStyles={logoStyles} navStyles={navStyles} />

      <main className="flex-auto">{children}</main>

      <Footer />
    </>
  );
}

export default Page;
