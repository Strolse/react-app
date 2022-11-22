import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollByPath, ScrollRestorationActions } from 'features/ScrollRestoration';
import {
  memo, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle/useThrottle';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo((props:PageProps) => {
  const { className, children, onScrollEnd } = props;
  const { t } = useTranslation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e:UIEvent<HTMLDivElement>) => {
    dispatch(ScrollRestorationActions.setScrollPosition({
      path: pathname,
      position: e.currentTarget.scrollTop,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
    </section>
  );
});
