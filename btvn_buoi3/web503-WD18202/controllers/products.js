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
        // Lấy dữ liệu sản phẩm mới từ yêu cầu
        const newProduct = req.body; // Giả sử dữ liệu sản phẩm mới được gửi trong body của yêu cầu

        // Gửi yêu cầu POST để tạo sản phẩm mới trong cơ sở dữ liệu (hoặc lưu vào danh sách sản phẩm)
        const response = await axios.post("http://localhost:3000/products", newProduct);

        if (response.status === 201) {
            // Thêm sản phẩm mới vào danh sách sản phẩm (nếu sử dụng danh sách sản phẩm)
            products.push(newProduct);

            // Trả về thông tin sản phẩm mới đã tạo
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





// Cập nhật sản phẩm
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id; // Lấy ID sản phẩm cần cập nhật 

        // Gửi yêu cầu PUT hoặc PATCH đến API để cập nhật sản phẩm
        const response = await axios.put(`http://localhost:3000/products/${id}`, req.body);

        if (response.status === 200) {
            // Nếu cập nhật thành công, trả về thông báo thành công và dữ liệu đã cập nhật
            return res.status(200).json({
                message: "Cập nhật sản phẩm thành công!",
                data: response.data
            });
        } else {
            // Trường hợp khác (ví dụ: sản phẩm không tồn tại), trả về lỗi
            return res.status(response.status).json({
                message: "Lỗi khi cập nhật sản phẩm!"
            });
        }
    } catch (error) {
        // Bắt lỗi trong trường hợp gửi yêu cầu tới API
        return res.status(500).json({
            message: "Lỗi server"
        });
    }
}



export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const datas = products.filter(item => item.id != id);

        // Sử dụng Axios để gửi yêu cầu DELETE đến URL tương ứng
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