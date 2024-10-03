const createSlug = (url: string) => {
    const convertUrl = url.split(" ").join("-");
    return convertUrl;
};

export default createSlug;