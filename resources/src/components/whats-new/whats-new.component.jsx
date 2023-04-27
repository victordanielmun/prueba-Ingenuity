import React, { useState } from 'react';

import './index.scss'

export default function WhatsNew() {

  const [blogs, setBlogs] = useState([
    {
      title: "Blog 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: "/assets/whats-new-1.jpg",
      author: "Jane doe",
      is_open: true
    },
    {
      title: "Blog 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: "/assets/whats-new-2.png",
      author: "Jane doe",
      is_open: false
    },
    {
      title: "Blog 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: "/assets/whats-new-3.jpg",
      author: "Jane doe",
      is_open: false
    },
    {
      title: "Blog 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      image: "/assets/whats-new-4.jpg",
      author: "Jane doe",
      is_open: false
    }
  ]);

  return (
    <div className='whats-new'>

      <div className='whats-new-body'>

        <div className='logo'>
          <div className="center">
            <img src="/assets/events/Grupo 54.svg" alt="logo" />
          </div>
          <div className='logo-title'>
            <strong className='logo-title-whats'>What's</strong>
            <strong className='logo-title-new'>new</strong>
          </div>
          <br />
          <span>Find out about the latest news about our club.</span>
        </div>

        <div className="whats-new-link">
          <a href="/"></a>
        </div>

        <div className="blogs">
          {
            blogs.map((blog, index) => (
              <div className="blogs-item" key={index} style={{ backgroundImage: `url(${blog.image})` }}>

                <div className="blog-item-date">
                  <strong>12</strong>
                  <span>Aug</span>
                  <span>2016</span>
                </div>

                <div className="blog-item-content">
                  <div className="blog-item-content-data">
                    <small className='blog-item-content-author'>{blog.author}</small>
                    <strong className='blog-item-content-title'>{blog.title}</strong>
                    {
                      blog.is_open ? (
                        <>

                          <p className='blog-item-content-description'>{blog.description}</p>
                          <div className='blog-item-content-button center'>
                            <button>SEE MORE</button>
                          </div>

                        </>
                      ) : ''
                    }
                  </div>
                </div>

              </div>
            ))
          }
        </div>

        <div className="center whats-new-button-blogs">
          <button>
            FIND OUT MORE
          </button>
        </div>

      </div>

    </div>
  );
}