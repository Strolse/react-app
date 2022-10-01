import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['main', 'about']);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/about"
          className={cls.mainLink}
        >
          {t('О сайте', { ns: 'about' })}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('Главная страница', { ns: 'main' })}
        </AppLink>
      </div>
    </div>
  );
};
