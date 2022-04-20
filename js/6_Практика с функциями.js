function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);



// В этих заданиях мы с вами потренируемся создавать небольшие полезные функции. 
// Это основа всего в JS и дальше по курсу вы будете в этом убеждаться 
// Учтите,&nbsp;что проверка кода в таких заданиях осуществляется автоматически,&nbsp;через программу. 
// Поэтому нужно четко следовать инструкции.
// Вы можете <strong>сначала решить у себя в редакторе кода</strong>, а потом вставить сюда.
// Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. 
// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.</p><p>
// Задачи: Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. 
// Пример: вызов функции <code>sayHello('Антон')</code> <strong>возвращает</strong> строку <В>"Привет, Антон!". 
// В решении вызывать функцию <strong>не нужно</strong>, программа сделает это за вас.</p><p>P.S. 
// возвращать - это использовать ключевое слово return. </p><p>P.S.S. Это классическая функция-модификатор, 
// которых мы дальше по курсу будем создавать еще много в разных видах.</p><p>2) 
// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и <strong>возвращает</strong> 
// массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.</p><p>
// Пример: вызов функции <code>returnNeighboringNumbers(5)</code> <strong>возвращает</strong> массив в виде [4, 5, 6]. </p><p>3)
//  Создайте функцию, которая будет принимать в себя <strong>2</strong> аргумента, оба числа. 
// Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
// Функция должна возвращать <strong>строку (или число в особых случаях, о которых ниже)</strong>, 
// где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их <strong>не должно</strong> быть. 
// </p><p>Если второй аргумент <strong>не является</strong> числом, <strong>равен</strong> или <strong>меньше</strong> 
// нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)</p><p>Примеры:</p><p>Вызов функции 
{/* <code>getMathResult(5, 3)</code> даст ответ 5---10---15</p><p>Вызов функции <code>getMathResult(3, 10)</code>
//  даст ответ 3---6---9---12---15---18---21---24---27---30</p><p>Вызов функции <code>getMathResult(10, 5)</code> 
// даст ответ 10---20---30---40---50</p><p>Вызов функции <code>getMathResult(10, '5')</code> даст ответ 10</p><p>Вызов 
// функции <code>getMathResult(10, 0)</code> даст ответ 10</p><p>Вызов функции <code>getMathResult(20, -5)</code> 
// даст ответ 20</p><p>Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, 
// проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой
//  формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. 
// Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.</p><p>Да, задача сложнее, но она просто 
// объединяет все то,&nbsp;что мы уже учили.</p><p>Ответ с кодом этих задач можно найти тут: 
<a href="https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/1_functions/basic_functions.js">ссылка</a> </p><p>
Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. 
Помните,&nbsp;что вариантов решения всегда несколько. </p><p>Но постарайтесь решить самостоятельно 🙂 </p></div> */}