function localname() {
    const userdetails = localStorage.getItem("userdetails");
    const local = JSON.parse(userdetails);
    const localname = local.name;
    return localname;
  }
  export default localname;
  