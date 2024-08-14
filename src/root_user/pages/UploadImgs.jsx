import { useState } from "react";
import { AutocloseAlert } from "../../Utils/Functions";
import { apiAuth } from "../../api/api";

const UploadImgs = () => {

    const [file, setFile] = useState();

    const handleFileChange = e => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };


    const handleUpload = async () => {
        try {
            if (file) {
                console.log("Uploading file...");

                const formData = new FormData();
                formData.append("FileName", file);

                await apiAuth({ method: "post", url: "/uploadCard", data: formData });
            }
            file && AutocloseAlert("Subiendo archivo");
        } catch (error) {
            AutocloseAlert("Error!!!")
            console.error(error);
        }
    }

    return (
        <>
            <div className="max-w-sm mx-auto my-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sample imgs</label>
                {/* <input classNameName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required /> */}
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                <input onChange={handleFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                <button onClick={handleUpload} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    SUBMIT
                </button>
            </div>
        </>
    )
}

export default UploadImgs;