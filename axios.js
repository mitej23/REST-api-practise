const axios = require("axios").default;

//getting all funds

axios
  .get("http://localhost:5000/funds/")
  .then((funds) => {
    console.table(funds.data);
  })
  .catch((error) => {
    console.log(error);
  });

// getting a single fund

axios
  .get("http://localhost:5000/funds/600587aced880624b858a36f")
  .then((funds) => {
    console.table(funds.data);
  })
  .catch((error) => {
    console.log(error);
  });

//post req

axios
  .post("http://localhost:5000/funds", {
    fundName: "hehehhe",
    amtInvested: 33000,
    code: 22222,
  })
  .then((res) => {
    console.table(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
