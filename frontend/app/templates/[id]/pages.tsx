import { useRouter } from 'next/router';
import React from 'react'

const pages = () => {
  const router = useRouter();
  return (
    <p>{router.query.id}</p>
  )
}

export default pages