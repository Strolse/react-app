import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropDownDirection = 'top' | 'bottom';

interface ListBoxProps {
  items?: ListBoxItem[],
  className?: string,
  value?: string,
  defaultValue?: string,
  onChange: <T extends string>(value: T) => void,
  readonly?: boolean,
  direction?: DropDownDirection,
  label?: string,
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  bottom: cls.optionsBottom,
  top: cls.optionsTop,
};

export function ListBox(props: ListBoxProps) {
  const {
    className, items, value, defaultValue, onChange, readonly, direction = 'bottom', label,
  } = props;

  const optionsClasses = [mapDirectionClass[direction]];

  return (
    <HStack gap="4">
      {label && <span>{`${label}>`}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, {}, [className])}
      >
        <HListBox.Button className={cls.trigger} disabled={readonly}>
          <Button disabled={readonly}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}

            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: item.disabled })}
                >
                  {selected && '#'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
