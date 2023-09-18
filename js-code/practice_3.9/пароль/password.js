let password = '1234-';

if (password.length >= 4 && password.includes('-') || password.includes('_')) {
    alert('Пароль надежный');
} else {
    alert('Пароль не надежный');
}

let password1 = '4321_';

if (password1.length >= 4 && password1.includes('-') || password.includes('_')) {
    alert('Пароль надежный');
} else {
    alert('Пароль не надежный');
}

let password2 = 'qaz-xsw';

if (password2.length >= 4 && password2.includes('-') || password.includes('_')) {
    alert('Пароль надежный');
} else {
    alert('Пароль не надежный');
}

let password3 = '_zsd';

if (password3.length >= 4 && password3.includes('-') || password.includes('_')) {
    alert('Пароль надежный');
} else {
    alert('Пароль не надежный');
}