import sprite from '../../assets/icons/social-sprite.svg';
import Social from '../../components/Social/Social';

function SocialList() {
  return (
    <ul className="mt-5 flex justify-center space-x-6">
      <Social
        href="https://www.facebook.com/people/CasaBlanca-Private-Heated-Pool/100091592920461/"
        icon={`${sprite}#icon-facebook`}
        desc="Facebook"
      />

      <Social
        href="https://www.instagram.com/"
        icon={`${sprite}#icon-instagram`}
        desc="Instagram"
      />
    </ul>
  );
}

export default SocialList;
