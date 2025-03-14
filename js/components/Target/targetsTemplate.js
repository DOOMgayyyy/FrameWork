Template.prototype.targetsTemplate =()=>`
        <h1>Мишени</h1>
        <div>
            <form>
                <input type="text" class="target-input" id="bangCount" placeholder="Введите кол-во выстрелов"></input>
                <!-- Button for shooting -->
                <button type="button" class="target-shot" id="bangButton">РАССТРЕЛЯТЬ!</button> 
            </form>  
            <form>
                <input type="checkbox" id="randomCheck"><span>Выстрелы случайно</span>
            </form>
        </div>

        <!-- Блок для ввода параметров разброса -->
        <div id="spreadCheck1Div" class="hidden">
            <input type="checkbox" id="spreadCheck"><span>Задать разброс</span>

            <div id="spreadCheckDiv" class="hidden">
                <input type="text" id="spreadCount" placeholder="Введите радиус разброса"> <span>Заданный разброс</span>
            </div>
        </div>
        
        <!-- Добавлен блок для вывода результата -->
        <div class="target-result"></div>
`