import { useState } from 'react';

import TabContent from '../../components/TabContent/TabContent';
import Tab from '../../components/TabBtn/TabBtn';
import useGlobal from '../../hooks/useGlobal';

function AboutTabs() {
  const { t } = useGlobal()!;
  const [active, setActive] = useState(0);

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="mb-4 border-b border-gray-200 dark:border-gray-600">
        <ul
          className="flex items-center justify-center space-x-12 text-center text-sm font-medium text-dark dark:text-white"
          role="tablist"
        >
          <Tab data={0} active={active} onClick={setActive}>
            {t('about.infoBtn.house')}
          </Tab>

          <Tab data={1} active={active} onClick={setActive}>
            {t('about.infoBtn.vicinity')}
          </Tab>

          <Tab data={2} active={active} onClick={setActive}>
            {t('about.infoBtn.rentInfo')}
          </Tab>

          <Tab data={3} active={active} onClick={setActive}>
            Transfer
          </Tab>
        </ul>
      </div>

      <TabContent>
        <>
          <p className="block max-w-4xl">
            {active === 0 && t('about.infoText.house.firstPart')}
            {active === 1 && t('about.infoText.vicinity.firstPart')}
            {active === 2 && t('about.infoText.rentInfo.firstPart')}
            {active === 3 && t('about.infoText.transfer.firstPart')}
          </p>

          <p className="mt-4 block max-w-4xl">
            {active === 0 && t('about.infoText.house.secondPart')}
            {active === 1 && t('about.infoText.vicinity.secondPart')}
            {active === 2 && t('about.infoText.rentInfo.secondPart')}
            {active === 3 && t('about.infoText.transfer.secondPart')}
          </p>
        </>
      </TabContent>
    </div>
  );
}

export default AboutTabs;
