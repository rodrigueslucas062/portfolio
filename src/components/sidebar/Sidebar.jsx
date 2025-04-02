import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Brain, ChalkboardSimple, ListChecks, Notepad } from '@phosphor-icons/react';

export const Sidebar = () => {

  return (
    <Tooltip.Provider>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 pl-2 py-2 w-fit h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-800 flex flex-col rounded-xl">
          <ul className="space-y-2 font-medium flex-1">
            {[
              {
                href: '/home',
                icon: <Brain size={20} weight="duotone" />,
                color: 'text-emerald-500',
                label: 'Notion',
              },
              {
                href: '/tasks',
                icon: <ListChecks size={20} weight="duotone" />,
                color: 'text-purple-500',
                label: 'Tasks',
              },
              {
                href: '/notepad',
                icon: <Notepad size={20} weight="duotone" />,
                color: 'text-sky-500',
                label: 'Notepad',
              },
              {
                href: '/jamboard',
                icon: <ChalkboardSimple size={20} weight="duotone" />,
                color: 'text-orange-500',
                label: 'Jamboard',
              },
            ].map((item) => (
              <li key={item.href}>
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Link
                      href={item.href}
                      className={`flex w-fit items-center justify-center p-2 ${item.color} rounded-lg bg-zinc-900 group`}
                    >
                      {item.icon}
                    </Link>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="select-none rounded bg-zinc-950 px-[15px] py-2.5 text-xs leading-none text-white shadow-lg will-change-[transform,opacity] data-[state=delayed-open]:animate-slideRightAndFade"
                      side="right"
                      sideOffset={5}
                    >
                      {item.label}
                      <Tooltip.Arrow className="fill-zinc-950" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </Tooltip.Provider>
  );
};
