
export default function Product({id, name, weight, detail, price, category, session, image, quantity, status}){
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{weight}</td>
            <td>{detail}</td>
            <td>{price}</td>
            <td>{category}</td>
            <td>{session}</td>
            <td>{image}</td>
            <td>{quantity}</td>
            <td>{status}</td>
        </tr>
    )
}