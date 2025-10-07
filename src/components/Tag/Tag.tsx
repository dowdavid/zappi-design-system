import React from 'react';
import './Tag.css';

export type TagColor = 
  | 'grey' 
  | 'primary' 
  | 'secondary' 
  | 'info' 
  | 'success' 
  | 'warning' 
  | 'error'
  | 'translucent-grey'
  | 'translucent-white';

export type TagSize = 'small' | 'default' | 'large';
export type TagType = 'filled' | 'filled-solid';

export interface TagProps {
  /** Label text */
  label: string;
  /** Color variant */
  color?: TagColor;
  /** Size variant */
  size?: TagSize;
  /** Type variant - filled (light) or filled-solid (solid color) */
  type?: TagType;
  /** Optional icon element to display */
  icon?: React.ReactNode;
  /** Show icon on left side */
  showIcon?: boolean;
  /** Additional CSS class */
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  label,
  color = 'grey',
  size = 'default',
  type = 'filled',
  icon,
  showIcon = false,
  className = '',
}) => {
  const tagClasses = [
    'tag',
    `tag--${size}`,
    `tag--${type}`,
    `tag--${color}`,
    className,
  ].filter(Boolean).join(' ');

  // Default icon - lightning bolt SVG (as shown in Figma)
  const defaultIcon = (
    <svg className="tag__icon" viewBox="0 0 16 16" fill="none">
      <path 
        d="M8.5 2L4 9H8L7.5 14L12 7H8L8.5 2Z" 
        fill="currentColor"
      />
    </svg>
  );

  return (
    <span className={tagClasses}>
      {showIcon && (
        <span className="tag__icon-wrapper">
          {icon || defaultIcon}
        </span>
      )}
      <span className="tag__label">{label}</span>
    </span>
  );
};

export default Tag;
