import React, { useState, useEffect } from "react";
// //step2:fetch fn()
// async function fetchData(setData) {
//   let urlParams = new URLSearchParams(window.location.search);
//   let id = urlParams.get("id");
//   const URL = `https://api.slingacademy.com/v1/sample-data/users/${id}`;

//   // Fetch data from external API
//   const res = await fetch(URL);
//   const data = await res.json();
//   const user = data.user;
//   console.log(user);

//   setData(user);
// }

//step1:main fn()
export default function User() {
  const [data, setData] = useState(null);

  // //step3:put fetch fn() in useEffect
  // useEffect(() => {
  //   fetchData(setData);
  // }, []);

  return (
    data && (
      <div style={{ width: "100%", height: "100vh", padding: 50 }}>
        <p>First Name {data.first_name}</p>
        <p>Last Name: {data.last_name}</p>
        <p>Job: {data.job}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <p>Country: {data.country}</p>
      </div>
    )
  );
}
