import React from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is in indeterminate/semi-checked state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Callback when checkbox state changes */
  onChange?: (checked: boolean) => void;
  /** Additional CSS class */
  className?: string;
  /** Input name attribute */
  name?: string;
  /** Input value attribute */
  value?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  onChange,
  className = '',
  name,
  value,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  const checkboxClasses = [
    'checkbox',
    disabled ? 'checkbox--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
        aria-checked={indeterminate ? 'mixed' : checked}
      />
      <span className={`checkbox__box ${checked || indeterminate ? 'checkbox__box--checked' : ''}`}>
        {checked && !indeterminate && (
          <svg className="checkbox__icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {indeterminate && (
          <svg className="checkbox__icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M3 6H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;

