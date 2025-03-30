"use client"

import { useState, useEffect } from "react"
import { Grid, List } from "lucide-react"

interface ToggleLayoutProps {
  onLayoutChange: (isList: boolean) => void
  defaultLayout?: boolean // true for list, false for grid
}

export function ToggleLayout({ onLayoutChange, defaultLayout = true }: ToggleLayoutProps) {
  const [isList, setIsList] = useState(defaultLayout)

  useEffect(() => {
    // Initialize with default layout
    onLayoutChange(defaultLayout)
  }, [defaultLayout, onLayoutChange])

  const toggleLayout = () => {
    const newLayout = !isList
    setIsList(newLayout)
    onLayoutChange(newLayout)
  }

  return (
    <button
      onClick={toggleLayout}
      className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
      aria-label={isList ? "Switch to grid view" : "Switch to list view"}
    >
      {isList ? <Grid className="h-5 w-5 text-gray-300" /> : <List className="h-5 w-5 text-gray-300" />}
    </button>
  )
}

