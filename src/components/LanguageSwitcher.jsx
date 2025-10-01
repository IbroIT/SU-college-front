  import React, { useState, useRef, useEffect } from 'react';
  import { useTranslation } from 'react-i18next';
import EnIcon from '../assets/En_icon.svg';
import RuIcon from '../assets/Ru_icon.svg';
import KgIcon from '../assets/Kg_icon.svg';
const LanguageSwitcher = ({ 
  position = 'bottom-right',
  showText = true,
  variant = 'default',
  onChange 
}) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Языки с флагами и названиями
  const languages = [
    { code: 'en', name: t('lang_en'), icon: EnIcon },
    { code: 'ru', name: t('lang_ru'), icon: RuIcon },
    { code: 'kg', name: t('lang_kg'), icon: KgIcon }
  ];

  // Получение текущего языка
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Обработка клика вне dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Смена языка
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    if (onChange) {
      onChange(languageCode);
    }
  };

  // Позиции dropdown
  const positionClasses = {
    'bottom-right': 'origin-top-right right-0 mt-2',
    'bottom-left': 'origin-top-left left-0 mt-2',
    'top-right': 'origin-bottom-right right-0 bottom-full mb-2',
    'top-left': 'origin-bottom-left left-0 bottom-full mb-2'
  };

  // Стили для разных вариантов
  const variantStyles = {
    default: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    solid: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    minimal: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  };

  return (
    <div className="lang-switcher" ref={dropdownRef} style={{ position: 'relative', marginLeft: 0 }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lang-switcher-btn"
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
        style={{ minWidth: 120, display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <img
          src={currentLanguage.icon}
          alt={currentLanguage.code}
          style={{ width: '18px', height: '18px', minWidth: '18px', minHeight: '18px', maxWidth: '18px', maxHeight: '18px', objectFit: 'contain', borderRadius: '50%' }}
          draggable="false"
          onError={e => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMzM3QUJDIi8+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjgiIGZpbGw9IiNmZmYiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iNSIgZmlsbD0iI0U1MkYyRiIvPgo8L3N2Zz4K';
          }}
        />
        <span style={{ fontWeight: 600, fontSize: '1rem', letterSpacing: '0.5px', color: '#1976d2' }}>
          {currentLanguage.name}
        </span>
        <svg
          style={{ width: 16, height: 16, marginLeft: 2, transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none', color: '#1976d2' }}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="lang-switcher-dropdown" style={{ right: 0, top: '100%' }}>
          {languages.map(language => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="lang-switcher-dropdown-btn"
              style={i18n.language === language.code ? { fontWeight: 600, color: '#1976d2', background: '#f0f4ff' } : {}}
              type="button"
            >
              <img
                src={language.icon}
                alt={language.code}
                style={{ width: '18px', height: '18px', minWidth: '18px', minHeight: '18px', maxWidth: '18px', maxHeight: '18px', objectFit: 'contain', borderRadius: '50%', marginRight: 8 }}
                draggable="false"
                onError={e => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMzM3QUJDIi8+CjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjgiIGZpbGw9IiNmZmYiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iNSIgZmlsbD0iI0U1MkYyRiIvPgo8L3N2Zz4K';
                }}
              />
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;