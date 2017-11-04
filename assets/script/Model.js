const storage = cc.sys.localStorage;

const model = {
    Kedah: storage.getItem('Kedah'),
    Perlis: storage.getItem('Perlis'),
    PulauPinang: storage.getItem('PulauPinang'),
    Perak: storage.getItem('Perak'),
    Kelantan: storage.getItem('Kelantan'),
    Terrenganu: storage.getItem('Terrenganu'),
    Pahang: storage.getItem('Pahang'),
    Selangor: storage.getItem('Selangor'),
    KualaLumpur: storage.getItem('KualaLumpur'),
    NegeriSembilan: storage.getItem('NegeriSembilan'),
    Melaka: storage.getItem('Melaka'),
    Johor: storage.getItem('Johor'),
    Sarawak: storage.getItem('Sarawak'),
    Sabah: storage.getItem('Sabah'),
    reputation: storage.getItem('reputation'),
    cash: storage.getItem('cash')
};

function setData(key, value) {
    storage.setItem(key, value);
    model[key] = value;
}

export { model, setData };