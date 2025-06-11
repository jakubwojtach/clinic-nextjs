export const REVALIDATE_TIME = 1 // in seconds

export const sanityConfig = {
	revalidate: REVALIDATE_TIME,
	next: {
		revalidate: REVALIDATE_TIME
	}
}
