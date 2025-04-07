import React from 'react';

const FooterComponent: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-20 bg-dark text-white">
        <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados | Desenvolvido por Mewmew</p>
    </footer>
  );
};

export default FooterComponent;