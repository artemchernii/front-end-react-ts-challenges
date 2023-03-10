import { useState } from 'react';
import { anotherBtn, styleSubmitBtn } from './buttonsClasses';
import Paragraph from './Paragraph';
import styles from './Rating.module.css';

export function Rating() {
	const [selectedRating, setSelectedRating] = useState<number>();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

	function handleRatingClick(rating: number) {
		setSelectedRating(rating);
	}

	function handleSubmitForm(e: React.FormEvent) {
		e.preventDefault();
		setIsSubmitted(true);
	}

	const content: string =
		'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.';
	return isSubmitted ? (
		<div className={styles.panel}>
			<h1 className={styles['title'] + ' ' + styles['align-center']}>
				Thank you!
			</h1>
			<div className={styles.selected + ' ' + styles['align-center']}>
				You selected{' '}
				<span className={styles['selected-highlight']}>
					{selectedRating}
				</span>{' '}
				out of 5
			</div>
			<p className={styles['align-center']}>
				We appreciete you taking the time to give a reating. Don't
				hesitate to contact us again if you need help.
			</p>
		</div>
	) : (
		<form className={styles.panel} onSubmit={handleSubmitForm}>
			<img
				className={styles.star}
				src="/Paomedia-Small-N-Flat-Star.512.png"
				alt="123"
			/>

			<h1 className={styles.title}>How did you do?</h1>
			<Paragraph content={content} />
			<div className={styles.group}>
				{[1, 2, 3, 4, 5].map((rating) => {
					return (
						<button
							type="button"
							onClick={() => handleRatingClick(rating)}
							className={anotherBtn + ' ' + styles.rating}
						>
							{rating}
						</button>
					);
				})}
			</div>
			<button
				type="submit"
				disabled={selectedRating === undefined}
				className={styleSubmitBtn + ' ' + styles.submit}
			>
				Submit
			</button>
		</form>
	);
}
