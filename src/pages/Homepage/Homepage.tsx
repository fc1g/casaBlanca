import Hero from '../../ui/Hero/Hero';
import Page from '../../ui/Page/Page';
import TestimonialsList from '../../ui/TestimonialsList/TestimonialsList';

function Homepage() {
  return (
    <Page logoStyles="text-white dark:text-white" navStyles="">
      <>
        <Hero />

        <TestimonialsList />
      </>
    </Page>
  );
}

export default Homepage;
