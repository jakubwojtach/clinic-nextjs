'use client'
import { BlogPost } from '@/types/sanity'
import classNames from 'classnames'
import { useFilters } from '@/hooks/useFilters'
import { perPageOptions, sortingOptions } from '@/constants/filters'

interface FiltersProps {
	tags: BlogPost['tags']
}

export const Filters = ({ tags }: FiltersProps) => {
	const { selectedTag, setSelectedTag, sorting, setSorting, searchQuery, setSearchQuery, perPage, setPerPage } =
		useFilters()

	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<p className='text-white text-sm font-bold'>Szukaj:</p>
				<input
					type='text'
					value={searchQuery || ''}
					onChange={(e) => setSearchQuery(e.target.value)}
					className='w-full py-2 border-b-[1px] border-light-pink border-0 text-light-pink  focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder='Wyszukaj artykuł po tytule lub treści...'
				/>
			</div>
			<div className='flex flex-col gap-8 sm:gap-0sm:flex-row w-full justify-between sm:items-end'>
				<div className='flex self-start flex-col gap-5'>
					<p className='text-white text-sm font-bold'>Filtruj po tagu:</p>
					<div className='flex flex-wrap gap-2 self-start'>
						<button
							onClick={() => setSelectedTag('')}
							className={classNames('text-dark-gray bg-pink px-3 py-1 rounded-full text-xs font-semibold', {
								'bg-white !text-dark-gray': selectedTag === ''
							})}
						>
							Wszystkie
						</button>
						{tags.map((t) => (
							<button
								key={t._id}
								onClick={() => setSelectedTag(t.name)}
								className={classNames('text-dark-gray bg-pink px-3 py-1 rounded-full text-xs font-semibold', {
									'bg-white text-dark-gray': t.name === selectedTag
								})}
							>
								{t.name}
							</button>
						))}
					</div>
				</div>
				<div className='flex w-full justify-between sm:gap-8'>
					<div className='flex flex-col gap-2'>
						<p className='text-white text-sm font-bold'>Sortuj:</p>
						<select
							name='sorting'
							id='sorting'
							value={sorting}
							onChange={(e) => setSorting(e.target.value)}
							className='w-full py-2 border-b-[1px] border-light-pink border-0 text-light-pink  focus:outline-none focus:ring-2 focus:ring-blue-500'
						>
							{sortingOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
					<div className='flex flex-col gap-2'>
						<p className='text-white text-sm font-bold'>Na stronie:</p>
						<select
							name='perPage'
							id='perPage'
							value={perPage || 10}
							onChange={(e) => setPerPage(Number(e.target.value))}
							className='w-full py-2 border-b-[1px] border-light-pink border-0 text-light-pink  focus:outline-none focus:ring-2 focus:ring-blue-500'
						>
							{perPageOptions.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}
