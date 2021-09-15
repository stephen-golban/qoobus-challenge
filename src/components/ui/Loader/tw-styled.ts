import tw from "tailwind-styled-components";

export const TWLoader = tw.div`
   absolute
   z-50
   flex
   items-center
   justify-center
   w-full
   h-full
   bg-black
   left-0
   top-0
   overflow-hidden
   `;
export const TWLoaderSvgWrapper = tw.svg`
    z-50
    flex
`;
export const TWLoaderSvgTextRect = tw.rect`
    w-full
    h-full
    fill-current
    text-gray-600
`;
export const TWLoaderSvgText = tw.text`
    text-4xl
    font-bold
`;
export const TWLoaderSvgRect = tw.rect`
    w-full
    h-full
    fill-current
`;
export const TWLoaderSvgPattern = tw.pattern`
    text-white
`;
