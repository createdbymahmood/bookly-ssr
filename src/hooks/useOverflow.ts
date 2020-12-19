import { useState, RefObject, useLayoutEffect } from 'react';

import { useWindowSize } from 'react-use';

export function useOverflow(ref: RefObject<HTMLElement>) {
    const [refXOverflowing, setRefXOverflowing] = useState(false);
    const [refYOverflowing, setRefYOverflowing] = useState(false);
    const [refXScrollEnd, setRefXScrollEnd] = useState(false);
    const [refYScrollEnd, setRefYScrollEnd] = useState(false);

    const size = useWindowSize();

    useLayoutEffect((): any => {
        if (!ref?.current) {
            return;
        }
        const isXOverflowing =
            ref.current.scrollWidth > ref.current.clientWidth;
        const isYOverflowing =
            ref.current.scrollHeight > ref.current.clientHeight;

        if (refXOverflowing !== isXOverflowing) {
            setRefXOverflowing(isXOverflowing);
        }

        if (refYOverflowing !== isYOverflowing) {
            setRefYOverflowing(isYOverflowing);
        }

        const handleScroll = (): void => {
            // Handle X Overflow
            const offsetRight =
                ref?.current?.scrollWidth! - ref?.current?.clientWidth!;
            if (
                ref?.current?.scrollLeft! >= offsetRight &&
                refXScrollEnd === false
            ) {
                setRefXScrollEnd(true);
            } else {
                setRefXScrollEnd(false);
            }

            // Handle Y Overflow
            const offsetBottom =
                ref?.current?.scrollHeight! - ref?.current?.clientHeight!;
            if (
                ref?.current?.scrollTop! >= offsetBottom &&
                refYScrollEnd === false
            ) {
                setRefYScrollEnd(true);
            } else {
                setRefYScrollEnd(false);
            }
        };

        ref.current.addEventListener('scroll', handleScroll);

        return (): void =>
            ref.current?.removeEventListener('scroll', handleScroll);
    }, [ref, size.width]); // Empty array ensures that effect is only run on mount and unmount

    return [refXOverflowing] as const;
}
