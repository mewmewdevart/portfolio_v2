const EmailSidebar = () => {
  return (
    <aside
      className="fixed bottom-0 right-0 flex flex-col items-center  bg-red-500"
      aria-label="Contato por email"
    >
      <ul className="text-white w-fit mx-20 flex flex-col items-center gap-2">
        <li className="rotate-90 mb-[7.5rem]">
          <a
            href="mailto:MewmewDevart@gmail.com"
            className="font-normal hover:underline"
            aria-label="Enviar e-mail para MewmewDevart@gmail.com"
          >
            MewmewDevart@gmail.com
          </a>
        </li>
      </ul>
      <div
        role="presentation"
        aria-hidden="true"
        className="border-r border-gray h-[6.25rem] mx-4 w-[0.3125rem]"
      ></div>
    </aside>
  );
};

export default EmailSidebar;
