import React, { useState, useRef, useEffect } from 'react';
import './Select.css';

export type SelectType = 'single' | 'multi-select' | 'label' | 'label-high-emphasis';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /** Label for the select field */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Available options */
  options: SelectOption[];
  /** Selected value(s) */
  value?: string | string[];
  /** Change handler */
  onChange?: (value: string | string[]) => void;
  /** Type variant */
  type?: SelectType;
  /** Disabled state */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Additional CSS class */
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder = 'Text',
  options,
  value,
  onChange,
  type = 'single',
  disabled = false,
  error = false,
  errorMessage = 'Alert text',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const selectRef = useRef<HTMLDivElement>(null);

  // Initialize selected values from prop
  useEffect(() => {
    if (value) {
      setSelectedValues(Array.isArray(value) ? value : [value]);
    } else {
      setSelectedValues([]);
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (optionValue: string) => {
    if (type === 'multi-select' || type === 'label' || type === 'label-high-emphasis') {
      // For label types, treat as single select
      if (type === 'label' || type === 'label-high-emphasis') {
        setSelectedValues([optionValue]);
        setIsOpen(false);
        onChange?.(optionValue);
      } else {
        // Multi-select
        const newValues = selectedValues.includes(optionValue)
          ? selectedValues.filter(v => v !== optionValue)
          : [...selectedValues, optionValue];
        setSelectedValues(newValues);
        onChange?.(newValues);
      }
    } else {
      // Single select
      setSelectedValues([optionValue]);
      setIsOpen(false);
      onChange?.(optionValue);
    }
  };

  const handleRemoveTag = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newValues = selectedValues.filter(v => v !== optionValue);
    setSelectedValues(newValues);
    onChange?.(newValues);
  };

  const getSelectedLabel = () => {
    if (selectedValues.length === 0) return placeholder;
    const option = options.find(opt => opt.value === selectedValues[0]);
    return option?.label || placeholder;
  };

  const isLabelType = type === 'label' || type === 'label-high-emphasis';
  const hasValue = selectedValues.length > 0;
  const showBorder = type === 'single' || type === 'multi-select';

  const containerClasses = [
    'select',
    `select--${type}`,
    disabled && 'select--disabled',
    error && 'select--error',
    isOpen && 'select--open',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} ref={selectRef}>
      {label && !isLabelType && (
        <label className="select__label">
          {label}
        </label>
      )}

      {isLabelType && label && (
        <span className="select__inline-label">{label}</span>
      )}

      {type === 'multi-select' && selectedValues.length > 0 && (
        <div className="select__tags">
          {selectedValues.map(val => {
            const option = options.find(opt => opt.value === val);
            return (
              <span key={val} className="select__tag">
                <span className="select__tag-label">{option?.label}</span>
                <button
                  type="button"
                  className="select__tag-remove"
                  onClick={(e) => handleRemoveTag(val, e)}
                  aria-label={`Remove ${option?.label}`}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M12 4L4 12M4 4L12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </span>
            );
          })}
        </div>
      )}

      <button
        type="button"
        className="select__field"
        onClick={handleToggle}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="select__value">
          {getSelectedLabel()}
        </span>
        <svg
          className="select__icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && !disabled && (
        <div className="select__dropdown">
          {options.map((option) => {
            const isSelected = selectedValues.includes(option.value);
            return (
              <button
                key={option.value}
                type="button"
                className={`select__option ${isSelected ? 'select__option--selected' : ''}`}
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}

      {error && errorMessage && (
        <div className="select__error-message">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1L1 14H15L8 1Z"
              fill="currentColor"
            />
            <path
              d="M8 6V9M8 11V11.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Select;

