import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer xs7bRI1U6nAGpd7Vv3IRsv7gQ3JZJD3Gvoyi4mtH4DFoVv0Faurq3ofEugIsBYfq9fD8RfiGKLwzi2669q9bQIpqtesFaPtokkRriCv_PuPSYilrSKFB_qvLI4BuZHYx",
  },
});
