import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }:ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text title={t('Профиль', { ns: 'profile' })} />
      {readonly
        ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.editBtn}
            onClick={onEdit}
          >
            {t('Редактировать', { ns: 'profile' })}
          </Button>
        )
        : (
          <>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              className={cls.editBtn}
              onClick={onCancelEdit}
            >
              {t('Отменить', { ns: 'profile' })}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE}
              className={cls.saveBtn}
              onClick={onSave}
            >
              {t('Сохранить', { ns: 'profile' })}
            </Button>
          </>
        )}
    </div>
  );
};
