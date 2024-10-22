document.addEventListener('DOMContentLoaded', function() {
    const verticalLine = document.querySelector('.line-vertical');
    const horizontalLine = document.querySelector('.line-horizontal');

    function getRandomAngle() {
        return Math.floor(Math.random() * 360);
    }

    function rotateLines() {
        const angle = getRandomAngle();

        verticalLine.style.transform = `translateX(-50%) rotate(${angle}deg)`;
        horizontalLine.style.transform = `translateY(-50%) rotate(${angle}deg)`;
    }

    rotateLines();
});
