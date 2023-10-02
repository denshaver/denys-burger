import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const [lngEn, setLngEn] = useState("en");
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setLngEn(prev => !prev);
  };

 

  return (
    <div className='lng-toggle' >
      <button className={lngEn?'lng-a lng-b':'lng-b'} onClick={() => handleLanguageChange('en')}>English</button>
      <button className={!lngEn?'lng-a lng-b':'lng-b'} onClick={() => handleLanguageChange('uk')}>Українська</button>
    </div>
  );
};

export default LanguageToggle;