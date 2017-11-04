const REGIONS = [
    'Kedah',
    'Perlis',
    'PulauPinang',
    'Perak',
    'Kelantan',
    'Terrenganu',
    'Pahang',
    'Selangor',
    'KualaLumpur',
    'NegeriSembilan',
    'Melaka',
    'Johor',
    'Sarawak',
    'Sabah'
];

const PRICES = {
    Kedah: 0,
    Perlis: 5000,
    PulauPinang: 30000,
    Perak: 100000,
    Kelantan: 200000,
    Terrenganu: 500000,
    Pahang: 1000000,
    Selangor: 3000000,
    KualaLumpur: 8000000,
    NegeriSembilan: 15000000,
    Melaka: 25000000,
    Johor: 50000000,
    Sarawak: 100000000,
    Sabah: 200000000
};

const INVESTPRICES = {
    Kedah: 35,
    Perlis: 100,
    PulauPinang: 400,
    Perak: 1200,
    Kelantan: 3000,
    Terrenganu: 7000,
    Pahang: 10000,
    Selangor: 30000,
    KualaLumpur: 80000,
    NegeriSembilan: 100000,
    Melaka: 150000,
    Johor: 250000,
    Sarawak: 300000,
    Sabah: 500000
};

const REGIONSPREFER = {
    Kedah: ['Chilli', 'Pepper', 'Coconut Milk'],
    Perlis: ['Green', 'Purple', 'Red'],
    PulauPinang: ['Pandan', 'Salt', 'Chilli'],
    Perak: ['Blue', 'Black', 'White'],
    Kelantan: ['Sambal', 'Sugar', 'Coconut Milk'],
    Terrenganu: ['Black', 'Purple', 'Blue'],
    Pahang: ['Sambal', 'Salt', 'Chilli'],
    Selangor: ['Yellow', 'Green', 'Red'],
    KualaLumpur: ['Ginger', 'Pandan', 'Coconut Milk'],
    NegeriSembilan: ['White', 'Red', 'Green'],
    Melaka: ['Sugar', 'Sambal', 'Pandan'],
    Johor: ['Black', 'Yellow', 'Red'],
    Sarawak: ['Coconut Milk', 'Salt', 'Sugar'],
    Sabah: ['White', 'Green', 'Yellow'],
}

export { REGIONS, PRICES, INVESTPRICES, REGIONSPREFER };