const activities = [
    'Leia 10 páginas de um livro',
    'Faça um chá que você goste',
    'Fale com um amigo sobre seu dia',
    'Abrace por pelo menos 10 segundos alguém querido',
];

const getRandomActivity = () => {
    let index = Math.floor(Math.random() * activities.length);
	return activities[index];
}

const generateActivity = () => {
    const text = document.querySelector('#activity');
    text.innerHTML = getRandomActivity();
}