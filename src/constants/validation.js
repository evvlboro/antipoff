export const emailPattern =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const namePattern = /^[a-яёa-z -]{2,30}$/i;

export const emptyNameErrorText = 'Имя не может быть пустым';
export const emptyEmailErrorText = 'Email не может быть пустым';
export const emptyPasswordErrorText = 'Пароль не может быть пустым';

export const invalidNameErrorText =
	'Имя должно содержать только латиницу, кириллицу, пробел и дефис';
export const invalidEmailErrorText = 'Некорректный email';
export const invalidConfirmPasswordErrorText = 'Пароли должны совпадать';
