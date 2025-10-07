import React, { useState } from 'react';
import './Toggle.css';

export interface ToggleProps {
  /** Toggle size variant */
  size?: 'small' | 'large';
  /** Whether the toggle is checked */
  checked?: boolean;
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Additional CSS class name */
  className?: string;
  /** Label for accessibility */
  'aria-label'?: string;
  /** ID for form association */
  id?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  size = 'small',
  checked = false,
  disabled = false,
  onChange,
  className = '',
  'aria-label': ariaLabel,
  id,
}) => {
  const [internalChecked, setInternalChecked] = useState(checked);
  
  // Use controlled state if onChange is provided, otherwise use internal state
  const isChecked = onChange ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    
    const newChecked = !isChecked;
    
    if (onChange) {
      onChange(newChecked);
    } else {
      setInternalChecked(newChecked);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  const toggleClasses = [
    'toggle',
    `toggle--${size}`,
    isChecked && 'toggle--checked',
    disabled && 'toggle--disabled',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={toggleClasses}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-checked={isChecked}
      aria-label={ariaLabel}
      role="switch"
      id={id}
    >
      <div className="toggle__track">
        <div className="toggle__thumb" />
      </div>
    </button>
  );
};

export default Toggle;