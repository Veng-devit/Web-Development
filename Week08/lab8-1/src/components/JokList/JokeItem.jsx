
const JokeItem = ({ joke, onSelect, isSelected }) => (
    <div
        onClick={() => onSelect(joke.id)}
        className={`p-4 border cursor-pointer ${isSelected ? "bg-blue-100 border-blue-500" : ""}`}>
        {joke.text}
    </div>
);


export default JokeItem;

