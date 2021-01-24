import ProductPreview from "../components/product-preview/product-preview";
import products from "../products.json";
export const latestProducts = () => {
  // start at last product
  // if product is visible && stock > 0, push to array
  // stop when array.length == 4
  let selections = [];
  for (var i = products.length - 1; selections.length < 4; i--) {
    if (
      products[i]["Product Visible"] === "Y" &&
      products[i]["Stock Level"] > 0
    ) {
      selections.push(products[i]);
    }
  }
  return generatePreviews(selections);
};
export const topProducts = () => {
  return generatePreviews();
};
export const handPickedProducts = () => {
  return generatePreviews;
};

function generatePreviews(productList) {
  return productList.map((product) => (
    <ProductPreview
      key={product["Images"]}
      alt={product["Name"]}
      imgSrc={
        product["Images"].split(": ")[product["Images"].split(": ").length - 1]
      }
      brand={product["Brand"]}
      productName={product["Name"]}
      price={product["Retail Price"]}
    />
  ));
}
