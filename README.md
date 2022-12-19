неделя 18
Вопросы 💎
1. Чем отличаются куки, localStorage и sessionStorage? 
Они отличаются объемом данных:
- куки не более 4кб
- local storage до 5мб
- session storage меньше, чем в local storage, но большк, чем в куки
Также отличаются тем, насколько долго сохраняют данные, введенные пользователем на сайте или данные о его активности на сайте:
- в local storage данные хранятся бессрочно
- в session storage до тек пор, пока пользователь не завершит сессию (закроет вкладку или браузер)
- хранит данные, которые можно передавать на сервер через заголовки.
Что стоит использовать, если нам нужно надолго сохранить много пользовательских данных?
Стоит использовать local storage

2. Как добавить и получить значение из веб-хранилища?
С помощью метода setItem ('key' , 'value') добавляем значение
С помощью метода getItem ('key' ,'value') получаем значение

3. Придумайте еще минимум 3 ситуации помимо предложенных в уроке, для чего может быть нужно сохранять данные пользователя и какие? Пример из урока: запомнить, что пользователь уже залогинился, что у него лежит в корзине или в каком разделе сайта он сейчас находится
- в какое время и с какого устройства пользователь заходил на сайт
- предпочтения пользователя (язык, валюта и тд)
- текст, которые вводили ранее в поиске браузера

4. Как сделать валидацию номера кредитной карты?
валидация делается с помощью регулярных выражений, с их помощью отсеиваются неподходящие последовательности чисел

5. Как сделать input, который будет принимать только числа (минимум 2 способа)?
- необходимо указать  в html коде type=number
- необходимо указать  в html коде type=range

6. Найдите регулярное выражение для ФИО на русском языке
/^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/

7. Как должно выглядеть невалидное поле, чтобы пользователю было понятно, что в него вводить? Оно должно содержать название поля в placeholder. Например:
<input type="text" name="email" placeholder="E-Mail" />
Здесь сразу понятно, что нужно в поле ввести почту

Как показать пользователю, что не так, если ввод некорректен (теги и атрибуты html, псевдоклассы css) ? вопрос теоретический, код писать не надо
В js мы используем объект validity, у него есть различные булевы значения, через них мы показываем те или иные ошибки в воде данных пользователем

8. Какие есть недостатки у стандартного способа задания валидации через HTML5?
некоторые атрибуты не поддерживаются в некоторых бразуерах (maxlength в IE EDGE)

