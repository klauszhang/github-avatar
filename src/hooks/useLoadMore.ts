import { useState, useEffect } from 'react'
import { DocumentNode } from 'graphql'
import { useLazyQuery } from '@apollo/client'
import { DataFields } from '../types/common'

function useLoadMore<T>(query: DocumentNode, first = 20) {
  const [dataList, setDataList] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [fetchData, { data, error, fetchMore }] =
    useLazyQuery<DataFields<T>>(query)

  useEffect(() => {
    // When the component mounts or the query variables change, fetch the initial data
    fetchData({ variables: { first } })
  }, [fetchData, first])

  useEffect(() => {
    if (data && data.marketplaceListings.edges) {
      // When new data is fetched, append it to the existing data list
      setDataList((prevList) => [
        ...prevList,
        ...data.marketplaceListings.edges.map((edge) => edge.node),
      ])
    }
  }, [data])

  const handleLoadMore = () => {
    if (data?.marketplaceListings?.pageInfo?.hasNextPage) {
      // If there's more data to load, fetch it using fetchMore
      setLoading(true)
      fetchMore({
        variables: {
          after: data.marketplaceListings.pageInfo.endCursor,
          first,
        },
        //Update the data in cache after new data has been fetched.
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          const newEdges = fetchMoreResult.marketplaceListings.edges
          const pageInfo = fetchMoreResult.marketplaceListings.pageInfo
          return {
            marketplaceListings: {
              __typename: prev.marketplaceListings.__typename,
              edges: [...newEdges],
              pageInfo,
            },
          }
        },
      }).finally(() => setLoading(false))
    }
  }

  return {
    dataList,
    loading,
    error,
    handleLoadMore: data?.marketplaceListings?.pageInfo?.hasNextPage
      ? handleLoadMore
      : undefined,
  }
}

export default useLoadMore
