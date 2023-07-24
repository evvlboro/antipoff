import { Routes as RoutesDOM, Route } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { Main, Mate, Registration, Login, NotFound } from '../../pages';
import { PrivateRoute, PublicRoute } from '..';

export const Routes = () => (
	<RoutesDOM>
		<Route
			path={ROUTES.ROOT}
			element={
				<Main />
			}
		/>
		<Route
			path={ROUTES.MATE}
			element={
				<PrivateRoute>
					<Mate />
				</PrivateRoute>
			}
		/>
		<Route
			path={ROUTES.REGISTRATION}
			element={
				<PublicRoute>
					<Registration />
				</PublicRoute>
			}
		/>
		<Route
			path={ROUTES.LOGIN}
			element={
				<PublicRoute>
					<Login />
				</PublicRoute>
			}
		/>
		<Route path="*" element={<NotFound />} />
	</RoutesDOM>
);
