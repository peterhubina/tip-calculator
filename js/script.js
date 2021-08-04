const TipCalculator = {
    elements: {
        tip_amount: null,
        total_amount: null,
        bill_input: null,
        people_input: null
    },

    values: {
        tip_value: 0.00,
        tip_percent: null,
        total_value: 0.00,
        maxLength: 10,
    },

    init() {
        this.elements.tip_amount = document.getElementById("tip-amount");
        this.elements.total_amount = document.getElementById("total-amount");
        this.elements.bill_input = document.getElementById("bill");
        this.elements.people_input = document.getElementById("number-of-people");
    },

    onSelectTip(value) {
        this.values.tip_percent = value;
    },

    checkLength(element) {
        if(element.value.length > this.values.maxLength) {
            return element.value = element.value.slice(0, this.values.maxLength);
        }
    }
};

TipCalculator.init();