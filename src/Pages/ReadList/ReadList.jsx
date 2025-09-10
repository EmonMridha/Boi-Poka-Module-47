import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList,setReadList]=useState([]);
    const [sort,setSort]=useState('')

    const data=useLoaderData();

    useEffect(()=> {
        const storedBookData = getStoredBook();
        const convertedStoredbooks = storedBookData.map(id=>parseInt(id))
         const myReadList = data.filter(book=>convertedStoredbooks.includes(book.bookId))
        setReadList(myReadList);
    },[])

    const handleSort =(type)=>{
        setSort(type)
        if(type==='pages'){
            const sortedByPage = [...readList].sort((a,b)=> a.totalPages - b.totalPages);
            setReadList(sortedByPage)
            
        }
        if(type === 'ratings') {
            const sortedByRantings = [...readList].sort((a,b)=>a.rating - b.rating);
            setReadList(sortedByRantings)
        }
    }

    return (
        <div>
            <details className="dropdown">
            <summary className="btn m-1">Sort by: {sort? sort:''}</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>handleSort('pages')}><a>Pages</a></li>
                <li onClick={()=>handleSort('ratings')}><a>Ratings</a></li>
            </ul>
            </details>
           <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Books I read: {readList.length}</h2>

      {
        readList.map(singleBook=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;