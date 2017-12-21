const _ = require('lodash');
module.exports = {
    transactions: [
        {id: 0, date: Date.now(), source: 'donation-alerts', name: 'PlayerUnknown', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', name: 'BlackSilverUFA', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', name: 'CD Projekt Red', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', name: 'WeLoveGames', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', name: 'tv_juice', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
        {id: 0, date: Date.now(), source: 'donation-alerts', name: 'Happa', amount: _.random(10, 500), currency: 'RUR', currencyRate: 1},
    ]
};

module.exports.transactions.forEach((v, i) => {
    v.id = i;
    v.date -= i * 10000;
});
