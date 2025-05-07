import { BlogList } from '@/components/BlogList'
import { getContainerClass } from '@/components/common/utils'
import classNames from 'classnames'
import { Suspense } from 'react'

type Props = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPage({ searchParams }: Props) {
	const { sorting, tag, searchQuery, perPage } = await searchParams

	return (
		<Suspense fallback={<div>Ładowanie...</div>}>
			<div className={classNames(getContainerClass('withPadding'), '!pt-0')}>
				<BlogList
					withButton={false}
					tag={tag as string}
					withTitle={false}
					withFilters
					sort={sorting as string}
					searchQuery={searchQuery as string}
					perPage={Number(perPage) || 10}
					withFeatured
				/>
			</div>
		</Suspense>
	)
}
