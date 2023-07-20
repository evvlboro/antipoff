import { Routes as RoutesDOM, Route } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { NotFound } from '../../pages/NotFound';
import { Registration } from '../../pages/Registration';

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
		<Route path="*" element={<NotFound />} />
	</RoutesDOM>
);
