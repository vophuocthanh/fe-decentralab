interface BoxSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function BoxSection({
  title,
  description,
  icon,
}: BoxSectionProps) {
  return (
    <div className='p-4 flex flex-col space-y-4 border-[#101423] border-2 w-full h-auto sm:w-60 sm:h-52 md:w-72 md:h-60 lg:w-80 lg:h-64 xl:w-96 xl:h-72'>
      <span className='mb-4'>{icon}</span>
      <h1 className='leading-6 text-lg font-semibold'>{title}</h1>
      <p className='text-sm leading-6 text-[#C0C0C9]'>{description}</p>
    </div>
  );
}
