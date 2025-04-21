document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');

    // Simulação de dados de usuários (NÃO seguro para produção!)
    const users = [
        { username: 'aluno', password: '123' },
        { username: 'professor', password: 'abc456' }
    ];

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        // Verifica se o usuário existe e a senha corresponde
        const user = users.find(u => u.username === usernameInput);

        if (user && user.password === passwordInput) {
            messageElement.textContent = 'Login realizado com sucesso!';
            messageElement.className = 'success';
            // Aqui você pode redirecionar o usuário para outra página
            window.location.href = 'teste.html';
        } else {
            messageElement.textContent = 'Usuário ou senha incorretos.';
            messageElement.className = 'error';
        }

        loginForm.reset(); // Limpa o formulário após a tentativa de login
    });
});