"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { addUrl } from "@/actions"

export default function HomePage () {
  const [url, setUrl] = useState("")

  return (
    <div className="flex flex-row space-x-2 w-full min-h-screen justify-center items-center">
      <Input value={url} onChange={(e) => setUrl(e.target.value)} className="w-[200px]" />
      <Button>Submit</Button>
    </div>
  )
}