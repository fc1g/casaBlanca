import Social from '../../Social/Social';

// eslint-disable-next-line import/no-absolute-path
import sprite from '/social-sprite.svg';

function SocialList() {
  return (
    <ul className="mt-5 flex justify-center space-x-6">
      <Social
        href="https://www.facebook.com/people/CasaBlanca-Private-Heated-Pool/100091592920461/"
        icon={`${sprite}#icon-facebook`}
      />

      <Social
        href="https://www.instagram.com/"
        icon={`${sprite}#icon-instagram`}
      />

      <Social href="https://x.com/" icon={`${sprite}#icon-x`} />
    </ul>
  );
}

export default SocialList;
