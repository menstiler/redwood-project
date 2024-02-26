import { createContext, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import SearchBar from 'src/components/SearchBar/SearchBar'

export const SearchContext = createContext(null)

const BlogLayout = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null)
  const { logOut, isAuthenticated, currentUser } = useAuth()

  const updateResults = (value) => {
    setSearchResult(value)
  }

  return (
    <SearchContext.Provider value={searchResult}>
      <Toaster />
      <header className="relative flex items-center justify-between px-8 py-4 font-light">
        <div className="flex w-full items-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            <Link to={routes.home()}>Redwood Blog</Link>
          </h1>
          <SearchBar updateResults={updateResults} />
        </div>
        <nav>
          <ul className="relative flex items-center">
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:font-normal"
                to={routes.about()}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="rounded px-4 py-2 transition duration-100 hover:font-normal"
                to={routes.contact()}
              >
                Contact
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div>
                  <button
                    type="button"
                    onClick={logOut}
                    className="px-4 py-2 transition duration-100 hover:font-normal"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to={routes.login()}
                  className="px-4 py-2 transition duration-100 hover:font-normal"
                >
                  Login
                </Link>
              )}
            </li>
            {isAuthenticated && (
              <li className="text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <div className="absolute right-0 mr-1">{currentUser.email}</div>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl rounded-b bg-white p-12">
        {children}
      </main>
    </SearchContext.Provider>
  )
}

export default BlogLayout
