import axios from "axios";


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmQyMGRkZjg4NzM0NjdjNjI5NWNlMWZmZGQxZmEyYyIsIm5iZiI6MTc0NjY4MTEwMy4wMzgsInN1YiI6IjY4MWMzZDBmMTdiMDNjODQ2M2MxZDlmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kezl4yeBZdBmaS72OnXS09mBIOwXerLiZ9HAVBsXSiI'
  }

});

export default instance;
