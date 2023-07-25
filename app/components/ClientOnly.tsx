"use client"

import { useState } from "react"

const ClientOnly = () => {
    const [hasMounted, setHasMounted] = useState(false)
  return (
    <div>Hello</div>
  )
}

export default ClientOnly