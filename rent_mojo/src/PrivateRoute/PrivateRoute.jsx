import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
	const { isAuthenticated } = useSelector((store) => store.auth);
	const navigate = useNavigate();

	if (!isAuthenticated) {
		return navigate('/');
	}

	return children;
}
