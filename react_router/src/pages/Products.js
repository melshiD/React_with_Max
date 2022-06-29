import { Link } from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li><Link to='/products/p1'>Big Book</Link></li>
                <li><Link to='/products/p2'>Pet Horse</Link></li>
                <li><Link to='/products/p3'>Online Course</Link></li>
            </ul>
        </section>
    )
};

export default Products;