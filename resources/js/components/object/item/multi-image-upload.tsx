import { InputErrorMessageType } from '@/components/input-error';
import {
    removeFile,
    useMultiImageUpload,
} from '@/hooks/object/item/multi-image-upload';
import { Dispatch, SetStateAction } from 'react';

export default function MultiImageUpload({
    name,
    id,
    setMultiImageUploadErrors,
    maxFiles,
}: {
    name: string;
    id: string;
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessageType>>;
    maxFiles: number;
}) {
    const { files, setFiles, getRootProps, getInputProps, isDragActive } =
        useMultiImageUpload(setMultiImageUploadErrors, maxFiles);
    return (
        <div>
            <div
                {...getRootProps()}
                className={`${isDragActive ? 'bg-gray-100 dark:bg-neutral-800' : 'bg-white dark:bg-neutral-900'} cursor-pointer rounded-lg border-2 border-dashed border-gray-400 p-7.5 text-center`}
            >
                <input {...getInputProps()} name={name} id={id} />
                {isDragActive ? (
                    <p>Отпустите файлы сюда...</p>
                ) : (
                    <p>Перетащите сюда изображения или кликните для выбора</p>
                )}
            </div>
            <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-2.5">
                {files.map((file) => (
                    <div
                        key={file.name}
                        className="relative overflow-hidden rounded-lg shadow"
                    >
                        <img
                            src={file.preview}
                            alt={file.name}
                            className="h-[100px] w-full object-cover"
                        />
                        <button
                            onClick={() =>
                                removeFile(
                                    file.name,
                                    setFiles,
                                    setMultiImageUploadErrors,
                                )
                            }
                            className="absolute top-[5px] right-[5px] h-[24px] w-[24px] cursor-pointer rounded-lg border-0 bg-[rgba(0,0,0,0.6)] text-white"
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
