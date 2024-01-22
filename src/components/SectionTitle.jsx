const SectionTitle = ({ text, className = '' }) => {
  return (
    <div className={`border-b border-gray-200 pb-5 ${className}`}>
      <h2 className='text-3xl font-medium tracking-wider capitalize'>{text}</h2>
    </div>
  );
};
export default SectionTitle;
