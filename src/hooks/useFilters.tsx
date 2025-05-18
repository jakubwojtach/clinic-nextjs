import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { convertToSortingString, convertFromSortingString } from '@/utils/utils'

export const useFilters = () => {
	const [selectedTag, setSelectedTag] = useState<string>('')
	const [searchQuery, setSearchQuery] = useState<string>('')
	const [sorting, setSorting] = useState<string>('oldest')
	const [perPage, setPerPage] = useState<number>(10)
	const [page, setPage] = useState<number>(1)
	const [isInitialized, setIsInitialized] = useState(false)
	const router = useRouter()

	const updateUrlParam = (params: URLSearchParams, key: string, value: string | number | undefined) => {
		if (value) {
			params.set(key, value.toString())
		} else {
			params.delete(key)
		}
	}

	// Initialize state from URL parameters on mount
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search)

		const tag = urlParams.get('tag')
		const search = urlParams.get('searchQuery')
		const sort = urlParams.get('sorting')
		const perPageParam = urlParams.get('perPage')
		const pageParam = urlParams.get('page')

		if (tag) setSelectedTag(tag)
		if (search) setSearchQuery(search)
		if (sort) {
			// Convert from Sanity sorting format to UI format
			setSorting(convertFromSortingString(sort))
		} else {
			// If no sorting parameter, use the default
			setSorting('oldest')
		}
		if (perPageParam) setPerPage(Number(perPageParam))
		if (pageParam) setPage(Number(pageParam))

		setIsInitialized(true)
	}, [])

	// Update URL parameters when state changes
	useEffect(() => {
		if (!isInitialized) return

		const urlParams = new URLSearchParams(window.location.search)

		updateUrlParam(urlParams, 'tag', selectedTag)
		updateUrlParam(urlParams, 'searchQuery', searchQuery)
		updateUrlParam(urlParams, 'sorting', convertToSortingString(sorting))
		updateUrlParam(urlParams, 'perPage', perPage)
		updateUrlParam(urlParams, 'page', page)

		router.push(window.location.pathname + '?' + urlParams.toString())
	}, [selectedTag, searchQuery, sorting, perPage, page, router, isInitialized])

	return {
		selectedTag,
		searchQuery,
		sorting,
		perPage,
		page,
		setSelectedTag,
		setSearchQuery,
		setSorting,
		setPerPage,
		setPage
	}
}
