import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes } from '../Routes';
import { autoLoginUser } from '../../store/slices/user';
import './styles.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(autoLoginUser());
    }

  }, [dispatch]);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
