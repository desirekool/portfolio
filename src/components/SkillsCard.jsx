const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}
      <h4 className='mx-4 inline mt-6 font-bold'>{title}</h4>
      </span>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};
export default SkillsCard;
