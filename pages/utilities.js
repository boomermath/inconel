import bookmarklets from "../utils/bookmarklets"

export default function Utilities() {
    const details = (event, description) => {
        event.preventDefault();
        alert(description);
    }

    return (
        <div className="pt-20">
            <h1 className="text-8xl">Utilities</h1>
            <p className="text-2xl m-10">
                Below are some bookmarklets that can help bypass web restrictions or make life easier. <br />
                Drag the button to your bookmark bar to save it, and hover over it to learn more.
            </p>
            <div className="grid grid-cols-3">
                {
                    Object.entries(bookmarklets)
                        .map(([name, bookmark]) =>
                            <a
                                key={name}
                                className="text-lg border-4 border-brown dark:border-white rounded-md p-2 hover:bg-brown hover:text-white dark:hover:bg-white dark:hover:text-black transform duration-200 hover:scale-110 m-4"
                                title={bookmark.description}
                                onClick={(e) => details(e, bookmark.description)} href={`javascript:${bookmark.code}`}>
                                {name}
                            </a>
                        )
                }
            </div>
        </div>
    )
}