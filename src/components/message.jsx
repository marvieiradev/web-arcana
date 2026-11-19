export default function Message({ data }) {
    return (
        <>
        <div className="w-full max-w-300 overflow-x-auto border border-background rounded-lg p-4 bg-amber-100 text-obsidian">
            <p>{data}</p>
        </div>
        </>
    )
}