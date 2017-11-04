const storage = cc.sys.localStorage;
const isFirstRun = !storage.getItem('first');

if (isFirstRun) {
    storage.setItem('Kedah', 1);
    storage.setItem('Perlis', 0);
    storage.setItem('PulauPinang', 0);
    storage.setItem('Perak', 0);
    storage.setItem('Kelantan', 0);
    storage.setItem('Terrenganu', 0);
    storage.setItem('Pahang', 0);
    storage.setItem('Selangor', 0);
    storage.setItem('KualaLumpur', 0);
    storage.setItem('NegeriSembilan', 0);
    storage.setItem('Melaka', 0);
    storage.setItem('Johor', 0);
    storage.setItem('Sarawak', 0);
    storage.setItem('Sabah', 0);
    storage.setItem('reputation', 0);
    storage.setItem('cash', 100);
}

const model = {
    Kedah: parseInt(storage.getItem('Kedah')),
    Perlis: parseInt(storage.getItem('Perlis')),
    PulauPinang: parseInt(storage.getItem('PulauPinang')),
    Perak: parseInt(storage.getItem('Perak')),
    Kelantan: parseInt(storage.getItem('Kelantan')),
    Terrenganu: parseInt(storage.getItem('Terrenganu')),
    Pahang: parseInt(storage.getItem('Pahang')),
    Selangor: parseInt(storage.getItem('Selangor')),
    KualaLumpur: parseInt(storage.getItem('KualaLumpur')),
    NegeriSembilan: parseInt(storage.getItem('NegeriSembilan')),
    Melaka: parseInt(storage.getItem('Melaka')),
    Johor: parseInt(storage.getItem('Johor')),
    Sarawak: parseInt(storage.getItem('Sarawak')),
    Sabah: parseInt(storage.getItem('Sabah')),
    reputation: parseInt(storage.getItem('reputation')),
    cash: parseInt(storage.getItem('cash'))
};

storage.setItem('first', false);

function setData(key, value) {
    storage.setItem(key, value);
    model[key] = value;
}

export { model, setData };