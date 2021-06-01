class Calculator {
    constructor(selector) {
        this.selector = selector;

        this.DOM = document.querySelector(selector);
        this.buttonsData = [
            { title: 'C', color: 'grey' },
            { title: '+/-', color: 'grey' },
            { title: '%', color: 'grey' },
            { title: '/', color: 'dark' },
            { title: '1', color: 'white' },
            { title: '2', color: 'white' },
            { title: '3', color: 'white' },
            { title: '*', color: 'dark' },
            { title: '4', color: 'white' },
            { title: '5', color: 'white' },
            { title: '6', color: 'white' },
            { title: '-', color: 'dark' },
            { title: '7', color: 'white' },
            { title: '8', color: 'white' },
            { title: '9', color: 'white' },
            { title: '+', color: 'dark' },
            { title: '0', color: 'white' },
            { title: '.', color: 'white' },
            { title: '<', color: 'white' },
            { title: '=', color: 'red' },
        ];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    render() {
        const HTML = `<div class="calculator">
            < div class="screen" >
            <div class="answer">000</div>
            <div class="equation">1+1*66</div>
        </div >
            <div class="keyboard">
                <div class="button grey">C</div>
                <div class="button grey">+/-</div>
                <div class="button grey">%</div>
                <div class="button dark">/</div>
                <div class="button">1</div>
                <div class="button">2</div>
                <div class="button">3</div>
                <div class="button dark">*</div>
                <div class="button">4</div>
                <div class="button">5</div>
                <div class="button">6</div>
                <div class="button">-</div>
                <div class="button">7</div>
                <div class="button">8</div>
                <div class="button">9</div>
                <div class="button">+</div>
                <div class="button">0</div>
                <div class="button">.</div>
                <div class="button">&lt;</div>
                <div class="button red">=</div>
            </div>
    </div >`;

        this.DOM.insertAdjacentHTML('beforeend', HTML);
    }
}

export { Calculator }