const  fetch_pictures = async () => {
    const url = 'https://picsum.photos/v2/list?page=2&limit=50';
    const data = await fetch(url);
    const pictures = await data.json();
    const new_pictures = pictures.map(picture => {
        return {
            id:picture.id,
            url:picture.download_url
        }
    });
    return new_pictures;
}


export default fetch_pictures;