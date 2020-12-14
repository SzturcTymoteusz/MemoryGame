const  fetch_pictures = async () => {
    const pictures = [];

    for(let i = 1; i <= 200; i++) {
        const url = 'https://picsum.photos/100?random=' + i;

        pictures.push({
            id: i,
            url
        })
    }

    return pictures;
};


export default fetch_pictures;