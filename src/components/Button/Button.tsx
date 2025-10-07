import React, { useState } from 'react';
import './Button.css';

export interface ButtonProps {
  /** The text content of the button */
  children: React.ReactNode;
  /** Button size variant */
  size?: 'small' | 'default' | 'large';
  /** Button style variant */
  variant?: 'filled' | 'naked';
  /** Button emphasis level */
  emphasis?: 'high' | 'low';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS class name */
  className?: string;
  /** Button type for forms */
  type?: 'button' | 'submit' | 'reset';
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'default',
  variant = 'filled',
  emphasis = 'high',
  disabled = false,
  onClick,
  className = '',
  type = 'button',
  leftIcon,
  rightIcon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = [
    'btn',
    `btn--${size}`,
    `btn--${variant}`,
    `btn--${emphasis}-emphasis`,
    disabled && 'btn--disabled',
    isHovered && !disabled && 'btn--hover',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <div className="btn__content">
        {leftIcon && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
        <span className="btn__text">{children}</span>
        {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
      </div>
    </button>
  );
};

export default Button;