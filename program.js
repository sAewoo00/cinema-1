function sharePage() {
    const url = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: url
        })
        .then(() => console.log('Сторінкою поділилися'))
        .catch((error) => console.log('Помилка при поширенні', error));
    } else {
        alert("Ваш браузер не підтримує функцію поділитися.");
    }
}