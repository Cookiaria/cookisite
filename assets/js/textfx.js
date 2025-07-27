//  ====================
//  shaky text fx !!11!!

// fuck

// goal is to make it so that you can call "shakyText()"
// with parameters ("shakyText(100,0.1)")

function shakyText(shakeInterval = 33.333, shakeStrength = 0.1) {
    const shakySpans = document.querySelectorAll('#shaky');

    shakySpans.forEach(element => {
        // store the text inside 'shaky' id in memory
        const ogText = element.textContent;

        // and remove that shi
        element.innerHTML = '';

        // use the text stored in memory and divide them all into separate spans inside the found #shaky id element
        // divide every character first, and generate a span for each one
        for (let i = 0; i < ogText.length; i++) {
            const char = ogText[i];

            const charSpan = document.createElement('span');
            charSpan.style.display = 'inline-block';
            charSpan.style.position = 'relative';

            // and just in case the space doesn't render;
            charSpan.innerHTML = char === ' ' ? '&nbsp;' : char; // html non-breakable space

            element.appendChild(charSpan);

            setInterval(() => {
                const x = (Math.random() * 2 - 1) * shakeStrength;
                const y = (Math.random() * 2 - 1) * shakeStrength;

                charSpan.style.transform = `translate(${x}em, ${y}em)`;
            }, shakeInterval);
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    shakyText();
})
