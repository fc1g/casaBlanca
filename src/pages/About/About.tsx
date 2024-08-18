import AboutTabs from '../../ui/AboutTabs/AboutTabs';
import Page from '../../ui/Page/Page';
import Slider from '../../ui/Slider/Slider';

function About() {
  return (
    <Page
      logoStyles="cursor-default select-none pointer-events-none text-transparent"
      navStyles=""
    >
      <>
        <Slider>
          <>
            <Slider.Slides />

            <Slider.AbsBtn position="left">Prev</Slider.AbsBtn>

            <Slider.AbsBtn position="right">Next</Slider.AbsBtn>

            <Slider.Dots />
          </>
        </Slider>

        <AboutTabs />
      </>
    </Page>
  );
}

export default About;
