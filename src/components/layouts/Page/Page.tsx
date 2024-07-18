import { useEffect, useState } from 'react';

import PageNav from '../PageNav/PageNav';
import Footer from '../Footer/Footer';

import Children from '../../../types/Children';
import T from '../../../types/T';

interface PageProps extends T, Children {
  logoStyles: string;
  pageStyles?: string;
  wrapper: React.RefObject<HTMLDivElement>;
}

function Page({ t, children, logoStyles, pageStyles, wrapper }: PageProps) {
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);

  useEffect(() => {
    if (!wrapper.current) return;

    wrapper.current.addEventListener('click', e => {
      setIsOpenLangMenu(
        (e.target as HTMLButtonElement).closest('.toggleLangBtn')
          ? !isOpenLangMenu
          : isOpenLangMenu !== false && false
      );
    });
  }, [setIsOpenLangMenu, isOpenLangMenu, wrapper]);
  return (
    <div
      ref={wrapper}
      className="h-screen 2xl:container 2xl:mx-auto dark:bg-lightDark"
    >
      <PageNav
        pageStyles={pageStyles}
        logoStyles={logoStyles}
        isOpenLangMenu={isOpenLangMenu}
        setIsOpenLangMenu={setIsOpenLangMenu}
        t={t}
      />

      {children}

      <Footer t={t} />
    </div>
  );
}

export default Page;
