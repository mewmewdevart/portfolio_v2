import React, { useEffect, useState } from 'react';

const TitleAnimation: React.FC = () => {
  const originalTitle = 'Portfolio'; 
  const [isHidden, setIsHidden] = useState(false);
  const [animationEnabled, setAnimationEnabled] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsHidden(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    let interval: number | undefined;

    if (isHidden && animationEnabled) {
      interval = window.setInterval(() => {
        document.title = document.title === originalTitle ? 'Steam Clone | Games' : originalTitle;
      }, 10000); 
    } else {
      clearInterval(interval);
      document.title = originalTitle;
    }

    return () => clearInterval(interval);
  }, [isHidden, animationEnabled, originalTitle]);

  const toggleAnimation = () => {
    setAnimationEnabled(!animationEnabled);
  };

  return (
    <div>
      <button onClick={toggleAnimation} className="hidden">
        {animationEnabled ? 'Desativar Animação de Título' : 'Ativar Animação de Título'}
      </button>
    </div>
  );
};

export default TitleAnimation;
