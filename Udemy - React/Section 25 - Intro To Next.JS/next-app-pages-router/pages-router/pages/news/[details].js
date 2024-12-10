import { useRouter } from 'next/router'
import React from 'react'

export default function EssentialDetail({params}) {
  const router = useRouter();
  const details = router.query.details;
  return (
    <div>News details for - {details}</div>
  )
}
