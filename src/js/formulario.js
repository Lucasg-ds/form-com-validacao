validacaoDinamica();

document.getElementById('formulario').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const campos = ['nome', 'email', 'telefone', 'mensagem'];
    let formularioValido = true;

    campos.forEach((campoId, index) => {
        const campo = document.getElementById(campoId);
        const erro = document.getElementById('erro' + (index + 1));

        campo.classList.remove('incorreto');
        erro.classList.remove('input-obrigatorio');

        if (campo.value === '') {
            campo.classList.add('incorreto');
            erro.classList.add('input-obrigatorio');
            formularioValido = false;
        }
    });

    if (formularioValido) {
        this.submit();
    }
});

function validacaoDinamica() {
    const inputPreenchido = document.querySelectorAll('.campo');

    inputPreenchido.forEach((input, index) => {
        const campoVazio = document.getElementById('erro' + (index + 1));

        input.addEventListener('change', () => {
            if (input.value !== '') {
                campoVazio.classList.remove('input-obrigatorio');
                input.classList.remove('incorreto');

                input.classList.add('correto');
            } else {
                input.classList.remove('correto');

                campoVazio.classList.add('input-obrigatorio');
                input.classList.add('incorreto');
            }
        });
    });
}

