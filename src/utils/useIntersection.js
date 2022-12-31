import { useState, useEffect } from 'react'

export const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setState(entry.isIntersecting);
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        // return () => observer.unobserve(element.current);
    });

    console.log(isVisible)

    return isVisible;
};