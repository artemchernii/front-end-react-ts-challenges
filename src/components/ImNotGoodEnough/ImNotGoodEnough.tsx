import { useState } from 'react';
import { CardGroup } from './CardGroup';
import './ImNotGoodEnough.css';

enum Status {
	ACTIVE = 'active',
	AFTER = 'after',
	BEFORE = 'before-active',
	BEFOREAFTER = 'before-after',
	UNKNOWN = 'unknown',
}
interface Slide {
	index: number;
	status: Status;
}

export function ImNotGoodEnough() {
	const [currentActive, setCurrentActive] = useState<number>(0);
	const [slides, setSlides] = useState<Slide[]>([
		{ index: 0, status: Status.ACTIVE },
		{ index: 1, status: Status.UNKNOWN },
		{ index: 2, status: Status.UNKNOWN },
	]);

	function handleHateClick() {
		const nextActive = (currentActive: number) => {
			if (currentActive > 0) {
				return currentActive - 1;
			} else {
				return slides.length - 1;
			}
		};
		const next = nextActive(currentActive);
		console.log(next);
		const updatedSlides: Slide[] = slides.map((slide, index) => {
			if (index === currentActive) {
				return { index: slide.index, status: Status.BEFORE };
			} else if (index === next) {
				return { index: slide.index, status: Status.BEFOREAFTER };
			} else {
				return slide;
			}
		});
		setSlides(updatedSlides);
		setTimeout(() => {
			setSlides((slides) =>
				slides.map((slide, index) => {
					if (index === next) {
						return { index: slide.index, status: Status.ACTIVE };
					} else {
						return slide;
					}
				})
			);
			setCurrentActive(next);
		}, 300);
	}
	function handleLoveClick() {
		const nextActive = (currentActive: number) => {
			if (currentActive + 1 <= slides.length - 1) {
				return currentActive + 1;
			} else {
				return 0;
			}
		};
		const next = nextActive(currentActive);
		const updatedSlides: Slide[] = slides.map((slide, index) => {
			if (index === currentActive) {
				return { index: slide.index, status: Status.AFTER };
			} else if (index === next) {
				return { index: slide.index, status: Status.BEFORE };
			} else {
				return slide;
			}
		});
		setSlides(updatedSlides);
		setTimeout(() => {
			setSlides((slides) =>
				slides.map((slide, index) => {
					if (index === next) {
						return { index: slide.index, status: Status.ACTIVE };
					} else {
						return slide;
					}
				})
			);
			setCurrentActive(next);
		}, 300);
	}
	return (
		<div className="wrapper">
			<div className="card-swiper">
				<div className="cardgroups">
					<CardGroup
						index={slides[0].index}
						status={slides[0].status}
					/>
					<CardGroup
						index={slides[1].index}
						status={slides[1].status}
					/>
					<CardGroup
						index={slides[2].index}
						status={slides[2].status}
					/>
				</div>
				<div className="card-swiper-buttons">
					<button id="hate-button" onClick={() => handleHateClick()}>
						<i className="fa-solid fa-x"></i>
					</button>
					<button id="love-button" onClick={() => handleLoveClick()}>
						<i className="fa-solid fa-heart"></i>
					</button>
				</div>
			</div>
		</div>
	);
}
