class Targets extends Component {
    constructor(options) {
        super(options);
    }
    
    targetShotHandler() {
        const count = document.querySelector('.target-input').value - 0;
        if (count > 0) {
            const result = (new Shot()).shotToTarget(count);    
            document.querySelector('.target-result').innerHTML = `Результат: ${result}`;
        } else {
            alert("Введите корректное количество выстрелов!");
        }
    }
    
    addEventListeners() {
        // Обработчик для кнопки выстрела
        document.querySelector('.target-shot')
            .addEventListener('click', () => this.targetShotHandler());
        
        // Обработчик для чекбокса случайных выстрелов
        const randomCheck = document.getElementById("randomCheck");
        if (randomCheck) {
            randomCheck.addEventListener("change", function() {
                const spreadCheck1Div = document.getElementById("spreadCheck1Div");
                if (this.checked) {
                    spreadCheck1Div.classList.remove("hidden");
                } else {
                    spreadCheck1Div.classList.add("hidden");
                }
            });
        }
        
        // Обработчик для чекбокса разброса
        const spreadCheck = document.getElementById("spreadCheck");
        if (spreadCheck) {
            spreadCheck.addEventListener("change", function() {
                const spreadCheckDiv = document.getElementById("spreadCheckDiv");
                if (this.checked) {
                    spreadCheckDiv.classList.remove("hidden");
                } else {
                    spreadCheckDiv.classList.add("hidden");
                }
            });
        }
    }
}

// Инициализируем приложение после загрузки DOM
document.addEventListener("DOMContentLoaded", function() {
    new Targets({
        id: 'targets',
        parent: 'app',
        template: (new Template()).targetsTemplate,
        templateParams: {}
    });
});