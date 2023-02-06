import React, {
  InputHTMLAttributes, memo, useCallback,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Input = memo((props:InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    readonly,
    type = 'text',
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder
      && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
