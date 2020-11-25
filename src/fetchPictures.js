const  fetchPictures = async () => {
    const url = 'https://picsum.photos/v2/list?page=2&limit=50';
    const data = await fetch(url);
    const pictures = await data.json();
    const newPictures = pictures.map(picture => {
        return {
            id:picture.id,
            url:picture.download_url
        }
    });
    return newPictures;
}


export default fetchPictures;