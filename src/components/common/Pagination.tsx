'use client'
import { useFilters } from '@/hooks/useFilters'
import { IconChevronDown } from '@tabler/icons-react'
import classNames from 'classnames'

interface PaginationProps {
	totalPages: number
	className?: string
}

export const Pagination = ({ totalPages, className }: PaginationProps) => {
	const { page, setPage } = useFilters()
	return (
		<div className={classNames('flex w-full justify-center items-center gap-4', className)}>
			<button
				className='bg-white text-dark-gray px-6 py-1 rounded-full disabled:opacity-50'
				disabled={page === 1}
				onClick={() => setPage(1)}
			>
				Pierwsza
			</button>
			<button
				className='bg-white text-dark-gray px-6 py-1 rounded-full disabled:opacity-50'
				disabled={page === 1}
				onClick={() => setPage(page - 1)}
			>
				Poprzednia
			</button>
			<div className='flex items-center gap-2'>
				<div className='relative'>
					<select
						className='bg-white text-dark-gray px-6  pr-8 py-1 rounded-full disabled:opacity-50 appearance-none'
						value={page}
						onChange={(e) => setPage(Number(e.target.value))}
					>
						{Array.from({ length: totalPages }, (_, index) => (
							<option key={index + 1} value={index + 1}>
								{index + 1}
							</option>
						))}
					</select>
					<IconChevronDown className='absolute right-[6px] top-[calc(50%-8px)]' size={16} />
				</div>
				<span className='flex items-center gap-2 text-white'>
					{'z '}
					<strong>{totalPages}</strong>
				</span>
			</div>
			<button
				className='bg-white text-dark-gray px-6 py-1 rounded-full disabled:opacity-50'
				disabled={page === totalPages}
				onClick={() => setPage(page + 1)}
			>
				Następna
			</button>
			<button
				className='bg-white text-dark-gray px-6 py-1 rounded-full disabled:opacity-50'
				disabled={page === totalPages}
				onClick={() => setPage(totalPages)}
			>
				Ostatnia
			</button>
		</div>
	)
}
