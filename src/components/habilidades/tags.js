const tags = [
  "Next.js",
  "React",
  "Figma*",
  "UX/UI*",
  "Web Design*",
  "User Experience*",
  "Tailwind",
];

const TagsGrid = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div key={index}
          className="flex bg-zinc-800 p-2 rounded-md border-2 border-azul-claro items-center justify-center" >
          <span className="text-xs text-gray-400 px-4">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default TagsGrid;
