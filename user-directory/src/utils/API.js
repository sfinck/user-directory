import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
console.log(BASEURL)

const exportedObject = {
  search: function (query) {
    return axios.get(BASEURL + query);
  }
}

export default exportedObject;