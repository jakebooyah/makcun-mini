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

const INGRIDIENT = ['Chilli', 'Coconut Milk', 'Ginger', 'Pandan', 'Pepper', 'Salt', 'Sambal', 'Sugar'];
const COLOURS = ['Green', 'Purple', 'Red', 'Blue', 'Black', 'White', 'Yellow'];

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
};

const GAMES = {
    Kedah: 'cooking',
    Perlis: 'sewing',
    PulauPinang: 'cooking',
    Perak: 'sewing',
    Kelantan: 'cooking',
    Terrenganu: 'sewing',
    Pahang: 'cooking',
    Selangor: 'sewing',
    KualaLumpur: 'cooking',
    NegeriSembilan: 'sewing',
    Melaka: 'cooking',
    Johor: 'sewing',
    Sarawak: 'cooking',
    Sabah: 'sewing'
};

const GAMEBASEWIN = {
    Kedah: 2200,
    Perlis: 7000,
    PulauPinang: 15000,
    Perak: 25000,
    Kelantan: 55000,
    Terrenganu: 90000,
    Pahang: 230000,
    Selangor: 500000,
    KualaLumpur: 850000,
    NegeriSembilan: 1100000,
    Melaka: 2200000,
    Johor: 4000000,
    Sarawak: 7000000,
    Sabah: 10000000
};

const GAMEBONUSWINPERSTAR = {
    Kedah: 120,
    Perlis: 150,
    PulauPinang: 1000,
    Perak: 1200,
    Kelantan: 2000,
    Terrenganu: 3000,
    Pahang: 5000,
    Selangor: 10000,
    KualaLumpur: 20000,
    NegeriSembilan: 40000,
    Melaka: 80000,
    Johor: 100000,
    Sarawak: 150000,
    Sabah: 300000
};

const GAMEREPUTATION = {
    Kedah: 1,
    Perlis: 1,
    PulauPinang: 2,
    Perak: 2,
    Kelantan: 3,
    Terrenganu: 3,
    Pahang: 4,
    Selangor: 4,
    KualaLumpur: 5,
    NegeriSembilan: 5,
    Melaka: 6,
    Johor: 6,
    Sarawak: 7,
    Sabah: 7
};

const GAMEPENALTYPERMISTAKE = {
    Kedah: 1,
    Perlis: 2,
    PulauPinang: 4,
    Perak: 8,
    Kelantan: 16,
    Terrenganu: 32,
    Pahang: 64,
    Selangor: 128,
    KualaLumpur: 256,
    NegeriSembilan: 512,
    Melaka: 1024,
    Johor: 2048,
    Sarawak: 4096,
    Sabah: 8192
};

const SCENE = {
    id: 0
};

export {
    REGIONS,
    PRICES,
    INVESTPRICES,
    INGRIDIENT,
    COLOURS,
    REGIONSPREFER,
    GAMEBASEWIN,
    SCENE,
    GAMES,
    GAMEBONUSWINPERSTAR,
    GAMEREPUTATION,
    GAMEPENALTYPERMISTAKE
};