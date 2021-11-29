const FormWrapper = ({ children }) => {
	return (
		<div
			className='grid grid-cols-1 gap-4 md:grid-cols-2'
			style={{ direction: 'rtl' }}
		>
			{children}
		</div>
	);
};

export default FormWrapper;
