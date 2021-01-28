import ProductPreview from "../components/product-preview/product-preview";
import products from "../products.json";
const queryProducts = (queryType) => {
  let selections = [];
  for (let i = products.length - 1; selections.length < 4; i--) {
    console.log(products[i], "products[i]");
    if (
      products[i]["Product Visible?"] === "Y" &&
      products[i]["Current Stock Level"] > 0
    ) {
      selections.push(products[i]);
    }
  }
  return generatePreviews(selections);
};

function generatePreviews(productList) {
  return productList.map((product) => (
    <ProductPreview
      key={product["Images"]}
      alt={product["Name"]}
      thumbnail={product["Product Image URL - 1"]}
      brand={product["Brand"]}
      productName={product["Name"]}
      price={product["Retail Price"]}
    />
  ));
}

export default queryProducts;
