const convertProductToVariationsArray = (products) => {
  const productItems = [];

  products.forEach((product) => {
    const { name, brand } = product.productDto;
    const productId = product.productDto.id;

    product.variations.forEach((variation) => {
      const { price, quantityAvailable } = variation;
      const variationId = variation.id;

      productItems.push({
        productId,
        variationId,
        name,
        brand,
        price,
        quantityAvailable,
        ...variation.attributes
      });
    });
  });

  return productItems;
};

export default convertProductToVariationsArray;
