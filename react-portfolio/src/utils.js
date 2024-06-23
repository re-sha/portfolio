export const getImageFromUrl = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href;
}