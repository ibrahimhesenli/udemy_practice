KURSU BITIRDIKDEN SONRA

EDILECEK ISLER:
1 web developer kursuna tezeden 3 cu moduldan baxmaq
2 xususi qeydler aparmaq 
3 testleri tezeden kecib onlari qeyd etmek
4 eynisini javascript de etmek

    Задачи с собеседований на понимание основ:

        Какое будет выведено значение: let x = 5; alert( x++ ); ?
        //5
        Чему равно такое выражение: [ ] + false - null + true ?
        //[] + false = false(string)
        //[] + false - null = NaN
        //[] + false - null + true = NaN
        Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
        //evvelce y = 2
        //sonrada x = y
        Чему равна сумма [ ] + 1 + 2?
        //massivin icine string halinda salir ona gorede "1" + "2" = "12"
        Что выведет этот код: alert("1"[0])?
        //stringin elementinin indexi yani "1"
        Чему равно 2 && 1 && null && 0 && undefined ?
        //yanlis olan ilk elementi yazir yani NULL
        Есть ли разница между выражениями? !!( a && b ) и (a && b)?
        //var raznica 
        Что выведет этот код: alert( null || 2 &&; 3 || 4 ); ?
        //birinci 2&&3 cavabda 3 olacaq sonra null || 3 cavabda 3 axirda cavab 3
        a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
        //false
        Что выведет этот код: alert( +"Infinity" ); ?
        //Infinity
        Верно ли сравнение: "Ёжик" > "яблоко"?
        //False
        Чему равно 0 || && || 2 || undefined || true || falsе ?
        //2

    Practice 1:

        Tezeden baxilacaq dersler:
        22. Циклы
        27. (д) Про важность return
        32. Объекты, деструктуризация объектов (ES6)
        39.Динамическая типизация в JS

        Praktikaya tezeden baxilmali:
        #19
        #24
        #29
        #37

    Получение элементов со страницы:
       
        1) const box = document.getElementById("box");
        2) const buttons = document.getElementsByTagName("button");
        3) const circles = document.getElementsByClassName("circle");
        4) const hearts = document.querySelectorAll(".heart");
           hearts.forEach(item => {
               console.log(hearts);
           })
        5) const oneHeart = document.querySelector(".heart");
