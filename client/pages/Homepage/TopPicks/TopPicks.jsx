import React, { useEffect } from 'react'
import Container from '../../../components/JCUX/Container'
import './toppicks.css'

const data = [
  {
    name: 'product 1',
    price: 76.99,
    images: [
      'https://images.hdqwalls.com/wallpapers/fashion-model-hd.jpg'
    ],
    views: 1
  },
  {
    name: 'product 2',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 2
  },
  {
    name: 'product 3',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 3
  },
  {
    name: 'product 4',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 4
  },
  {
    name: 'product 5',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 5
  },
  {
    name: 'product 6',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 6
  },
  {
    name: 'product 7',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 7
  },
  {
    name: 'product 8',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 8
  },
  {
    name: 'product 9',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 9
  },
  {
    name: 'product 10',
    price: 76.99,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZxdxouuxJ7nEpWa24dcw08rE7JzfDvxBWbg&usqp=CAU'
    ],
    views: 10
  }
]

const TopPicks = () => {
  let sortedArray = [...data]
  useEffect(() => {
    // makes top picks drag to scroll
    const slider = document.querySelector('.top-picks-main-wrapper')
    let mouseDown = false
    let startX, scrollLeft

    let startDragging = function (e) {
      mouseDown = true
      slider.style.cursor = 'grabbing'
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }
    let stopDragging = function (event) {
      mouseDown = false
      slider.style.cursor = 'grab'
    }

    slider.addEventListener('mousemove', (e) => {
      e.preventDefault()
      if (!mouseDown) { return }
      const x = e.pageX - slider.offsetLeft
      const scroll = x - startX
      slider.scrollLeft = scrollLeft - scroll
    })

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false)
    slider.addEventListener('mouseup', stopDragging, false)
    slider.addEventListener('mouseleave', stopDragging, false)
  })
  // order data based on most viewed
  sortedArray.sort((a, b) => {
    return b.views - a.views
  })
  return (
    <div className="top-picks">
      <Container>
        <h1>Most viewed products</h1>
        <div className="top-picks-main-wrapper">
          {sortedArray.map((product, index) => {
            return (
              <a href="/" key={index} className="top-pick-main-wrapper">
                <div className="top-pick-image-wrapper">
                  <img src={product.images[0]} alt="" />
                </div>
                <div className="top-pick-text-wrapper">
                  <h1 className="top-pick-name">{product.name}</h1>
                  <h1 className="top-pick-price">NZD${product.price}</h1>
                </div>
              </a>
            )
          })}
        </div>

      </Container>
    </div>
  )
}

export default TopPicks
