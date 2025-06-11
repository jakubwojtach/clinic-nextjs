import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { sanityConfig } from '@/lib/sanity.config'

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
	...sanityConfig
})
