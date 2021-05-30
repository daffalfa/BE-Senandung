module.exports = fn = data => {
    return {
        "id": data.id ? data.id.value : '',
        "title": data.title ? data.title.value : '',
        "asal": data.asal ? data.asal.value : '',
        "pencipta": data.pencipta ? data.pencipta.value : '',
        "link": data.link ? data.link.value : '',
    }
}