(function () {
    let itemsArray = [],
        itemsName = ''

    // создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');// позволяет создать новый элемент, передав в параметре имя тега на JavaScript
        appTitle.innerHTML = title;//позволяет считать содержимое элемента в виде HTML-строки или установить новый HTML
        return appTitle;//возвращает значение
    }

    // создаем и возвращаем форму для создания
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');//даёт возможность просматривать и манипулировать классами элемента.
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';//не изобретая велосипедов, placeholder.js делает этот атрибут кроссбраузерным.
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';//позволяет считывать или задавать текстовое содержимое элемента

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        input.addEventListener('input', function() {//Метод addEventListener позволяет назначить на элемент обработчики событий (таких как click, keyup и др.) на JavaScript
            if(input.value !== "") {//Событие input возникает, когда DOM-дерево обновляется или вот-вот обновится. Свойство value устанавливает или возвращает значение атрибута.
                button.disabled = false;//Отключите кнопку HTML, применив 'disabled = true', и включите ее обратно со значением 'disabled = false'. Для переключения используйте 'disabled ^= true'
            }else{
                button.disabled = true;
            }
        })

        return {//возвращает значения
            form,
            input,
            button,
        };
    }


    // создаем и возвращаем список элементов
    function createTodoList() {
        let listitem = document.createElement('ul');//тут все понятно создает, добавляет элемент и возвращает
        listitem.classList.add('list-group');
        return listitem; 
    }


function createTodoItem(obj) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с помощью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obj.name;//передает текстконтент в функции обьект и нейм

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    if(obj.done == true) item.classList.toggle('list-group-item-success')//В js есть встроенный метод toggle. Он используется для добавления или удаления класса у элемента в зависимости от его наличия.
    //Методы add и remove могут использоваться с этой же целью. Однако, метод toggle использовать удобнее, особенно когда нужно быстро переключать классы на элементе. const btn = document.querySelector('.btn'); btn.addEventListener('click', () => { myButton.classList.toggle('active')
        //Добавляем обработчики на кнопки
        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success');

            for(const listItem of itemsArray) {//сравнивает одобавленные обьекты
                if(listItem.id === obj.id) listItem.done = !listItem.done
            }

        })
        deleteButton.addEventListener('click', function() {//функция спрашивает удалять ли обьект
            if (confirm('Вы уверены?')) {
                item.remove();//Метод remove() удаляет указанный элемент из DOM.

                

                for(let i = 0; i < itemsArray.length; i++) {//ведет порядок обьектов по времении добавлений
                    
                    if(itemsArray[i].id == obj.id) itemsArray.splice(i, 1)//сравнение обьектов
                }
                
                saveList(itemsArray, itemsName)//вывод значений
            }
        })    

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
        item,
        doneButton,
        deleteButton,
    };
}

    function getNewID(arr) {//переборка массива по порядку
        let max = 0;
        for (const item of arr) {
            if(item.id > max) max = item.id//если число 5 и 9 то 9 больше пяти значит число 5 ставим на первое место
        }
        return max + 1;
    }

    function saveList(arr, KeyName) {
        //Метод JSON.stringify(student) берёт объект и преобразует его в строку. Полученная строка json называется JSON-форматированным или сериализованным объектом. Мы можем отправить его по сети или поместить в обычное хранилище данных
        localStorage.setItem(KeyName ,JSON.stringify(arr));//Этап 5 и 6 сделан
    }

    function createTodoApp(container, title = 'Список дел', KeyName, defArray = []) {//обьявление обьектов к которым обращается функция

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        itemsName = KeyName;//присваивание в KeyName
        itemsArray = defArray;//присваивание в defArray
     
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        let localData = localStorage.getItem(itemsName)//Этап 5 сделан
        //методом getItem для проверки элемента в Storage, который вернёт null, если указанный элемент отсутствует. JS. Скопировать код. if (localStorage.getItem('ключ') !== null) { 
        // Элемент присутствует в хранилище! } for или if { // Элемента в хранилище нет. }
        
        if(localData !== null && localData !== '') itemsArray = JSON.parse(localData)//метод или сравнение обьектов
        
        for (const itemList of itemsArray) {
            let todoItem = createTodoItem(itemList);
            todoList.append(todoItem.item);
        }

    // браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function(e) {
        //эта строчка необходима, чтобы предотвратить стандартное действие браузера
        //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
        e.preventDefault();

        //игнорируем создание элемента, если пользователь ничего не ввел для ввода
        if (!todoItemForm.input.value) {
            return;
        }
       //создаем и добавляем в список новое дело с названием из поля для ввода
        // todoList.append(createTodoItem(todoItemForm.input.value).item);
        
        let newItem = {//этап 1 сделан
            id: getNewID(itemsArray),
            name: todoItemForm.input.value,
            done: false
        }

        let todoItem = createTodoItem(newItem);

        itemsArray.push(newItem);

        saveList(itemsArray, itemsName);
        console.log(itemsArray);
        console.log(KeyName);

        //создаем и добавляем в список новое дело с названием из поля для ввода
        todoList.append(todoItem.item);

        //обнуляем значение в поле, чтобы не пришлось стирать его вручную
        todoItemForm.button.disabled = true;
        todoItemForm.input.value = '';
        });
    }
    window.createTodoApp = createTodoApp;

})();