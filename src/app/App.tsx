import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';

import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}
