import { useEffect, useState } from 'react'

export default function Campaign() {
  // // Step1 - state setup
  // const [allProductsData, setAllProductsData] = useState([])

  // // Step2 - fetch data
  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products?limit=10')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setAllProductsData(json)
  //       console.log(json)
  //     })
  // }, [])

  return (
    <>
      <h1>CSR - Client-side rendering</h1>
      <h1>Top 10 Bestsellers</h1>
      <ol>
        {/* Step3 - generate UI (uncomment below)*/}
        {/* {allProductsData.map((product, index) => {
          return <li key={index}>{product.title}</li>
        })} */}
      </ol>
    </>
  )
}

//Step4 - check page source
