import React from 'react';
import { FaYandexInternational } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utilities/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)
  import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const {id} = useParams();
    const convertedParamsId=parseInt(id) //Converting the id from string into number 
    const data=useLoaderData();
    const singleBook=data.find(book=>book.bookId===convertedParamsId);
    const {bookName,image,author,category,review,totalPages,publisher,yearOfPublishing,rating}=singleBook

    
    const handleMarkAsRead = (id) =>{
        // Store with Id
        // where to store
        // array or collection
        // If book already exist then show an alert
        // If book doesn't exist then push in the collection or array


        toast("Added Sucessfully!")
        addToStoreDB(id);
    }
    return (
        <div className='flex gap-10 m-5'>
            <div className='bg-white p-10 rounded-2xl my-auto'>
                <img className='w-500 border-2' src={image} alt="" />
            </div>

           <div className='bg-amber-400 rounded-2xl text-black p-10'>
           <h2 className='text-5xl font-bold'>{bookName}</h2>
           <ToastContainer />
           <br />
           <h3 className='text-'>By <p className='font-bold'>{author}</p></h3>
           <br />
           <h4>{category}</h4>
           <br />
           <h4 className='border-b-2 border-dashed mb-5 pb-5'>Review: {review}</h4>
           <h4>Number of Pages: <p className='font-bold'>{totalPages}</p></h4>
           <h4>Publisher: <p className='font-bold'>{publisher}</p></h4>
           <h4>Year of Publishing: <p className='font-bold'>{yearOfPublishing}</p></h4>
           <h4>Rating: <p className='font-bold'>{rating}</p></h4>
           <button onClick={()=>handleMarkAsRead(convertedParamsId)} className="btn btn-accent m-2">Mark as Read</button> 
           <button className="btn btn-info m-2">Add to WishList</button>
           </div>
        </div>
    );
};

export default BookDetails;