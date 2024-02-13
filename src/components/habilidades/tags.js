const tags = [
  "Next.js",
  "React",
  "Figma*",
  "Web Design*",
  "HTML",
  "JavaScript",
  "UX/UI*",
  "User Experience*",
  "CSS",
  "Tailwind",
];

const TagsGrid = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="bg-zinc-800 p-2 px-4 rounded-2xl border-2 border-azul-claro flex items-center justify-center">
          <span className="text-xs text-gray-400 px-4">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default TagsGrid;
