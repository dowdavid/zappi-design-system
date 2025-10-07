import React, { useState } from 'react';
import './Chip.css';

export interface ChipProps {
  /** Label text */
  label: string;
  /** Whether the chip is selected */
  selected?: boolean;
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Whether to show checkbox for multiselect */
  multiselect?: boolean;
  /** Size variant */
  size?: 'default' | 'small';
  /** Callback when chip is clicked */
  onClick?: () => void;
  /** Callback when selection changes */
  onChange?: (selected: boolean) => void;
  /** Additional CSS class */
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  disabled = false,
  multiselect = false,
  size = 'default',
  onClick,
  onChange,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    
    if (onChange) {
      onChange(!selected);
    }
    if (onClick) {
      onClick();
    }
  };

  const chipClasses = [
    'chip',
    `chip--${size}`,
    selected ? 'chip--selected' : 'chip--default',
    disabled && selected ? 'chip--disabled-selected' : '',
    disabled && !selected ? 'chip--disabled' : '',
    isHovered && !disabled ? 'chip--hover' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={chipClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      aria-pressed={selected}
    >
      <div className="chip__contents">
        {multiselect && (
          <div className="chip__checkbox">
            <div className={`chip__checkbox-bg ${selected ? 'chip__checkbox-bg--checked' : ''}`}>
              {selected && (
                <svg 
                  className="chip__checkbox-check" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none"
                >
                  <path 
                    d="M10 3L4.5 8.5L2 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>
        )}
        <span className="chip__label">{label}</span>
      </div>
    </button>
  );
};

export default Chip;
