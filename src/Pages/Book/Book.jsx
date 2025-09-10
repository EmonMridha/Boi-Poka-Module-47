import { FaStarHalfAlt } from "react-icons/fa";
import { GiButtonFinger } from "react-icons/gi";
import { Link } from "react-router";

const Book = ({singleBook}) => {
    // const data = use(bookPromise)

    // console.log(data);

    const {bookName,image,rating,category,tags,publisher,bookId,totalPages}=singleBook
    return (
       <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
  <figure className="p-4 bg-blue-950 w-2/3 mx-auto">
    <img
      className="h-[400px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <div className="flex justify-center gap-10">
        {
        tags.map(tag=><button>{tag}</button>)
        }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{totalPages}</div>
    </h2>
    <p>Book by: {publisher}</p>

    <div className="border-t-2 border-dashed"></div>  
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
       </Link>
    );
};

export default Book;