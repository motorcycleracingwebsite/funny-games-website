import React, { createContext, useContext, useState, useCallback } from 'react';

interface NotificationContextType {
  showNotification: (message: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<{
    message: string;
    type: 'success' | 'info' | 'warning' | 'error';
    show: boolean;
  }>({
    message: '',
    type: 'info',
    show: false
  });

  const showNotification = useCallback((message: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    setNotification({ message, type, show: true });
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 4000);
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification.show && (
        <div className="fixed top-4 right-4 z-50 animate-slide-in">
          <div className={`
            px-6 py-3 rounded-lg shadow-lg border backdrop-blur-sm
            ${notification.type === 'success' ? 'bg-green-900/80 border-green-500 text-green-100' :
              notification.type === 'warning' ? 'bg-yellow-900/80 border-yellow-500 text-yellow-100' :
              notification.type === 'error' ? 'bg-red-900/80 border-red-500 text-red-100' :
              'bg-purple-900/80 border-purple-500 text-purple-100'}
          `}>
            {notification.message}
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};