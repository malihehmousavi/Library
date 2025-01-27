import { Outlet, NavLink, useSearchParams } from "react-router-dom";  
import { getBooks } from "./data/Data";  

const Books = () => {  
  let books = getBooks();  
  let [searchParams, setSearchParams] = useSearchParams();  
  
  return (  
    <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr", gap: "60px" }}>  
      <div style={{ display: "flex", flexDirection: "column", marginRight: "20px" }}>  
        <input type="text"  
          value={searchParams.get("filter") || ""}  
          onChange={(event) => {  
            let inputvalue = event.target.value;  
            if (inputvalue) {  
              setSearchParams({ filter: inputvalue });  
            } else {  
              setSearchParams({});  
            }  
          }}   
        />  
        {  
          books  
            .filter((bookFiltered) => {  
              let filter = searchParams.get("filter");  
              if (!filter) return true;  
              let name = bookFiltered.name;  
              return name.startsWith(filter);  
            })  
            .map((book) => (  
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