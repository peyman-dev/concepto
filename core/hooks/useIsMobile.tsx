import React from 'react';

export const isMobile = (customWidth: number = 768): boolean => {
  return window.innerWidth <= customWidth;
};

 const useIsMobile = (customWidth: number = 768): boolean => {
  const [mobile, setMobile] = React.useState(isMobile(customWidth));

  React.useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile(customWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [customWidth]);

  return mobile;
};

export default useIsMobile;