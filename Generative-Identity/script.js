document.addEventListener('DOMContentLoaded', function() {
    const verticalLine = document.querySelector('.line-vertical');
    const horizontalLine = document.querySelector('.line-horizontal');
    const verticalLine2 = document.querySelector('.line-vertical-2');
    const horizontalLine2 = document.querySelector('.line-horizontal-2');
    const colorElements = document.querySelectorAll('.circle-1, .circle-2, .circle-4');
    
    // Color options
    const colors = [
        { name: 'green', value: '#8DC63F' },
        { name: 'pink', value: '#FF69B4' },
        { name: 'blue', value: '#4169E1' },
        { name: 'yellow', value: '#FFD700' }
    ];

    // Create color selector circles
    const colorSelector = document.createElement('div');
    colorSelector.className = 'color-selector';
    
    colors.forEach(color => {
        const colorCircle = document.createElement('div');
        colorCircle.className = 'color-option';
        colorCircle.style.backgroundColor = color.value;
        colorCircle.addEventListener('click', () => changeColor(color.value));
        colorSelector.appendChild(colorCircle);
    });

    document.body.appendChild(colorSelector);

    function changeColor(color) {
        colorElements.forEach(element => {
            element.style.transition = 'background-color 0.5s ease';
            element.style.backgroundColor = color;
        });
    }

    function getRandomAngle() {
        return Math.floor(Math.random() * 360);
    }

    function rotateLines() {
        const angle = getRandomAngle();
        const angle2 = getRandomAngle();

        verticalLine.style.transform = `translateX(-50%) rotate(${angle}deg)`;
        horizontalLine.style.transform = `translateY(-50%) rotate(${angle}deg)`;
        
        verticalLine2.style.transform = `translateX(-50%) rotate(${angle2}deg)`;
        horizontalLine2.style.transform = `translateY(-50%) rotate(${angle2}deg)`;
    }

    rotateLines();
});
