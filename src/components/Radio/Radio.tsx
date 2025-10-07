import React from 'react';
import './Radio.css';

export interface RadioProps {
  /** Whether the radio is checked */
  checked?: boolean;
  /** Whether the radio is disabled */
  disabled?: boolean;
  /** Label text */
  label?: string;
  /** Callback when radio is selected */
  onChange?: (value: string) => void;
  /** Additional CSS class */
  className?: string;
  /** Input name attribute (for grouping radios) */
  name: string;
  /** Input value attribute */
  value: string;
}

const Radio: React.FC<RadioProps> = ({
  checked = false,
  disabled = false,
  label,
  onChange,
  className = '',
  name,
  value,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  const radioClasses = [
    'radio',
    disabled ? 'radio--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className={radioClasses}>
      <input
        type="radio"
        className="radio__input"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
      />
      <span className={`radio__button ${checked ? 'radio__button--checked' : ''}`}>
        <span className="radio__inner"></span>
      </span>
      {label && <span className="radio__label">{label}</span>}
    </label>
  );
};

export default Radio;

