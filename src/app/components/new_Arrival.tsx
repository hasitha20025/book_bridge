'use client';
import React from 'react'
import Book_card from './ui/book_card'
import book_1 from '../../../public/imges/books/book_1.png'
import book_2 from '../../../public/imges/books/book_2.png'

export default function New_Arrival() {
  return (
    <>
        <section id='new_arrival'>
            <h1 className="  text-center text-text my-5 text-4xl font-bold leading-tight" >New Arrivals</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                <Book_card book_name={'The Alchemist'} image={book_1.src} updateTime={'1 minte ago'}/>
                <Book_card book_name={'The Alchemist'} image={book_2.src} updateTime={'5 minte ago'}/>

            </div>
        </section>
    </>
  )
}
