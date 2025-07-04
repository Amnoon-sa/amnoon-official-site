import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="loading">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;