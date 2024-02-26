import { useContext } from 'react'

import type { ArticlesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'
import { SearchContext } from 'src/layouts/BlogLayout'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  const searchResult = useContext(SearchContext)

  return (
    <div className="space-y-10">
      {searchResult
        ? articles.map((article) => {
            if (
              article.title.toLowerCase().includes(searchResult) ||
              article.user.name.toLowerCase().includes(searchResult)
            ) {
              return (
                <Article article={article} key={article.id} summary={true} />
              )
            }
          })
        : articles.map((article) => (
            <Article article={article} key={article.id} summary={true} />
          ))}
    </div>
  )
}
