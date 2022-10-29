import axios from "axios";

const instance = axios.create({

    baseURL: 'https://api.cryptostats.community/api/v1/fees/oneDayTotalFees/2022-10-04?metadata=false'
});

instance.get('');

export default instance;