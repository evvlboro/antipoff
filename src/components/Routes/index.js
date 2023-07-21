import { Routes as RoutesDOM, Route } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { Registration, Login, NotFound } from '../../pages';

export const Routes = () => (
	<RoutesDOM>
		<Route
			path={ROUTES.ROOT}
			element={
				<Registration />
			}
		/>
		<Route
			path={ROUTES.REGISTRATION}
			element={
				<Registration />
			}
		/>
		<Route
			path={ROUTES.LOGIN}
			element={
				<Login />
			}
		/>
		<Route path="*" element={<NotFound />} />
	</RoutesDOM>
);
