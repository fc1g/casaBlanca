import useGlobal from '../../hooks/globalStore';

type ErrorMessageProps = {
  errorMessage: string;
};

function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  const useTranslation = useGlobal(store => store.useTranslation);
  const { t } = useTranslation();

  return (
    <section className="w-full bg-lightGrayish 2xl:container 2xl:mx-auto dark:bg-dark">
      <div className="flex h-full items-center justify-center px-4 py-8 lg:px-6 lg:py-16">
        <div className="text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary-600 lg:text-9xl dark:text-primary-500">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-dark md:text-4xl dark:text-white">
            {errorMessage}
          </p>
          <p className="mb-4 text-lg font-light text-gray-600 dark:text-gray-300">
            {t('errorMessage')}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ErrorMessage;
