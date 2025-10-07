import React from 'react';
import './Tag.css';

export interface TagProps {
  /** The text content of the tag */
  children: React.ReactNode;
  /** Tag size variant */
  size?: 'small' | 'default' | 'large';
  /** Tag style variant */
  variant?: 'filled' | 'filled-solid';
  /** Tag color variant */
  color?: 'grey' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'translucent-grey' | 'translucent-white';
  /** Icon to display on the left */
  leftIcon?: React.ReactNode;
  /** Icon to display on the right */
  rightIcon?: React.ReactNode;
  /** Additional CSS class name */
  className?: string;
  /** Click handler for interactive tags */
  onClick?: () => void;
}

const Tag: React.FC<TagProps> = ({
  children,
  size = 'default',
  variant = 'filled',
  color = 'grey',
  leftIcon,
  rightIcon,
  className = '',
  onClick,
}) => {
  const tagClasses = [
    'tag',
    `tag--${size}`,
    `tag--${variant}`,
    `tag--${color}`,
    onClick && 'tag--interactive',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (onClick && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick();
    }
  };

  const TagElement = onClick ? 'button' : 'div';

  return (
    <TagElement
      className={tagClasses}
      onClick={onClick ? handleClick : undefined}
      onKeyDown={onClick ? handleKeyDown : undefined}
      tabIndex={onClick ? 0 : undefined}
      type={onClick ? 'button' : undefined}
    >
      <div className="tag__content">
        {leftIcon && <span className="tag__icon tag__icon--left">{leftIcon}</span>}
        <span className="tag__text">{children}</span>
        {rightIcon && <span className="tag__icon tag__icon--right">{rightIcon}</span>}
      </div>
    </TagElement>
  );
};

export default Tag;