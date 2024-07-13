import Page from '../../components/layouts/Page/Page';
import T from '../../types/T';

function Homepage({ t }: T) {
  return (
    <Page logoStyles="text-white" t={t}>
      <h1>Hello world</h1>
    </Page>
  );
}

export default Homepage;
