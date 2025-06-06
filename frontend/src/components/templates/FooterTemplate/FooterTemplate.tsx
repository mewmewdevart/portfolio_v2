import * as React from "react";

const FooterTemplate: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <section
            className="w-full bg-dark mb-4"
            aria-labelledby="projects-section-title"
        >
            <div className="flex flex-col w-full mx-auto gap-6 justify-center px-4 lg:px-40 transition-all duration-200 ease-in-out text-center text-gray-300">
                © Copyright {currentYear}. Feito por MewMewDev
            </div>
        </section>
    );
};

export default FooterTemplate;
