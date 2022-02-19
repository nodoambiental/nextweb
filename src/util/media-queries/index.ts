import { onMount } from 'svelte';
import { writable } from 'svelte/store';
import { fromEvent, Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export function mediaQuery(query: string): Observable<boolean> {
	const mediaQuery = window.matchMedia(query);
	return fromEvent(mediaQuery, 'change').pipe(
		startWith(mediaQuery),
		map((list: MediaQueryList) => list.matches)
	);
}

export const mediaState = writable({
	isMenuOpen: false,
	isMobileActive: false
});

export const changeMenuState = (): void => {
	mediaState.update((state) => {
		return { ...state, isMenuOpen: !state.isMenuOpen };
	});
};

export const setMenuListener = (): void => {
	onMount(() => {
		mediaQuery('(max-width: 768px)').subscribe({
			next: (isMobileActive) => {
				mediaState.set({ isMenuOpen: false, isMobileActive });
			}
		});
	});
};
