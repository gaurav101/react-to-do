import React from 'react'

export default function Footer() {
  const footerSytle={
    position: 'relative',
    width: '100%',
    top: '50vh'
  }
  return (
    <footer className='bg-dark text-light' style={footerSytle}>
      <p className='text-center py-3'>
      &copy; mytodo.com
      </p>
    </footer>
  )
}
