import React from 'react'
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
} from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'Meditation vaporware typewriter, mlkshk cillum sed asymmetrical labore woke. JOMO activated charcoal mollit single-origin coffee listicle unde numquam nisi',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'Bodega boys bruh hell of semiotics, post-ironic voluptate nisi cloud bread craft beer. Squid sint bushwick mlkshk actually lorem ',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Kinfolk 90s proident cray everyday carry dolor 3 wolf moon subway tile stumptown locavore consequat gluten-free spyplane ipsum',
  },
]
export const products_url = `/.netlify/functions/products`
export const single_product_url = `/.netlify/functions/single-product?id=`

/* export const products_url =
  'https://demo-comfy-store.netlify.app/react-store-products'

export const single_product_url = `https://demo-comfy-store.netlify.app/react-store-single-product?id=` */
