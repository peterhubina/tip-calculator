const TipCalculator = {
    elements: {
        tip_amount: null,
        total_amount: null,
        bill_input: null,
        people_input: null
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
    },

    calculate() {
        if((isNaN(this.values.bill) && isNaN(this.values.people)) || (this.values.bill !== null && this.values.people !== null)) {
            const tip = (this.values.bill / 100) * this.values.tip_percent;
            const tipPerPerson = tip / this.values.people;

            this.values.total_value = this.values.bill + tip;
            const totalPerPerson = this.values.total_value / this.values.people;

            console.log(totalPerPerson);
            this.elements.total_amount.innerHTML = "$" + totalPerPerson.toFixed(2);

            this.elements.tip_amount.innerHTML = "$" + tipPerPerson.toFixed(2);
        }
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
    }
};

window.addEventListener("DOMContentLoaded", function() {
    TipCalculator.init();
})