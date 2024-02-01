import React from 'react';
import "./css/Home.css";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTOtcpXTInhasjlHraCtYLlhVpYmMdlyAHg&usqp=CAU" alt="Banner Image" />
            <div className="home_row">
                <Product 
                    id="1"
                    title="The Early Rooster: How Constant Innovation Creates Changes"
                    price={169.99}
                    image="https://4.imimg.com/data4/AV/PP/MY-6372856/recycled-metal-art-500x500.jpg"
                    rating={5}
                />
                <Product 
                    id='2'
                    title="Scrap Metal Art Alien Sculpture : Into the Unknown"
                    price={734.900}
                    image="https://5.imimg.com/data5/CW/RR/LB/SELLER-6372856/scrap-metal-art-500x500.JPG"
                    rating={4}
                />
                <Product 
                    id='3'
                    title="Women Sculpture by Marry Maxilead"
                    price={76.550}
                    image="https://maxileadmetals.co.uk/wp-content/uploads/2021/03/scrap-metal-art-1.jpg"
                    rating={3}
                />
            </div>
            <div className="home_row">
                <Product 
                    id='4'
                    title="Experimenting with the Wild : Fish preying on Fish"
                    price={12.000}
                    image="https://4.imimg.com/data4/JR/UY/MY-6372856/scrap-metal-sculpture-500x500.jpg"
                    rating={2}
                />
                <Product 
                    id='5'
                    title="Masterpiece Teddy Bear Made from scraps of Toys"
                    price={394.000}
                    image="https://assets.hongkiat.com/uploads/recycled-art/teddy-bear.jpg"
                    rating={5}
                />
            </div>
            <div className="home_row">
                <Product 
                    id='6'
                    title="Amazing Collection of Penholders | Built with Case Leftovers, Charcoal Fabric and Pipes"
                    price={1094.98}
                    image="https://image5-us-west.cloudokyo.cloud/image/v1/31/e6/5a/31e65a46-29fd-43fc-ae49-14ce5ea0b747/672.webp"
                    rating={5}
                />
            </div> 
        </div>
    </div>
  )
}

export default Home