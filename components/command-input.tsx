"use client"

import { useState } from "react"

export function CommandInput() {
  const [value, setValue] = useState("")

  return (
    <div className="flex w-full max-w-2xl flex-col items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What should Atlas do for you today?"
        className="w-full border-0 bg-transparent text-center text-2xl font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-0"
        autoFocus
      />
      <div className="mt-3 h-px w-16 bg-border" />
    </div>
  )
}
