import React, { createContext, useState, useContext } from 'react';

const SelectedValueContext = createContext();

export const SelectedValueProvider = ({ children }) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SelectedValueContext.Provider value={{ selectedValue, setSelectedValue }}>
      {children}
    </SelectedValueContext.Provider>
  );
};

export const useSelectedValue = () => {
  const context = useContext(SelectedValueContext);
  if (!context) {
    throw new Error('useSelectedValue must be used within a SelectedValueProvider');
  }
  return context;
};
