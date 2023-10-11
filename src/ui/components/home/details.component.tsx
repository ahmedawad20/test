import { useState } from 'react';
import { EyeIcon } from '../../../ui/icons';
import { Button, Modal } from 'react-bootstrap';
import { New } from 'model';
import styles from './home.module.scss';

interface Props {
	news: New;
}
export const Details = ({ news }: Props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
	};

	return (
		<>
			<button onClick={() => setShow(true)}>
				<EyeIcon />
			</button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Body>
					<img
						src={news.urlToImage}
						className={styles['details__image']}
					/>
					<h1 className={styles['details__title']}>{news.title}</h1>
					<p className={styles['details__desc']}>
						{news.description}
					</p>
					<p className={styles['details__author']}>{news.author}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
