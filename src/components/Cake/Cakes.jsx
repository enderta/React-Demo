import React from 'react'
import CakesCess from './CakesCss.css'
const Cakes = () => {
  return (
    <div>
              <header className="header">
          <img className="logo" src="/images/logo.png" alt="logo" />
          <div className="nav_wrapper">
            <nav className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span />
              </label>
              <ul className="menu__box">
                <li><a className="menu__item" href="#">Home</a></li>
                <li><a className="menu__item" href="#">Cakes</a></li>
                <li><a className="menu__item" href="#">Ordering</a></li>
                <li><a className="menu__item" href="#">Lessons</a></li>
                <li><a className="menu__item" href="#">About</a></li>
              </ul>
            </nav>
            <p className="slogan">The best cakes in town delivered to your door</p>
          </div>
        </header>
        <nav className="desktop">
          <ul className="nav_list">
            <li><a className="nav_link" href="#">Home</a></li>
            <li><a className="nav_link" href="#">Cakes</a></li>
            <li><a className="nav_link" href="#">Ordering</a></li>
            <li><a className="nav_link" href="#">Lessons</a></li>
            <li><a className="nav_link" href="#">About</a></li>
          </ul>
        </nav>
        <section className="hero">
          <article className="article">
            <h1 className="welcome">Welcome</h1>
            <p className="text_content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              placeat, suscipit inventore autem ea magni aliquam quia earum, odit,
              doloribus amet dolorem neque. Voluptate, voluptatum aliquid sint
              voluptatem quos ut!
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
              nemo rem culpa sunt, reprehenderit voluptates saepe laborum molestiae?
              Voluptate, similique architecto repudiandae nostrum expedita veritatis
              obcaecati quas totam alias praesentium.
            </p>
          </article>
          <img className="hero_img" src="/images/hero_img.avif" alt="" />
        </section>
        <section className="thumbnails">
          <img src="/images/img1.avif" alt="" className="thumbnail" />
          <img src="/images/img2.avif" alt="" className="thumbnail" />
          <img src="/images/img3.avif" alt="" className="thumbnail" />
          <img src="/images/img4.avif" alt="" className="thumbnail" />
        </section>
        <footer>
          <div className="footer_links">
            <div className="footer_content" />
            <div className="footer_content" />
            <div className="footer_content" />
          </div>
          <div className="copyright" />
        </footer>
    </div>
  )
}

export default Cakes