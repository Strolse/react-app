import { getUserAuthData } from 'entities/User';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';

interface EditableProfilePageHeaderProps {
  className?: string;
}

export const EditableProfilePageHeader = memo((props:EditableProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

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
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Text title={t('Профиль', { ns: 'profile' })} />
      {canEdit && (
        <div>
          {readonly
            ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Редактировать', { ns: 'profile' })}
              </Button>
            )
            : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                >
                  {t('Отменить', { ns: 'profile' })}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                >
                  {t('Сохранить', { ns: 'profile' })}
                </Button>
              </HStack>
            )}
        </div>
      )}
    </HStack>
  );
});
