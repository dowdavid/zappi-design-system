import React, { useState } from 'react';
import './Chip.css';

export interface ChipProps {
  /** The text label displayed in the chip */
  label: string;
  /** Whether the chip is selected */
  selected?: boolean;
  /** Whether the chip is disabled */
  disabled?: boolean;
  /** Size variant of the chip */
  size?: 'default' | 'small';
  /** Whether to show multiselect checkbox */
  multiselect?: boolean;
  /** Callback fired when the chip is clicked */
  onClick?: (selected: boolean) => void;
  /** Additional CSS class name */
  className?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  disabled = false,
  size = 'default',
  multiselect = true,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(!selected);
    }
  };

  const getChipState = () => {
    if (disabled && selected) return 'disabled-selected';
    if (disabled) return 'disabled';
    if (selected) return 'selected';
    if (isHovered) return 'hover';
    return 'default';
  };

  const chipClasses = [
    'chip',
    `chip--${size}`,
    `chip--${getChipState()}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={chipClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={selected}
      aria-disabled={disabled}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="chip__content">
        {multiselect && (
          <div className="chip__checkbox">
            <div className="chip__checkbox-bg">
              {selected && !disabled && (
                <svg
                  className="chip__checkbox-icon"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
    </div>
  );
};

export default Chip;