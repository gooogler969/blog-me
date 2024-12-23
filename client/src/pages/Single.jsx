import React from 'react'
import Edit from "../img/edit.webp"
import Delete from "../img/delete.webp"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg" alt="" />
        <div className="user">
          <img src="https://i.kym-cdn.com/photos/images/original/000/665/377/0bf.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil expedita fugiat aut doloribus molestiae officia distinctio, alias repellendus vero.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nihil expedita fugiat aut doloribus molestiae officia distinctio, alias repellendus vero.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nemo libero consequuntur natus ad commodi nulla ratione aliquam tempora excepturi.
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single