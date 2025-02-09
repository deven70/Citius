'use client';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
    return (
        <div className={`container mx-auto max-w-[90%] ${className}`}>
            {children}
        </div>
    );
};
