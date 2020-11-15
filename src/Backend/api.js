// Fetch Product Details
export const fetchProductDetails = (barCode, onSuccess) => {
  var myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    '__cfduid=d2aee8d38f7e2414718a1c7f3f0a027ba1605429267; __cflb=0H28uyvJ4CKpQyt4K4sAVoNGmQD7bdrdAi8jVuzWkBf; bl_session=iitdt1t0k0dq8j0h879arohhfe4hksoi',
  );

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };

  fetch(
    `https://api.barcodelookup.com/v2/products?barcode=${barCode}&formatted=y&key=949zp6rua0agqgicaqhwe6pxqi7h40`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => onSuccess(result))
    .catch((error) => {
      console.log('error', error);
      onSuccess(false);
    });
};
