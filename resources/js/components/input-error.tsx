import { cn } from '@/lib/utils';
import { type HTMLAttributes, JSX } from 'react';

export type InputErrorListMessageType = {
    text: string;
    type: 'message' | 'error';
};

export type InputErrorMessageType = string | string[] | InputErrorListMessageType[];

export default function InputError({
    message,
    className = '',
    ...props
}: HTMLAttributes<HTMLParagraphElement> & {
    message?: InputErrorMessageType;
}) {
    const errorClasses = `text-sm text-red-600 dark:text-red-400`;

    if (typeof message === 'string') {
        return (
            <p {...props} className={cn(errorClasses, className)}>
                {message}
            </p>
        );
    } else if (Array.isArray(message)) {
        const classes = {
            error: errorClasses,
            message: 'text-sm',
        };
        const result: JSX.Element[] = [];
        message.forEach((message, i) => {
            if (typeof message === 'string') {
                result.push(
                    <div
                        key={i}
                        {...props}
                        className={cn(`${errorClasses}`, className)}
                    >
                        {message}
                    </div>,
                );
            }
            else {
                result.push(
                    <div
                        key={i}
                        {...props}
                        className={cn(`${classes[message.type]}`, className)}
                    >
                        {message.text}
                    </div>,
                );
            }
        });
        return result;
    }
    return null;
}
