import Form from '@/components/object/item/form';
import AppLayout from '@/layouts/app-layout';
import { edit } from '@/routes/object/item';
import { type BreadcrumbItem, ObjectItem, ObjectType } from '@/types';
import { Head } from '@inertiajs/react';

const pageTitle = 'Редактирование объекта';

export default function Edit({
    item,
    types,
}: {
    item: ObjectItem;
    types: ObjectType[];
}) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: pageTitle,
            href: edit(item.id).url,
        },
    ];
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={pageTitle} />
            <div className="p-4">
                <div className="rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <div className="p-4">
                        <Form item={item} types={types} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
