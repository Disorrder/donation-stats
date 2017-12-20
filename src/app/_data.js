const _ = require('lodash');
module.exports = {
    transactions: [
        {id: 0, date: Date.now(), source: 'donation-alerts', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
    ]
};

module.exports.transactions.forEach((v, i) => {
    v.id = i;
    v.date += i * 10000;
});
