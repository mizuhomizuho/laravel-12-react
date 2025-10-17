import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadFile extends File {
    preview: string;
}

export default function MultiImageUpload() {
    const [files, setFiles] = useState<UploadFile[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {

        console.log(acceptedFiles, 44442)

        const newFiles: UploadFile[] = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            }),
        );

        setFiles((prev) => [...prev, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        multiple: true,
        onDrop,
    });

    const removeFile = (name: string) => {
        setFiles((prev) => prev.filter((file) => file.name !== name));
    };

    return (
        <div>
            {/* Dropzone area */}
            <div
                {...getRootProps()}
                className={`${isDragActive ? 'bg-gray-100' : 'bg-white'} cursor-pointer rounded-lg border-2 border-dashed border-gray-400 p-7.5 text-center`}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Отпустите файлы сюда...</p>
                ) : (
                    <p>Перетащите сюда изображения или кликните для выбора</p>
                )}
            </div>

            {/* Preview */}
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
                            onClick={() => removeFile(file.name)}
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
