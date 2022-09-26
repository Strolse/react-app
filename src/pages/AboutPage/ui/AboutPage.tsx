import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      {t('О сайте', { ns: 'about' })}
    </div>
  );
};

export default AboutPage;
