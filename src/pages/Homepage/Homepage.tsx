import { useRef } from 'react';

import Hero from './components/Hero/Hero';
import Page from '../../components/layouts/Page/Page';
import TestimonialsList from '../../components/layouts/TestimonialsList/TestimonialsList';

import T from '../../types/T';

function Homepage({ t }: T) {
  const wrapper = useRef<HTMLDivElement>(null);

  return (
    <Page logoStyles="text-white" t={t} wrapper={wrapper}>
      <>
        <Hero t={t} />

        <TestimonialsList t={t} />
      </>
    </Page>
  );
}

export default Homepage;
