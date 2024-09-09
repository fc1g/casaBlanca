import useGlobal from '../../hooks/useGlobal';
import Title from '../../ui/Title/Title';
import OcolicaPlaces from '../../ui/VicinityContent/VicinityContent';
import OcolicaMenu from '../../ui/VicinityMenu/VicinityMenu';

export default function Vicinity() {
  const { t } = useGlobal()!;

  return (
    <div className="mx-auto max-w-screen-xl py-8 text-center lg:py-16">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <Title
          title={`${t('vicinity.title')}`}
          subtitle={`${t('vicinity.subtitle')}`}
        />
      </div>

      <OcolicaMenu />

      <OcolicaPlaces />
    </div>
  );
}
