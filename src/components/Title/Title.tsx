type TitleProps = {
  title: string;
  subtitle: string;
};

function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="mx-auto max-w-screen-sm">
      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-dark dark:text-white">
        {title}
      </h2>
      <p className="mb-8 font-light text-gray-600 sm:text-xl lg:mb-16 dark:text-gray-300">
        {subtitle}
      </p>
    </div>
  );
}

export default Title;
