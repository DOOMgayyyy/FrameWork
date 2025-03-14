class Shot {
    //function for create random counts min, max
    rand(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    //функция выстрела в точку
    shootToPoint(x, y) {
        return (x === 0 && y === 0) ? 10 : 0;
    }
    
    //функция выстрела в ромб
    shootToRhomb(x, y) {
        return ((Math.abs(x) + Math.abs(y)) <= 1) ? 3 : 0;
    }
    
    //функция выстрела в круг
    shootToCircle(x, y) {
        return (Math.sqrt(x**2 + y**2) <= 1) ? 2 : 0;
    }
    
    //функция выстрела в квадрат
    shootToSquare(x, y) {
        return (Math.abs(x) <= 1 && Math.abs(y) <= 1) ? 1 : 0;
    }
    
    //функция передачи выстрелов по мишеням
    shoot(x, y) {
        return this.shootToPoint(x, y) ||
               this.shootToRhomb(x, y) ||
               this.shootToCircle(x, y) ||
               this.shootToSquare(x, y);
    }
    
    // выстрелы по мишени с параметрами
    shotToTarget(countShoots) {
        const randomCheck = document.getElementById("randomCheck");
        const spreadCheck = document.getElementById("spreadCheck");
        
        // Проверяем, есть ли эти элементы на странице
        const isRandom = randomCheck ? randomCheck.checked : false;
        const isSpread = spreadCheck ? spreadCheck.checked : false;
        
        let points = 0;
        
        if (isSpread) {
            const spreadRadius = parseFloat(document.getElementById("spreadCount").value);
            for (let i = 0; i < countShoots; i++) {
                const angle = this.rand(0, 360) * Math.PI / 180;
                const preRadius = this.rand(0, spreadRadius);
                let x = Math.cos(angle) * preRadius;
                let y = Math.sin(angle) * preRadius;
                points += this.shoot(x, y);
            }
        } else {
            for (let i = 0; i < countShoots; i++) {
                let x = isRandom ? this.rand(-2, 2) : parseFloat(prompt('Введите координату x: '));
                let y = isRandom ? this.rand(-2, 2) : parseFloat(prompt('Введите координату y: '));
                points += this.shoot(x, y);
            }
        }
        
        return points;
    }
}