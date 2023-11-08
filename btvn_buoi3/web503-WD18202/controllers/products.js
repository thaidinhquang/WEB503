import axios from "axios"
export const getAllProduct = async (req, res) => {
    try {
        const { data } = await axios.get("http://localhost:3000/products")
        console.log(data)

        if (data && data.length) {
            return res.status(200).json({
                message: "Lay danh sach san pham thanh cong!",
                data
            })
        }

        return res.status(404).json({
            message: "Khong tim thay san pham nao!"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}
const products = [];
export const createProduct = async (req, res) => {
    try {

        const newProduct = req.body;

        const response = await axios.post("http://localhost:3000/products", newProduct);

        if (response.status === 201) {
            products.push(newProduct);

            return res.status(201).json({
                message: "Tạo sản phẩm thành công!",
                data: newProduct
            });
        }

        return res.status(500).json({
            message: "Lỗi khi tạo sản phẩm"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        });
    }
}



export const getDetailProduct = async (req, res) => {
    try {

        if (product) {
            return res.status(200).json({
                message: "Lay san pham thanh cong!",
                datas: product
            })
        }

        return res.status(404).json({
            message: "Khong tim thay san pham!"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}






export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const response = await axios.put(`http://localhost:3000/products/${id}`, req.body);

        if (response.status === 200) {

            return res.status(200).json({
                message: "Cập nhật sản phẩm thành công!",
                data: response.data
            });
        } else {

            return res.status(response.status).json({
                message: "Lỗi khi cập nhật sản phẩm!"
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Lỗi server"
        });
    }
}



export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const datas = products.filter(item => item.id != id);

        await axios.delete(`http://localhost:3000/products/${id}`);

        if (datas) {
            return res.status(200).json({
                message: "Xoas san pham thanh cong!",
                datas
            });
        }

        return res.status(404).json({
            message: "Khong tim thay san pham!"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        });
    }
}