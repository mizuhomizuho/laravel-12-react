import {
    InputErrorListMessage,
    InputErrorMessage,
} from '@/components/input-error';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { DropEvent, FileRejection, useDropzone } from 'react-dropzone';

export interface UploadFile extends File {
    preview: string;
    hash: string;
}

export const useMultiImageUpload = (
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessage>>,
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
        onDropRejected: (rejections, e) =>
            onDropRejected(e, rejections, setMultiImageUploadErrors),
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

        console.log([...prevFiles, ...newFilesFiltered], 22222222);

        return [...prevFiles, ...newFilesFiltered];
    });
};

export const removeFile = (
    name: string,
    setFiles: Dispatch<SetStateAction<UploadFile[]>>,
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessage>>,
) => {
    setMultiImageUploadErrors('');
    setFiles((prev: UploadFile[]) => prev.filter((file) => file.name !== name));
};

export const onDropRejected = async (
    e: DropEvent,
    rejections: FileRejection[],
    setMultiImageUploadErrors: Dispatch<SetStateAction<InputErrorMessage>>,
) => {
    const messages: InputErrorListMessage[] = [
        { type: 'error', text: 'Отклонённые файлы:' },
    ];
    for (const rejectionsKey in rejections) {
        const rejectionItem = rejections[rejectionsKey];
        addFileErrors(messages, rejectionItem);
        await removeRejectionFiles(rejectionItem, e);
    }
    setMultiImageUploadErrors(messages);
};

const addFileErrors = (
    messages: InputErrorListMessage[],
    rejection: FileRejection,
) => {
    messages.push({
        type: 'message',
        text: `Файл: "${rejection.file.name}".`,
    });
    rejection.errors.forEach((reason) => {
        messages.push({
            type: 'error',
            text: `Причина: "${reason.message}".`,
        });
    });
};

const removeRejectionFiles = async (
    rejection: FileRejection,
    e: DropEvent,
) => {
    const rejectionHash = await getFileHash(rejection.file);
    const fileInput = (e as Event).target as HTMLInputElement;
    if (!fileInput.files) {
        return;
    }
    const dataTransfer = new DataTransfer();
    for (let i = 0; i < fileInput.files.length; i++) {
        if (!(
            fileInput.files[i].name === rejection.file.name &&
            rejectionHash === (await getFileHash(fileInput.files[i]))
        )) {
            dataTransfer.items.add(fileInput.files[i]);
        }
    }
    fileInput.files = dataTransfer.files;
};

const getFileHash = async (file: File, algorithm: string = 'SHA-256') => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest(algorithm, arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};
