export async function getStaticProps() {
  // // Step1 - fetch data
  // const data = await fetch('https://fakestoreapi.com/products?limit=10')
  // const allProductsData = await data.json()
  // console.log(allProductsData)

  return {
    props: {} // Delete this line, uncomment below
    // // Step2 - return props
    // props: {
    //   allProductsData,
    // },
  }
}

// // Step3 - Object destructuring into Campaign as argument Line19
// { allProductsData }

export default function Campaign({ allProductsData }) {
  return (
    <>
      <h1>SSG - Static Site Generation</h1>
      <h1>Top 10 Bestsellers</h1>
      <ol>
        {/* Step4 - generate UI */}
        {/* {allProductsData.map((product, index) => {
          return <li key={index}>{product.title}</li>
        })} */}
      </ol>
    </>
  )
}

//Step5 - check page source
