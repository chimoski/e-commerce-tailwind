export const fetchAllProductsquery =
	'*[_type == "product" && category=="clothing"]{"image":image[].asset->url,name,price}';

export const displayProducts =
	'*[_type == "product"]{category,"image":image[].asset->url,name,price}';
export const displayShoes =
	'*[_type == "product" && category=="shoes"]{"image":image[].asset->url,name,price}';
export const displayBags =
	'*[_type == "product" && category=="Bags"]{"image":image[].asset->url,name,price}';
export const displayAccessories =
	'*[_type == "product" && category=="Accessories"]{"image":image[].asset->url,name,price}';
export const displayPets =
	'*[_type == "product" && category=="Pets"]{"image":image[].asset->url,name,price}';
export const displayArtsAndGallery =
	'*[_type == "product" && category=="Art gallery""]{"image":image[].asset->url,name,price}';
export const displayClothing =
	'*[_type == "product" && category=="Art gallery""]{"image":image[].asset->url,name,price}';
