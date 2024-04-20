import React from 'react';

function SectionHeading({ children }: { children: string }) {
    return <h1 className='text-center text-3xl font-medium mb-8'>{children}</h1>;
}

export default SectionHeading;
