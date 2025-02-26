import { http, HttpResponse } from 'msw';

export const aboutHandler = http.get('/api/about', () => {
	return HttpResponse.json({ message: 'Hello from MSW!' });
});
