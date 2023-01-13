const Footer = ({ length }) =>{
    return (
        <footer>
            <div> {length} List {length === 1 ? "item" : "items" }</div>
        </footer>
    )
}

export default Footer;
