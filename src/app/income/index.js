import moment from 'moment';

var defaultTransaction = {source: 'donation-alerts', name: 'Disorder', amount: 100, currency: 'RUR', currencyRate: 1};

export default {
    template: require('./template.pug')(),
    data() {
        return {
            newTransaction: Object.assign({}, defaultTransaction),
            sortParams: {field: 'date', asc: false},
        }
    },
    methods: {
        tableTime(ts) { return moment(ts).format('hh:mm'); },
        tableDate(ts) { return moment(ts).format('DD.MM.YYYY hh:mm:ss'); },
        addTransaction(item) {
            if (!item) item = this.newTransaction;
            item.id = this.$parent.transactions.length;
            item.date = Date.now();

            this.$parent.transactions.push(item);
            this.newTransaction = Object.assign({}, defaultTransaction);
            this.newTransaction.amount = _.random(10, 300); //? test
        },
        sort(arr, params) {
            if (!params) params = this.sortParams;
            var res = _.sortBy(arr, params.field);
            if (!params.asc) res.reverse();
            return res;
        }
    },
    created() {
        // this.transactions = this.$parent.transactions;

    }
};
