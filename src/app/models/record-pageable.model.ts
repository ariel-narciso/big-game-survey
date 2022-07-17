import { Record } from "./record.model";

export interface RecordPageable {
	content: Record[],
	pageable: {
		sort: {
			sorted: boolean,
			unsorted: boolean,
			empty: boolean
		},
		pageSize: number,
		pageNumber: number,
		offset: number
		paged: boolean,
		unpaged: boolean
	}
	totalPages: number,
	totalElements: number,
	last: boolean,
	first: boolean,
	sort: {
		sorted: boolean,
		unsorted: boolean,
		empty: boolean
	},
	number: number,
	numberOfElements: number,
	size: number,
	empty: boolean
}
