export default function Message({ data }) {
    return (
        <>
        <div className="w-full overflow-x-auto border border-background rounded-lg p-4">
            <p>{data}</p>
        </div>
        </>
    )
}