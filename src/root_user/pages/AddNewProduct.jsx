import { useState } from "react";
import { AutocloseAlert } from "../../Utils/Functions";
import { apiAuth } from "../../api/api";

const AddNewProduct = () => {
    const [file, setFile] = useState();
    // const imagen = 'public/imgs/220147-2.jpg'
    const [newProduct, setNewProduct] = useState({
        ProductName: "",
        productDescription: "",
        CategoryID: "", // int
        Price: "", //float
        Stock: "", // int
        SKU: "",
        Brand: "",
        Product: "", //float
        Dimensions: "",
        Color: "",
        Size: "",
        ThumbnailURL: "",
    });

    const handleFileChange = e => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleChange = ({ target }) => {
        setNewProduct({
            ...newProduct,
            [target.name]: target.value,
        });
    }

    const create = async (event) => {
        try {
            event.preventDefault();
            for (let key in newProduct) {
                if (newProduct.hasOwnProperty(key) && newProduct[key] === "") {
                    AutocloseAlert("Campos Vacios!!!");
                    return true;
                }
            }
            await apiAuth({ method: 'post', url: '/createNewProduct', data: { ...newProduct } })
        } catch (e) {
            console.log(e);
        }
    }

    const handleUpload = async () => {
        try {
            if (file) {
                console.log("Uploading file...");

                const formData = new FormData();
                formData.append("FileName", file);           // Archivo
                formData.append("ProductName", newProduct.ProductName); // Nombre del producto

                await apiAuth({ method: "post", url: "/uploadImages", data: formData });
            }
            file && AutocloseAlert("Subiendo archivo");
        } catch (error) {
            AutocloseAlert("Error!!!")
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={create} className="max-w-sm mx-auto my-auto">
                <div className="mb-5">
                    <label name="className" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ProductName</label>
                    <input name="ProductName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.ProductName} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">productDescription</label>
                    <input name="productDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.productDescription} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CategoryID</label>
                    <input type="number" name="CategoryID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.CategoryID} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input type="number" name="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Price} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stock</label>
                    <input type="number" name="Stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Stock} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SKU</label>
                    <input name="SKU" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.SKU} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                    <input name="Brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Brand} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
                    <input type="number" name="Product" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Product} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dimensions</label>
                    <input name="Dimensions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Dimensions} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                    <input name="Color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Color} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                    <input name="Size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.Size} required />
                </div>
                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ThumbnailURL</label>
                    <input name="ThumbnailURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={newProduct.ThumbnailURL} required />
                </div>

                <div className="max-w-sm mx-auto my-auto">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sample imgs</label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                    <input onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    {
                        newProduct.ProductName !== ""
                            ? (
                                <div className="flex">
                                    <button onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        subir imagen
                                    </button>
                                </div>
                            )
                            : (
                                <div className="flex">
                                    <button onClick={handleUpload} className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>
                                        subir imagen
                                    </button>
                                    <label className="block mb-2 text-sm font-medium text-red-600 dark:text-white" htmlFor="file_input">Se requiere el nombre del producto</label>
                                </div>
                            )
                    }
                </div>

                {
                    newProduct.ProductName == "" ||
                        newProduct.productDescription == "" ||
                        newProduct.CategoryID == "" ||
                        newProduct.Price == "" ||
                        newProduct.Stock == "" ||
                        newProduct.SKU == "" ||
                        newProduct.Brand == "" ||
                        newProduct.Product == "" ||
                        newProduct.Dimensions == "" ||
                        newProduct.Color == "" ||
                        newProduct.Size == "" ||
                        newProduct.ThumbnailURL == ""
                        ? (
                            <div className="flex mt-4">
                                <button type="submit" className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>
                                    SUBMIT
                                </button>
                                <label className="block mb-2 text-sm font-medium text-red-600 dark:text-white" htmlFor="file_input">Aún hay campos vacíos</label>
                            </div>
                        )
                        : (
                            <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4 mb-4">
                                SUBMIT
                            </button>
                        )
                }
            </form>
            {/* <div>
                <img src={imagen} alt="Producto 1" />
            </div> */}
        </>
    )
}

export default AddNewProduct;