import { useState } from "react";
import Modal from "./modal";
import certificate from "../../assets/images/certificate.jpg";

const Certificate: React.FC = () => {
	const [isOpened, setIsOpened] = useState(false);

	const openModal = () => {
		setIsOpened(true);
	};
	const closeModal = () => {
		setIsOpened(false);
	};

	return (
		<>
			<button className="btn-certificate" onClick={openModal}>
				Сертификат
			</button>

			<Modal isOpen={isOpened} onClose={closeModal}>
				<div className="certificate__img">
					<img src={certificate} alt="Сертификат" />
				</div>
			</Modal>
		</>
	);
};

export default Certificate;
