import { Suspense, lazy } from 'react';
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Layout } from './layout.page';

const HomeLazy = lazy(() => import('./home/home.component'));
const PanleLazy = lazy(() => import('./mini-panle/mini-panle.component'));
export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path='/' element={<Layout />}>
				<Route
					index
					element={
						<Suspense>
							<HomeLazy />
						</Suspense>
					}
				/>

				<Route
					path='panle'
					element={
						<Suspense>
							<PanleLazy />
						</Suspense>
					}
				/>
			</Route>
		</Route>
	)
);
