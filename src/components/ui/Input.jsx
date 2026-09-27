import React from 'react';

const Input = ({ label, type = 'text', placeholder, rows = 4 }) => {
  const baseStyle = "w-full border-b border-textPrimary/30 bg-transparent py-2 outline-none focus:border-accent transition-colors text-sm";
  
  return (
    <div className="flex flex-col mb-6">
      {label && (
        <label className="text-xs font-bold tracking-widest uppercase text-textPrimary/70 mb-2">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea className={baseStyle} placeholder={placeholder} rows={rows} />
      ) : (
        <input type={type} className={baseStyle} placeholder={placeholder} />
      )}
    </div>
  );
};

export default Input;