import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
      const data = [
        {desc: "Find & Download Free Graphic Resources for Random Lines Vectors, Stock Photos & PSD files.", fileSize: ".4mb", close: false, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}},
        {desc: "Visual pattern of lines drawn without a specific order or direction.", fileSize: ".4mb", close: false, tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"}},
        {desc: "Just load your multi-line data and get its lines rearranged in random order.", fileSize: ".4mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}},
        {desc: "A simple tool to shuffle lines of text. Just paste the text below and press the button.", fileSize: ".4mb", close: true, tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}}
    ]
     
  return (
    <div ref={ref} className='fixed left-o top-0 w-full h-full bg-sky-800/50 z-[3] flex flex-wrap gap-5 p-5'>
        {data.map((item,index) => (
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground