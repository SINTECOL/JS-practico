const precioOriginal =100;
const descuento = 15;

function precioConDescuento(precioOriginal, descuento) {
    return precioOriginal*(1-descuento/100);
}

function btnOnClick(){
    const precio = document.getElementById("InputPrice").value;
    const descuento = document.getElementById("InputDiscount").value;
    const precio_final= precioConDescuento(precio, descuento);

    document.getElementById("ResultPrice").innerText="El precio con descuento del producto es $"+precio_final+"."


}