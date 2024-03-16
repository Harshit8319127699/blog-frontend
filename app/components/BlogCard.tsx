import React from 'react';

import Link from 'next/link';

interface BlogCardProps {
    title: string;
    description: string;
    imageUrl: string;
    buttonLabel: string;
    onButtonClick?: () => string;
}

export function BlogCard({ title, description, imageUrl, buttonLabel, onButtonClick }: BlogCardProps) {

    const handleClick = () => {
        if (onButtonClick) {
            return onButtonClick();
        }
        return '/';
    };
    return (
<div className="max-w-sm py-3">
 <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg flex flex-col min-h-[200px]">
    <img className="rounded-t-lg" src={imageUrl} alt={title} />
    <div className="py-6 px-8 rounded-lg bg-white flex-grow">
    <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer truncate">{title}</h1>
                    <p className="text-gray-700 tracking-wide truncate">{description}</p>
      <Link href={handleClick()}>
        <button className="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">{buttonLabel}</button>
      </Link>
    </div>
 </div>
</div>
    );
}
