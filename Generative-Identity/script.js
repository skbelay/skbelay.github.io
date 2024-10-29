document.addEventListener('DOMContentLoaded', function() {
    const verticalLine = document.querySelector('.line-vertical');
    const horizontalLine = document.querySelector('.line-horizontal');
    const verticalLine2 = document.querySelector('.line-vertical-2');
    const horizontalLine2 = document.querySelector('.line-horizontal-2');

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
