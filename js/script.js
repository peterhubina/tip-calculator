const TipCalculator = {
    elements: {
        tip_amount: null,
        total_amount: null,
        bill_input: null,
        people_input: null,
        custom: null
    },

    values: {
        bill: null,
        tip_percent: null,
        people: null,

        tip_value: null,
        total_value: null,
        maxLength: 10,
    },

    init() {
        this.elements.bill_input = document.getElementById("bill");
        this.elements.people_input = document.getElementById("number-of-people");

        this.elements.tip_amount = document.getElementById("tip-amount");
        this.elements.total_amount = document.getElementById("total-amount");

        this.elements.custom = document.getElementById("custom");
    },

    onSelectTip(value) {
        this.values.tip_percent = parseInt(value);
    },

    valueChanged(element) {
        if(element.value.length > this.values.maxLength) {
            return element.value = element.value.slice(0, this.values.maxLength);
        }

        if(element.id == "bill") {
            this.values.bill = parseFloat(element.value);
        } else if(element.id == "number-of-people") {
            this.values.people = parseFloat(element.value);
        }

        if(parseFloat(element.value) == 0) {
            element.style.border = "2px solid red";
        } else if(parseFloat(element.value) > 0) {
            element.style.border = "2px solid green";
        } else {
            element.style.border = "";
        }
    },

    calculate() {
        if((isNaN(this.values.bill) && isNaN(this.values.people)) || (this.values.bill !== null && this.values.people !== null)) {
            const tip = (this.values.bill / 100) * this.values.tip_percent;
            const tipPerPerson = tip / this.values.people;

            this.values.total_value = this.values.bill + tip;
            const totalPerPerson = this.values.total_value / this.values.people;

            this.elements.total_amount.innerHTML = "$" + totalPerPerson.toFixed(2);

            this.elements.tip_amount.innerHTML = "$" + tipPerPerson.toFixed(2);
        } else {    

        }
    },

    customTip(value) {
        this.values.tip_percent = parseFloat(value);
    },

    reset() {
        this.values.bill = null;
        this.values.tip_percent = null;
        this.values.people = null;
        this.values.tip_value = null;
        this.values.total_value = null;

        this.elements.bill_input.value = "";
        this.elements.people_input.value = "";
        this.elements.tip_amount.textContent = "$0.00";
        this.elements.total_amount.textContent = "$0.00";
        this.elements.custom.value = "";

        this.elements.bill_input.style.border = "";
        this.elements.custom.style.border = "";
        this.elements.people_input.style.border = "";
    }
};

window.addEventListener("DOMContentLoaded", function() {
    TipCalculator.init();
})