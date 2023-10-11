import { Link, Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
	const { pathname } = useLocation();
	return (
		<>
			<header className='header'>
				<div className='container'>
					<ul className='header__list'>
						<li className='header__item'>
							<Link
								to='/'
								className={`header__link ${
									pathname === '/'
										? 'header__link--active'
										: ''
								}`}>
								Home
							</Link>
						</li>
						<li className='header__item'>
							<Link
								to='/panle'
								className={`header__link ${
									pathname === '/panle'
										? 'header__link--active'
										: ''
								}`}>
								Panle
							</Link>
						</li>
					</ul>
				</div>
			</header>
			<main className={`main__content`.trim()}>
				<div className='content__wrapper'>
					<Outlet />
					{/* <Footer /> */}
				</div>
			</main>
		</>
	);
};
