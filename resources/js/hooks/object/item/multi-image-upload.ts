import {
    InputErrorListMessageType,
    InputErrorMessageType,
} from '@/components/input-error';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

export interface UploadFile extends File {
    preview: string;
    hash: string;
}

export const useMultiImageUpload = (
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessageType>>,
    maxFiles: number,
) => {
    const [files, setFiles] = useState<UploadFile[]>([]);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        setMultiImageUploadErrors('');
        return await onDropUseCallback(acceptedFiles, setFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: true,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
        },
        maxSize: 2 * 1024 * 1024,
        maxFiles,
        onDrop,
        onDropRejected: (rejections) =>
            onDropRejected(rejections, setMultiImageUploadErrors),
    });

    return {
        files,
        setFiles,
        getRootProps,
        getInputProps,
        isDragActive,
    };
};

export const onDropUseCallback = async (
    acceptedFiles: File[],
    setFiles: Dispatch<SetStateAction<UploadFile[]>>,
) => {
    const acceptedFilesHash: string[] = [];
    for (const acceptedFilesKey in acceptedFiles) {
        acceptedFilesHash.push(
            await getFileHash(acceptedFiles[acceptedFilesKey]),
        );
    }

    const newFiles: UploadFile[] = acceptedFiles.map((file, i) =>
        Object.assign(file, {
            preview: URL.createObjectURL(file),
            hash: acceptedFilesHash[i],
        }),
    );

    setFiles((prevFiles: UploadFile[]) => {
        const prevFilesHash: string[] = [];
        for (const prevFilesKey in prevFiles) {
            prevFilesHash.push(prevFiles[prevFilesKey].hash);
        }

        const newFilesFiltered = [];
        for (const newFilesKey in newFiles) {
            if (!prevFilesHash.includes(newFiles[newFilesKey].hash)) {
                newFilesFiltered.push(newFiles[newFilesKey]);
            }
        }

        return [...prevFiles, ...newFilesFiltered];
    });
};

export const removeFile = (
    name: string,
    setFiles: Dispatch<SetStateAction<UploadFile[]>>,
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessageType>>,
) => {
    setMultiImageUploadErrors('');
    setFiles((prev: UploadFile[]) => prev.filter((file) => file.name !== name));
};

export const onDropRejected = (
    rejections: FileRejection[],
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessageType>>,
) => {
    const messages: InputErrorListMessageType[] = [
        { type: 'error', text: 'Отклонённые файлы:' },
    ];
    rejections.forEach((el) => {
        messages.push({
            type: 'message',
            text: `Файл: "${el.file.name}".`,
        });
        el.errors.forEach((reason, i) => {
            messages.push({
                type: 'error',
                text: `Причина: "${reason.message}".`,
            });
        });
    });
    setMultiImageUploadErrors(messages);
};

const getFileHash = async (file: File, algorithm: string = 'SHA-256') => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest(algorithm, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
