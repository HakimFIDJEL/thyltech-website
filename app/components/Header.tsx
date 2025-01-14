'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { 
    Moon, 
    Sun, 
    Menu, 
    Github,
    Mail,
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


const Header = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-auto text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="ml-2 text-xl font-bold text-foreground">PFE - Projet</span>
            </Link>

            {/* Separator */}
            <div className="h-6 w-px bg-border mx-4" />

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-2">
              {['Projet', 'Équipe', 'École', 'Planning'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground px-2 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Theme Toggle, GitHub, and Contact Button */}
          <div className="flex items-center">

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-foreground"
                        >
                        {mounted && (theme === 'dark' ? (
                            <Sun className="h-5 w-5" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        ))}
                            <span className="sr-only">Changer le thème</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            Changer le thème
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            asChild
                            className="text-foreground"
                        >
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>
                            Code source
                        </p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>




            <div className="h-6 w-px bg-border mx-4" />
            <Button asChild>
              <Link href="#contact">
                Nous contacter
                <Mail className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <div className="flex md:hidden ml-4">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

