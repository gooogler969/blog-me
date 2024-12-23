import React from 'react'

const Menu = () => {

    const posts = [
        {
          id: 1,
          title: "Lorem ipsum dolor sit amet",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          img: "https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg"
        },
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          img: "https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg"
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          img: "https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg"
        },
        {
          id: 4,
          title: "Lorem ipsum dolor sit amet",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          img: "https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg"
        },
        {
          id: 5,
          title: "Lorem ipsum dolor sit amet",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          img: "https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg"
        }
      ]

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post => (
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu