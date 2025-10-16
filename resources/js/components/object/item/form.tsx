import StoreController from '@/actions/App/Http/Controllers/Object/Item/StoreController';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ObjectItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Form as ReactForm } from '@inertiajs/react';

export default function Form({ item }: { item?: ObjectItem }) {
    return (
        <ReactForm
            {...StoreController.form()}
            options={{
                preserveScroll: true,
            }}
            className="space-y-6"
        >
            {({ processing, recentlySuccessful, errors }) => (
                <>

                    <input type="hidden" name="object_type_id" value="1" />

                    <div className="grid gap-2">

                        <Label htmlFor="object_type_id">Тип объекта</Label>

                        <Select name="object_type_id">
                            <SelectTrigger>
                                <SelectValue placeholder="Тип объекта" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={'1'}>1</SelectItem>
                                <SelectItem value={'2'}>2</SelectItem>
                            </SelectContent>
                        </Select>

                        <InputError
                            className="mt-2"
                            message={errors.object_type_id}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">Имя объекта</Label>

                        <Input
                            id="title"
                            className="mt-1 block w-full"
                            defaultValue={item && item.title}
                            name="title"
                            required
                            placeholder="Имя объекта"
                        />

                        <InputError className="mt-2" message={errors.title} />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            disabled={processing}
                            data-test="update-profile-button"
                        >
                            Сохранить
                        </Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-neutral-600">
                                Сохранено
                            </p>
                        </Transition>
                    </div>
                </>
            )}
        </ReactForm>
    );
}
