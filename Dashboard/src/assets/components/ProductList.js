import React from "react";

function ProductList() {
    return(
        <div >
            <h1>Products List</h1>
            <table className="productList">
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Stock Quantity</th>
                        
                    </tr>
                    <tr>
                        <td>Shorts</td>
                        <td>$10.000</td>
                        <td>Shorts</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Tshirts</td>
                        <td>$10.000</td>
                        <td>Shorts</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Hoodie</td>
                        <td>$10.000</td>
                        <td>Shorts</td>
                        <td>18</td>
                    </tr>
            </table>
        </div>
    )

}

export default ProductList

