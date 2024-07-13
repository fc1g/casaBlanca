import Hero from '../../components/layouts/Hero/Hero';
import Page from '../../components/layouts/Page/Page';
import TestimonialsList from '../../components/layouts/TestimonialsList/TestimonialsList';
import T from '../../types/T';

function Homepage({ t }: T) {
  return (
    <Page logoStyles="text-white" t={t}>
      <>
        <Hero t={t} />

        <TestimonialsList t={t} />
      </>
    </Page>
  );
}

export default Homepage;
