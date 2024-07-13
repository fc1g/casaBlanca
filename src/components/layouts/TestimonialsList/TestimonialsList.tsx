import Testimonial from '../../Testimonial/Testimonial';
import Link from '../../Link/Link';

import T from '../../../types/T';

import kubaUserImg from '/users/kuba.webp';
import monikaUserImg from '/users/monika.webp';
import nikUserImg from '/users/nik.webp';
import adamUserImg from '/users/adam.webp';
import Title from '../../Title/Title';

function TestimonialsList({ t }: T) {
  return (
    <section className="bg-white dark:bg-lightDark">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <Title
          title={t('homepage.testimonials.title')}
          subtitle={t('homepage.testimonials.subtitle')}
        />

        <div className="mb-8 grid lg:mb-12 lg:grid-cols-2">
          <Testimonial source={kubaUserImg} userName="kuba" t={t} />

          <Testimonial source={monikaUserImg} userName="monika" t={t} />

          <Testimonial source={nikUserImg} userName="nik" t={t} />

          <Testimonial source={adamUserImg} userName="adam" t={t} />
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
