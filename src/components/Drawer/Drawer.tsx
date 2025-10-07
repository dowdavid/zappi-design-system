import React, { useEffect } from 'react';
import './Drawer.css';

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when the drawer should close */
  onClose: () => void;
  /** Drawer title */
  title: string;
  /** Optional description text */
  description?: string;
  /** Children content */
  children: React.ReactNode;
  /** Show action buttons */
  showActions?: boolean;
  /** Cancel button text */
  cancelText?: string;
  /** Save/confirm button text */
  saveText?: string;
  /** Callback when save/confirm is clicked */
  onSave?: () => void;
  /** Position variant - affects which corners are rounded */
  position?: 'top' | 'bottom';
  /** Width of the drawer in pixels */
  width?: number;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  showActions = true,
  cancelText = 'Cancel',
  saveText = 'Save',
  onSave,
  position = 'top',
  width = 600,
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleScrimClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave();
    }
  };

  const drawerClasses = [
    'drawer',
    `drawer--${position}`,
  ].join(' ');

  return (
    <div className="drawer-overlay" onClick={handleScrimClick} role="dialog" aria-modal="true">
      {/* Scrim/Backdrop */}
      <div className="drawer-scrim" onClick={handleScrimClick} />

      {/* Drawer Panel */}
      <div className={drawerClasses} style={{ width: `${width}px` }}>
        <div className="drawer__header">
          {/* Main header content */}
          <div className="drawer__header-main">
            {/* Title */}
            <div className="drawer__title-wrapper">
              <h2 className="drawer__title">{title}</h2>
            </div>

            {/* Action buttons */}
            {showActions && (
              <div className="drawer__actions">
                <button
                  type="button"
                  className="drawer__button drawer__button--cancel"
                  onClick={onClose}
                >
                  {cancelText}
                </button>
                <button
                  type="button"
                  className="drawer__button drawer__button--save"
                  onClick={handleSave}
                >
                  {saveText}
                </button>
              </div>
            )}
          </div>

          {/* Description */}
          {description && (
            <div className="drawer__description">
              <p>{description}</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="drawer__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;

