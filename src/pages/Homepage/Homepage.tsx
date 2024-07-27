import Hero from './components/Hero/Hero';
import Page from '../../components/layouts/Page/Page';
import TestimonialsList from '../../components/layouts/TestimonialsList/TestimonialsList';

function Homepage() {
  return (
    <Page logoStyles="text-white">
      <>
        <Hero />

        <TestimonialsList />
      </>
    </Page>
  );
}

export default Homepage;
