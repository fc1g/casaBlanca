import useGlobal from '../../hooks/useGlobal';

import Testimonial from '../../components/Testimonial/Testimonial';
import Link from '../../components/Link/Link';
import Title from '../Title/Title';

import kubaUserImg from '../../assets/images/users/kuba.webp';
import monikaUserImg from '../../assets/images/users/monika.webp';
import nikUserImg from '../../assets/images/users/nik.webp';
import adamUserImg from '../../assets/images/users/adam.webp';

function TestimonialsList() {
  const { t } = useGlobal()!;

  return (
    <section className="bg-white dark:bg-lightDark">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <Title
          title={t('homepage.testimonials.title')}
          subtitle={t('homepage.testimonials.subtitle')}
        />

        <div className="mb-8 grid lg:mb-12 lg:grid-cols-2">
          <Testimonial source={kubaUserImg} userName="kuba" />

          <Testimonial source={monikaUserImg} userName="monika" />

          <Testimonial source={nikUserImg} userName="nik" />

          <Testimonial source={adamUserImg} userName="adam" />
        </div>

        <div className="text-center">
          <Link
            className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-dark hover:bg-lightGrayish focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-lightDark dark:text-white dark:hover:bg-dark dark:focus:ring-gray-700"
            href="https://www.facebook.com/people/CasaBlanca-Private-Heated-Pool/100091592920461/?sk=reviews"
          >
            {t('homepage.testimonials.btn')}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsList;
