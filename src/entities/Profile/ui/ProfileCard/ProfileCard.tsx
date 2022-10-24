import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import cls from './ProfileCard.module.scss';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }:ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль', { ns: 'profile' })} />
        <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
          {t('Редактировать', { ns: 'profile' })}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя', { ns: 'profile' })}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваша фамилия', { ns: 'profile' })}
          className={cls.input}
        />
      </div>
    </div>
  );
});
