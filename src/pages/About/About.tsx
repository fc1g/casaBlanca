import AboutTabs from './components/AboutTabs/AboutTabs';
import Page from '../../components/layouts/Page/Page';
import Slider from './components/Slider/Slider';

function About() {
  return (
    <Page logoStyles="text-transparent">
      <>
        <Slider />

        <AboutTabs />
      </>
    </Page>
  );
}

export default About;
