import useGlobal from '../../hooks/globalStore';

type TestimonialProps = {
  source: string;
  userName: string;
};

function Testimonial({ source, userName }: TestimonialProps) {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();

  return (
    <figure className="flex flex-col items-center justify-center border-b border-gray-200 bg-lightGrayish p-8 text-center md:p-12 lg:border-r dark:border-gray-600 dark:bg-dark dark:text-white">
      <blockquote className="mx-auto mb-8 max-w-2xl text-gray-600 dark:text-gray-300">
        <h3 className="text-lg font-semibold text-dark dark:text-white">
          {t(`homepage.testimonials.${userName}.title`)}
        </h3>
        <p className="my-4">{t(`homepage.testimonials.${userName}.text`)}</p>
      </blockquote>

      <figcaption className="flex items-center justify-center space-x-3">
        <img
          className="h-9 w-9 rounded-full"
          src={source}
          alt={t(`homepage.testimonials.${userName}.imgAltText`)}
        />
        <div className="text-left font-medium text-primary-800 dark:text-primary-300">
          {t(`homepage.testimonials.${userName}.userName`)}
        </div>
      </figcaption>
    </figure>
  );
}

export default Testimonial;
