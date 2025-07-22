// src/components/ui/Icon.tsx

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiBootstrap,
} from "react-icons/si";

import type { IconType } from "react-icons";

type IconMap = Record<string, IconType>;

export const RawIcons: IconMap = {
  Html: SiHtml5,
  Css: SiCss3,
  Js: SiJavascript,
  Ts: SiTypescript,
  Next: SiNextdotjs,
  Tailwind: SiTailwindcss,
  Php: SiPhp,
  Bootstrap: SiBootstrap,
};

export const Icons = {
  Html: () => <SiHtml5 className="text-orange-600" />,
  Css: () => <SiCss3 className="text-blue-500" />,
  Js: () => <SiJavascript className="text-yellow-400" />,
  Ts: () => <SiTypescript className="text-blue-600" />,
  Next: () => <SiNextdotjs className="text-black dark:text-white" />,
  Tailwind: () => <SiTailwindcss className="text-sky-400" />,
  Php: () => <SiPhp className="text-indigo-500" />,
  Bootstrap: () => <SiBootstrap className="text-purple-600" />,
};
