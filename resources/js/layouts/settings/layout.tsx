import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editPassword } from '@/routes/password';
import { edit } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface NavItemSidebar extends NavItem {
    buttonClass: string;
}

const sidebarNavItems: NavItemSidebar[] = [
    {
        title: 'Профиль',
        href: edit(),
        icon: null,
        buttonClass: '',
    },
    {
        title: 'Пароль',
        href: editPassword(),
        icon: null,
        buttonClass: '',
    },
    {
        title: 'Двухфакторная аутентификация',
        href: show(),
        icon: null,
        buttonClass: 'whitespace-normal h-auto pt-1 pb-2 leading-5',
    },
    {
        title: 'Внешний вид',
        href: editAppearance(),
        icon: null,
        buttonClass: '',
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <div className="px-4 py-6">
            <Heading
                title="Настройки"
                description="Управляйте своим профилем и настройками учетной записи"
            />

            <div className="flex flex-col lg:flex-row lg:space-x-12">
                <aside className="w-full max-w-xl lg:w-48">
                    <nav className="flex flex-col space-y-1 space-x-0">
                        {sidebarNavItems.map((item, index) => (
                            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-md">
                                <Button
                                    key={`${typeof item.href === 'string' ? item.href : item.href.url}-${index}`}
                                    size="sm"
                                    variant="ghost"
                                    asChild
                                    className={cn(
                                        `w-full justify-start hover:bg-neutral-200 dark:hover:bg-accent ${item.buttonClass}`,
                                        {
                                            'bg-neutral-200 dark:bg-muted':
                                                currentPath ===
                                                (typeof item.href === 'string'
                                                    ? item.href
                                                    : item.href.url),
                                        },
                                    )}
                                >
                                    <Link href={item.href}>
                                        {item.icon && (
                                            <item.icon className="h-4 w-4" />
                                        )}
                                        {item.title}
                                    </Link>
                                </Button>
                            </div>
                        ))}
                    </nav>
                </aside>

                <Separator className="my-6 lg:hidden" />

                <div className="flex-1 md:max-w-2xl">
                    <section className="max-w-xl space-y-12">
                        {children}
                    </section>
                </div>
            </div>
        </div>
    );
}
