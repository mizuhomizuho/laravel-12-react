import Form from '@/components/object/item/form';
import AppLayout from '@/layouts/app-layout';
import { create } from '@/routes/object/item';
import { type BreadcrumbItem, ObjectItem } from '@/types';
import { Head } from '@inertiajs/react';

const pageTitle = 'Добавление объекта';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: pageTitle,
        href: create().url,
    },
];

export default function Edit({ item }: { item: ObjectItem }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={pageTitle} />
            <div className="p-4">
                <div className="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="p-4">
                        <Form item={item} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
