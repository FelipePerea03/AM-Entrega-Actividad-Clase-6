let priceOfArticle = prompt("Ingrese el valor del articulo");

let priceDiscount = parseFloat(priceOfArticle) * 0.2;

priceOfArticle = priceOfArticle - priceDiscount;

let priceWithIva = priceOfArticle * 1.15;

alert ("El precio total es:" + priceWithIva);
