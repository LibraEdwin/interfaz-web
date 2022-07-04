import { BannerSecondary, OurSurveys, Demos } from '@components/block';
import dataWeb from '../../../configWeb.json';
import { Section } from '@components/containers';

const OnlyneSurveys = () => {
  const { demos } = dataWeb.surveys;
  const { Wsspencuestas } = dataWeb.MenzajesWhatsApp;
  return (
    <>
      <BannerSecondary />
      <Section color='accent6' id="testimonials" >
        <OurSurveys Wsspencuestas={Wsspencuestas} />
      </Section>
      <Demos items={demos} />
    </>
  );
};

export default OnlyneSurveys;
