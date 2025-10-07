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
  /** Optional icon element to display on the left */
  icon?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  label,
  color = 'grey',
  size = 'default',
  type = 'filled',
  icon,
  className = '',
}) => {
  const tagClasses = [
    'tag',
    `tag--${size}`,
    `tag--${type}`,
    `tag--${color}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <span className={tagClasses}>
      {icon && (
        <span className="tag__icon-wrapper">
          {icon}
        </span>
      )}
      <span className="tag__label">{label}</span>
    </span>
  );
};

export default Tag;
