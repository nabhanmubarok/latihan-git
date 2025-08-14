let productArray = [];
let kodeIncrement = 1;

function saveProduct() {
    const namaProduct = document.getElementById("nama").value;
    const hargaProduct = document.getElementById("harga").value;
    const satuanProduct = document.getElementById("satuan").value;
    const kategoriProduct = document.getElementById("kategori").value;
    const gambarProduct = document.getElementById("gambar").value;
    const stockProduct = document.getElementById("stock").value;
    const editIndex = document.getElementById("editIndex").value;

    if (!namaProduct, !hargaProduct, !satuanProduct, !kategoriProduct, !stockProduct) {
        alert("isi semua data nya!");
        return;
    }

    if (editIndex === "-1") {
        const kodeProduct = "MD-" + String(kodeIncrement).padStart(3, "0");


        productArray.push({
            namaProduct,
            kodeProduct,
            hargaProduct,
            satuanProduct,
            kategoriProduct,
            gambarProduct,
            stockProduct,
        });


        kodeIncrement++;
    } else {
        productArray[editIndex] = {
            ...productArray[editIndex],
            namaProduct,
            hargaProduct,
            satuanProduct,
            kategoriProduct,
            gambarProduct,
            stockProduct,
        };
    }



    renderTable();
    resetForm();
    document.getElementById("kode").value = "MD-" + String(kodeIncrement).padStart(3, "0");
}


function renderTable() {
    const tableBody = document.getElementById("tab").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    productArray.forEach((Product, index) => {
        const row = tableBody.insertRow();
        const validate_kategori = Product.stockProduct < 5 ? "benar" : "salah";

        row.innerHTML = `<td>${index + 1}</td>
            <td>${Product.kodeProduct}</td>
            <td>${Product.namaProduct}</td>
            <td>${Product.hargaProduct}</td>
            <td>${Product.satuanProduct}</td>
            <td>${Product.kategoriProduct}</td>
            <td class="${validate_kategori}">${Product.stockProduct}</td>
            <td><img src="${Product.gambarProduct}" style="width: 60px; height: 60px;"></td>
            <td>
                <button onclick="editProduct(${index})">Modify</button>
                <button onclick="deleteProduct(${index})">Delete</button>
            </td>`;
    });
}

function deleteProduct(index) {
    if (confirm("Delete?")) {
        productArray.splice(index, 1);
        renderTable();
    }
}

function editProduct(index) {
    const product = productArray[index];
    document.getElementById("nama").value = product.namaProduct;
    document.getElementById("harga").value = product.hargaProduct;
    document.getElementById("satuan").value = product.satuanProduct;
    document.getElementById("kategori").value = product.kategoriProduct;
    document.getElementById("gambar").value = product.gambarProduct;
    document.getElementById("stock").value = product.stockProduct;

    document.getElementById("editIndex").value = index;
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("satuan").value = "";
    document.getElementById("kategori").value = "";
    document.getElementById("gambar").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("editIndex").value = "-1"; 
}
