"use client";

import { useEffect, useState } from "react";
import { whatsappLink, type WhatsAppContext } from "@/lib/whatsapp";

interface Props {
  context?: WhatsAppContext;
}

export function WhatsAppFloating({ context = "general" }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={whatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Hierarchy por WhatsApp"
      className={`group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-ink-800/15 transition-all duration-300 hover:scale-110 active:scale-95 ${
        mounted ? "opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.92 2.722.92.659 0 1.79-.39 2.105-1.092.205-.428.205-.804.143-1.077-.057-.236-.36-.42-.745-.66z" />
        <path d="M16.103 4C9.444 4 4 9.41 4 16.027c0 2.108.555 4.18 1.61 5.998L4 28l6.197-1.583a12.115 12.115 0 0 0 5.901 1.524h.005C22.764 27.94 28 22.611 28 16.04 28 12.81 26.736 9.79 24.444 7.51 22.146 5.227 19.124 4 16.103 4zm0 21.876h-.004a10.115 10.115 0 0 1-5.139-1.402l-.368-.218-3.804.97 1.013-3.66-.241-.385a9.875 9.875 0 0 1-1.54-5.27c0-5.473 4.488-9.93 10.083-9.93 2.69 0 5.222 1.044 7.122 2.94 1.9 1.895 2.97 4.42 2.97 7.103 0 5.473-4.488 9.852-10.092 9.852z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-ink-800 px-3 py-1.5 text-xs font-medium text-bone-50 group-hover:block">
        Hablemos por WhatsApp
      </span>
    </a>
  );
}
