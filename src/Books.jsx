
import { Outlet, NavLink } from "react-router-dom";  
import { getBooks } from "./data/Data";  

const Books = () => {  
  let books = getBooks();  

  return (  
    <div style={{ display: "grid", gridTemplateColumns:"2fr 2fr",gap:"60px" }}>  
      <div style={{ display: "flex", flexDirection: "column", marginRight: "20px" }}>  
        {  
          books.map((book) => (  
            <NavLink  
              to={book.id}  
              key={book.id}  
              style={({ isActive }) => ({  
                color: isActive ? "red" : "",  
                marginBottom: "10px", // فاصله بین نام کتاب‌ها  
                textDecoration: "none" // حذف خط زیر لینک  
              })}  
            >  
              {book.name}  
            </NavLink>  
          ))  
        }  
      </div>  
      <Outlet />  
    </div>  
  );  
}  

export default Books;