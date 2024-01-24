let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
        },
        events: {
            'onReady': onPlayerReady,
        },
    });
}

function onPlayerReady(event) {
    // Evento quando o player estiver pronto
}

function playVideo(element) {
    const videoContainer = element.parentElement;
    const videoId = videoContainer.getAttribute('data-video-id');

    // Substituir a div pela instância do player do YouTube
    videoContainer.innerHTML = '<div id="player"></div>';

    // Criar um novo player incorporado
    const embedPlayer = document.createElement('iframe');
    embedPlayer.width = '560';
    embedPlayer.height = '315';
    embedPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    embedPlayer.frameBorder = '0';
    embedPlayer.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    embedPlayer.allowFullscreen = true;

    // Adicionar o player incorporado à div
    videoContainer.appendChild(embedPlayer);
}