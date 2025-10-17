import StoreController from '@/actions/App/Http/Controllers/Object/Item/StoreController';
import InputError, { InputErrorMessageType } from '@/components/input-error';
import MultiImageUpload from '@/components/object/item/multi-image-upload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ObjectItem, ObjectType } from '@/types';
import { Transition } from '@headlessui/react';
import { Form as ReactForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Form({
    item,
    types,
}: {
    item?: ObjectItem;
    types?: ObjectType[];
}) {
    const [selectedObjectTypeId, setSelectedObjectTypeId] = useState<
        null | string
    >(null);
    const [multiImageUploadErrors, setMultiImageUploadErrors] =
        useState<InputErrorMessageType>('');

    useEffect(() => {
        if (item) {
            setSelectedObjectTypeId(item.object_type_id.toString());
        }
    }, []);

    const currentType =
        types && selectedObjectTypeId
            ? types.find((item) => item.id === +selectedObjectTypeId)
            : null;

    const maxFiles = 8;

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
                    <div className="grid gap-2">
                        <Label htmlFor="object_type_id">Тип объекта</Label>

                        <Select
                            disabled={!!item}
                            name="object_type_id"
                            value={
                                item
                                    ? item.object_type_id.toString()
                                    : undefined
                            }
                            onValueChange={(value) =>
                                setSelectedObjectTypeId(value)
                            }
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Тип объекта" />
                            </SelectTrigger>
                            <SelectContent>
                                {types &&
                                    types.map((item) => (
                                        <SelectItem
                                            key={item.id}
                                            value={item.id.toString()}
                                        >
                                            {item.title}
                                        </SelectItem>
                                    ))}
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

                    {currentType?.code === 'photographer' ? 'photographer !!!' : null}

                    <div className="grid gap-2">
                        <Label htmlFor="multi_image_upload">
                            Фотографии объекта
                        </Label>
                        <MultiImageUpload
                            name="multi_image_upload[]"
                            id="multi_image_upload"
                            maxFiles={maxFiles}
                            setMultiImageUploadErrors={
                                setMultiImageUploadErrors
                            }
                        />
                        <div className="mt-2">
                            <InputError message={multiImageUploadErrors} />
                        </div>
                        <InputError
                            className="mt-2"
                            message={errors['multi_image_upload']}
                        />
                        {[...Array(maxFiles)].map((_, index) => (
                            <InputError
                                key={index}
                                className="mt-2"
                                message={errors[`multi_image_upload.${index}`]}
                            />
                        ))}
                    </div>

                    {/*<input type={'file'} multiple={true} name={'multi_image_upload'} />*/}

                    <div className="flex items-center gap-4">
                        <Button
                            disabled={processing}
                            data-test="update-profile-button"
                            onClick={() => setMultiImageUploadErrors('')}
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
