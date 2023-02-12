/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { ErrorMessage } from '@hookform/error-message';

import { cn } from '@/utils';

import { Icon } from '../icon';
import { Label } from '../label';

import styles from './styles.module.scss';
import { InputProps, defaultProps } from './props';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, iconColor, ...props }: InputProps, ref) => (
    <div className={cn('formGroup relative', props.className)}>
      {props.label && (
        <span className="inputHeader">
          <Label name={props.name} label={props.label} />
          {props.errors && (
            <ErrorMessage
              name={props.name}
              errors={props.errors}
              render={({ message }) => <p className="error">{message}</p>}
            />
          )}
        </span>
      )}

      {icon && (
        <div
          className={cn(
            styles.inputIcon,
            'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none',
          )}
        >
          <Icon icon={icon} stroke={iconColor} />
        </div>
      )}

      <input
        id={props.name}
        {...props}
        ref={ref}
        className={cn('field', props.className)}
      />
    </div>
  ),
);

Input.defaultProps = defaultProps;