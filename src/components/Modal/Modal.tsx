import React, { useEffect } from 'react';
import './Modal.css';

export interface ModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Callback when the modal should close */
  onClose: () => void;
  /** Modal title */
  title: string;
  /** Optional secondary text/description */
  secondaryText?: string;
  /** Children content */
  children: React.ReactNode;
  /** Size variant */
  size?: 'small' | 'default' | 'large';
  /** Show the semi-transparent overlay background */
  showOverlay?: boolean;
  /** Show action buttons */
  showActions?: boolean;
  /** Cancel button text */
  cancelText?: string;
  /** Primary button text */
  primaryText?: string;
  /** Callback when primary button is clicked */
  onPrimary?: () => void;
  /** Show destructive/remove button */
  showDestructive?: boolean;
  /** Destructive button text */
  destructiveText?: string;
  /** Callback when destructive button is clicked */
  onDestructive?: () => void;
  /** Show close icon button */
  showCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  secondaryText,
  children,
  size = 'default',
  showOverlay = true,
  showActions = true,
  cancelText = 'Cancel',
  primaryText = 'Primary',
  onPrimary,
  showDestructive = false,
  destructiveText = 'Remove',
  onDestructive,
  showCloseButton = true,
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
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePrimary = () => {
    if (onPrimary) {
      onPrimary();
    } else {
      onClose();
    }
  };

  const handleDestructive = () => {
    if (onDestructive) {
      onDestructive();
    }
  };

  const overlayClasses = [
    'modal-overlay',
    showOverlay ? 'modal-overlay--visible' : 'modal-overlay--transparent',
  ].join(' ');

  const modalClasses = [
    'modal',
    `modal--${size}`,
  ].join(' ');

  return (
    <div className={overlayClasses} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={modalClasses}>
        {/* Header with title and close button */}
        <div className="modal__header">
          <div className="modal__header-content">
            <h2 id="modal-title" className="modal__title">{title}</h2>
            {secondaryText && (
              <p className="modal__secondary-text" dangerouslySetInnerHTML={{ __html: secondaryText }} />
            )}
          </div>
          {showCloseButton && (
            <button
              type="button"
              className="modal__close-button"
              onClick={onClose}
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Content area */}
        <div className="modal__content-wrapper">
          <div className="modal__content">
            {children}
          </div>

          {/* Action buttons */}
          {showActions && (
            <div className="modal__actions">
              {/* Destructive button on the left */}
              {showDestructive && (
                <div className="modal__actions-left">
                  <button
                    type="button"
                    className="modal__button modal__button--destructive"
                    onClick={handleDestructive}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H21M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>{destructiveText}</span>
                  </button>
                </div>
              )}

              {/* Cancel and Primary buttons on the right */}
              <div className="modal__actions-right">
                <button
                  type="button"
                  className="modal__button modal__button--cancel"
                  onClick={onClose}
                >
                  {cancelText}
                </button>
                <button
                  type="button"
                  className="modal__button modal__button--primary"
                  onClick={handlePrimary}
                >
                  {primaryText}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

