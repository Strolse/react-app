import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = (props:IconProps) => {
  const { className, Svg, inverted } = props;
  const { t } = useTranslation();

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className])} />
  );
};
