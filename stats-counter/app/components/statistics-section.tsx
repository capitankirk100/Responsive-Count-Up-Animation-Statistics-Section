"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Utensils, Users, List, Car, Building, User, Briefcase, Heart, Map } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  color?: string
}

const StatItem = ({ icon, value, label, color = "#00ff9d" }: StatItemProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef<number>(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      countRef.current = 0
      const duration = 2000 // 2 seconds
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      let frame = 0

      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const easeOutQuad = 1 - (1 - progress) * (1 - progress)
        countRef.current = Math.floor(easeOutQuad * value)
        setCount(countRef.current)

        if (frame === totalFrames) {
          clearInterval(counter)
          setCount(value)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }
  }, [inView, value])

  return (
    <div
      ref={ref}
      className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="text-4xl mb-4" style={{ color }}>
        {icon}
      </div>
      <div className="text-5xl font-bold text-white mb-2">
        {count}
        {label.includes("~") && "+"} {/* Add + symbol if label contains ~ */}
      </div>
      <div className="text-gray-300 text-center">
        {label.replace("~", "")} {/* Remove ~ from label */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: color }} />
    </div>
  )
}

export const StatisticsSection = () => {
  return (
    <div className="w-full py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Statistiche</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem icon={<Building />} value={43} label="Vallecamonica Paesi" />
          <StatItem icon={<Building />} value={11} label="Comuni Bannati" />
          <StatItem icon={<Users />} value={2300} label="Utenti Complessivi ~" />
          <StatItem icon={<Briefcase />} value={10} label="Concept Sviluppati" />
          <StatItem icon={<List />} value={20} label="Servizi Ingegnerizzati +" />
          <StatItem icon={<Car />} value={6} label="Car Sharing Disponibili" />
          <StatItem icon={<Map />} value={18} label="Destinazioni Car Sharing" />
          <StatItem icon={<Utensils />} value={7} label="Viaggio Del Gusto Ristoranti" />
          <StatItem icon={<User />} value={65} label="Dottori Disponibili da remoto +" />
          <StatItem icon={<Heart />} value={50} label="Ai Valore senza utenti +k€" />
          <StatItem icon={<Heart />} value={250} label="Ai Driver4You valore +k€" />
          <StatItem icon={<Users />} value={92} label="Avatar Camuni Erogati" />
        </div>
      </div>
    </div>
  )
}

