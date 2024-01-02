import React, { memo, InputHTMLAttributes, useState, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const { className = '', value, onChange, type = 'text', placeholder, autoFocus, ...otherProps } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
