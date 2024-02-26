import { createContext, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import SearchBar from 'src/components/SearchBar/SearchBar'

export const SearchContext = createContext(null)

const BlogLayout = ({ children }) => {
  const [searchResult, setSearchResult] = useState(null)
  const { logOut, isAuthenticated } = useAuth()

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
