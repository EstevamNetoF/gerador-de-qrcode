function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chld=H&chl=';
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode;

    document.querySelector('#btn').addEventListener('click', handleClick);

    function handleClick() {
        document.querySelector('textarea').classList.add('ativo');
        document.querySelector('#btn').classList.add('ativo');

        document.querySelector('h1').classList.add('ativo');

        h1Recado();
        reloadBtn();
    }
    handleClick();

    function h1Recado() {
        const h1Novo = document.querySelector('h1');
        h1Novo.innerHTML = `Aqui está seu QR Code! Obrigado.`;
    }

    function reloadBtn() {
        const btnVoltar = document.querySelector('#voltarBtn');
        btnVoltar.classList.add('voltar');

        btnVoltar.addEventListener('click', () => {
            location.reload();
        });
    }
}